import React, { useState } from 'react';

// Reference frame = bounding box of the leader-line group from Figma (in px)
const REF = { x: 240, y: 1377, w: 985, h: 566 };

const provinces = [
  { name: 'Koshi', ring: [1080.5, 1819.5], end: [1144, 1820], label: { left: 1148, top: 1809 } },
  { name: 'Bagmati', ring: [900.5, 1763.5], end: [1157, 1764], label: { left: 1160, top: 1750 } },
  { name: 'Madhesh', ring: [852.5, 1853.5], end: [852.5, 1917], label: { left: 832, top: 1921 } },
  { name: 'Gandaki', ring: [716.5, 1728.5], end: [716.5, 1846], label: { left: 699, top: 1847 } },
  { name: 'Lumbini', ring: [578.5, 1753.5], end: [578.5, 1820], label: { left: 561, top: 1825 } },
  { name: 'Karnali', ring: [520.5, 1543.5], end: [296, 1543], label: { left: 240, top: 1532 } },
  { name: 'Sudur Pashchim', ring: [388.5, 1642.5], end: [388.5, 1709], label: { left: 369, top: 1709 } },
];

const BASE_COLOR = '#253A55';
const ACTIVE_COLOR = '#2D8A8A';

const labelPct = (coord: number, offset: number, size: number) =>
  `${((coord - offset) / size) * 100}%`;

const NepalMap = () => {
  const [active, setActive] = useState(null);

  return (
    <div className='w-full h-screen relative m-auto flex flex-col justify-center items-center top-80 overflow-hidden'>
      <p className='absolute right-100 top-64 text-4xl'>CHINA</p>

      {/* Same image stack + positioning as before */}
      <img
        src="/Nepal-[Vectorized].png"
        alt="Nepal Map vectorized"
        className='absolute top-15 max-w-full h-auto'
      />
      <img
        src="/NepalMap.png"
        alt="Nepal Map"
        className='absolute max-w-full h-auto'
      />

      {/* Overlay sits exactly on top of the images above — same absolute/top-15 anchor,
          sized to the Figma bounding box, scaled with the images via % width/height */}
      <div className="absolute top-15" style={{ width: REF.w, maxWidth: '100%', aspectRatio: `${REF.w} / ${REF.h}` }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${REF.w} ${REF.h}`}
          preserveAspectRatio="none"
        >
          {provinces.map((p) => {
            const [rx, ry] = p.ring;
            const [ex, ey] = p.end;
            const isActive = active === p.name;
            const color = isActive ? ACTIVE_COLOR : BASE_COLOR;
            return (
              <g
                key={p.name}
                className="cursor-pointer"
                onMouseEnter={() => setActive(p.name)}
                onMouseLeave={() => setActive(null)}
                style={{ pointerEvents: 'all' }}
              >
                {/* invisible fat line = easier hover target */}
                <line
                  x1={rx - REF.x} y1={ry - REF.y} x2={ex - REF.x} y2={ey - REF.y}
                  stroke="transparent" strokeWidth="16"
                />
                <line
                  x1={rx - REF.x} y1={ry - REF.y} x2={ex - REF.x} y2={ey - REF.y}
                  stroke={color} strokeWidth="1"
                  style={{ transition: 'stroke 0.15s ease' }}
                />
                <circle
                  cx={rx - REF.x} cy={ry - REF.y} r="6.5"
                  fill="none" stroke={color} strokeWidth="0.7"
                  style={{ transition: 'stroke 0.15s ease' }}
                />
                <circle
                  cx={rx - REF.x} cy={ry - REF.y} r={isActive ? 5 : 3.5}
                  fill={color}
                  style={{ transition: 'fill 0.15s ease, r 0.15s ease' }}
                />
              </g>
            );
          })}
        </svg>

        {provinces.map((p) => {
          const isActive = active === p.name;
          return (
            <span
              key={p.name}
              onMouseEnter={() => setActive(p.name)}
              onMouseLeave={() => setActive(null)}
              className="absolute font-manrope capitalize leading-[22px] text-base whitespace-nowrap cursor-pointer"
              style={{
                left: labelPct(p.label.left, REF.x, REF.w),
                top: labelPct(p.label.top, REF.y, REF.h),
                color: isActive ? ACTIVE_COLOR : BASE_COLOR,
                fontWeight: isActive ? 700 : 400,
                transition: 'color 0.15s ease, font-weight 0.15s ease',
              }}
            >
              {p.name}
            </span>
          );
        })}
      </div>

      <p className='absolute left-100 bottom-50 text-4xl'>INDIA</p>
    </div>
  );
};

export default NepalMap;
