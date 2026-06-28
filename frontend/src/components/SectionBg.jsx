import React from 'react';

/**
 * SectionBg — renders an absolutely-positioned animated background
 * inside each section. Uses a child div (NOT ::before on section)
 * so it never breaks layout or clips content.
 *
 * Position: absolute, inset: 0, z-index: 0, pointer-events: none
 * Section content must have position: relative + z-index >= 1
 */
const SectionBg = ({ variant = 'default' }) => (
  <div className={`section-bg section-bg--${variant}`} aria-hidden="true" />
);

export default SectionBg;
