import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function HolographicSphere({ mousePos }) {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      // Subtle react to mouse
      if (mousePos.current) {
        meshRef.current.rotation.x += (mousePos.current.y * 0.0003);
        meshRef.current.rotation.y += (mousePos.current.x * 0.0003);
      }
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main sphere */}
      <mesh ref={meshRef} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#060608"
          attach="material"
          distort={0.25}
          speed={1.2}
          roughness={0.15}
          metalness={0.95}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh scale={1.85}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe={true}
          transparent={true}
          opacity={0.12}
        />
      </mesh>

      {/* Outer glow rings */}
      <mesh scale={2.0} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.35} />
      </mesh>
      <mesh scale={2.0} rotation={[Math.PI / 3, 0.5, 0]}>
        <torusGeometry args={[1, 0.008, 16, 100]} />
        <meshBasicMaterial color="#888888" transparent opacity={0.25} />
      </mesh>

      {/* Particles */}
      <Particles />
    </group>
  );
}

function Particles() {
  const count = 120;
  const ref = useRef();
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 0.8;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.07;
      ref.current.rotation.x = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const HeroSphere = ({ mousePos }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#cccccc" />
      <pointLight position={[0, 10, -5]} intensity={0.5} color="#888888" />
      <HolographicSphere mousePos={mousePos} />
    </Canvas>
  );
};

export default HeroSphere;
