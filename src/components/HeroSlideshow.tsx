'use client';

import { useEffect, useRef, useState } from 'react';

const HERO_IMAGES = [
  '/hero.jpg',
  ...Array.from({ length: 9 }, (_, i) => `/hero${i + 2}.jpg`),
  '/herohero11.jpg',
  ...Array.from({ length: 19 }, (_, i) => `/hero${i + 12}.jpg`),
];

const INTERVAL_MS = 5000;
const FADE_MS = 1000;

export default function HeroSlideshow() {
  const [baseIndex, setBaseIndex] = useState(0);
  const [overlayIndex, setOverlayIndex] = useState(1);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    HERO_IMAGES.slice(0, 4).forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let fadeTimeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      const next = (indexRef.current + 1) % HERO_IMAGES.length;

      const preload = new window.Image();
      preload.onload = () => {
        setOverlayIndex(next);
        setOverlayVisible(true);

        fadeTimeout = setTimeout(() => {
          indexRef.current = next;
          setBaseIndex(next);
          setOverlayVisible(false);
        }, FADE_MS);
      };
      preload.src = HERO_IMAGES[next];
    }, INTERVAL_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, []);

  const slideClass = 'absolute inset-0 bg-cover bg-center bg-no-repeat';

  return (
    <div className="absolute inset-0 bg-navy" aria-hidden="true">
      <div
        className={slideClass}
        style={{ backgroundImage: `url(${HERO_IMAGES[baseIndex]})` }}
      />
      <div
        className={`${slideClass} transition-opacity duration-1000 ease-in-out ${
          overlayVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${HERO_IMAGES[overlayIndex]})` }}
      />
    </div>
  );
}
