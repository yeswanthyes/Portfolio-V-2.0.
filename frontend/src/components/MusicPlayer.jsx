import React, { useRef, useState, useEffect, useCallback } from 'react';

/* ── Waveform bar data ─────────────────────────────────────
   80 bars with pseudo-random heights seeded by position.
   Using a deterministic pattern so SSR/hydration matches. */
const BAR_COUNT = 48; /* 48 bars is visually identical but 40% less DOM */
const BARS = Array.from({ length: BAR_COUNT }, (_, i) => {
  const t = i / BAR_COUNT;
  // Multiple sine waves overlaid to look like a real waveform
  const h =
    40 +
    28 * Math.sin(t * Math.PI * 6.3) +
    18 * Math.sin(t * Math.PI * 13.7 + 1.2) +
    10 * Math.sin(t * Math.PI * 23.1 + 0.7) +
    7  * Math.sin(t * Math.PI * 41.5 + 2.1);
  return Math.max(8, Math.min(96, h));
});

const fmt = (s) => {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
};

const MusicPlayer = ({ isStatic = false }) => {
  const audioRef  = useRef(null);
  const waveRef   = useRef(null);
  const [isPlaying,   setIsPlaying]   = useState(false);
  const [volume,      setVolume]      = useState(0.4);
  const [progress,    setProgress]    = useState(0);   // 0–1
  const [currentTime, setCurrentTime] = useState(0);
  const [duration,    setDuration]    = useState(0);
  const [isLooping,   setIsLooping]   = useState(true);

  /* sync volume */
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  /* sync loop */
  useEffect(() => {
    if (audioRef.current) audioRef.current.loop = isLooping;
  }, [isLooping]);

  /* time tracking */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    };
    const onMeta = () => setDuration(audio.duration);
    const onEnd  = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const seek = useCallback((e) => {
    const rect = waveRef.current?.getBoundingClientRect();
    if (!rect || !audioRef.current?.duration) return;
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audioRef.current.currentTime = ratio * audioRef.current.duration;
    setProgress(ratio);
  }, []);

  return (
    <div className="mp-widget">
      <audio
        ref={audioRef}
        src="/The Best One Piece Edit Of 2026 🔥 _ Headlights [4K]_ [dwNxgAVOm10].mp3"
        loop={isLooping}
        preload="metadata"
      />

      {/* ── Corner brackets ─────────────────────── */}
      <span className="mp-corner mp-tl" aria-hidden="true" />
      <span className="mp-corner mp-tr" aria-hidden="true" />
      <span className="mp-corner mp-bl" aria-hidden="true" />
      <span className="mp-corner mp-br" aria-hidden="true" />

      {/* ── Status label ────────────────────────── */}
      <div className="mp-status">
        <span className={`mp-dot${isPlaying ? ' mp-dot--on' : ''}`} />
        {isPlaying ? 'PLAYING' : 'PAUSED'}
      </div>

      {/* ── Main layout: info | waveform | controls ─ */}
      <div className="mp-body">

        {/* Track info */}
        <div className="mp-info">
          <div className="mp-title">ONE PIECE</div>
          <div className="mp-artist">Best Edit — Headlights [4K]</div>
          <div className="mp-album">WANO · GEAR 5 ARC</div>
        </div>

        {/* Waveform + scrubber */}
        <div className="mp-wave-col">
          <div
            className="mp-waveform"
            ref={waveRef}
            onClick={seek}
            role="slider"
            aria-label="Seek"
            aria-valuenow={Math.round(progress * 100)}
          >
            {BARS.map((h, i) => {
              const played = i / BAR_COUNT <= progress;
              return (
                <div
                  key={i}
                  className={`mp-bar${played ? ' mp-bar--played' : ''}${isPlaying ? ' mp-bar--anim' : ''}`}
                  style={{
                    height: `${h}%`,
                    animationDelay: `${((i * 137) % 800) / 1000}s`,
                  }}
                />
              );
            })}
            {/* Scrubber dot */}
            <div
              className="mp-scrubber"
              style={{ left: `calc(${progress * 100}% - 5px)` }}
            />
          </div>
          <div className="mp-times">
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="mp-controls">
          <button
            className={`mp-loop-btn${isLooping ? ' mp-loop-btn--on' : ''}`}
            onClick={() => setIsLooping(l => !l)}
            aria-label="Toggle loop"
            title="Loop"
          >
            <i className="fas fa-redo" />
          </button>

          <button
            className="mp-play-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`} />
          </button>

          <div className="mp-volume">
            <i className="fas fa-volume-up mp-vol-icon" />
            <input
              className="mp-vol-slider"
              type="range"
              min="0" max="1" step="0.02"
              value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
              aria-label="Volume"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default MusicPlayer;
