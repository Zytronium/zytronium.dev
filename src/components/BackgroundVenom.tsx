import type { CSSProperties } from 'react';

export default function BackgroundVenom() {
  const streaks = [
    { column: 2, delay: '-8s', duration: '13.33s' },
    { column: 6, delay: '-17s', duration: '16s' },
    { column: 10, delay: '-3s', duration: '14.67s' },
    { column: 15, delay: '-21s', duration: '17.33s' },
    { column: 20, delay: '-12s', duration: '15.33s' },
    { column: 25, delay: '-19s', duration: '18.67s' },
  ];

  return (
    <div className="background-grid" aria-hidden="true">
      <div className="background-grid-lines" />
      <div className="background-grid-streaks">
        {streaks.map((streak) => (
          <span
            className="background-grid-streak"
            key={streak.column}
            style={{
              '--streak-column': streak.column,
              '--streak-delay': streak.delay,
              '--streak-duration': streak.duration,
            } as CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
