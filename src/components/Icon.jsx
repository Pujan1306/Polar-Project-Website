const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, size = 20, className = '' }) {
  const paths = ICONS[name] || ICONS.circle
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...base}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths}
    </svg>
  )
}

const ICONS = {
  circle: <circle cx="12" cy="12" r="9" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
  thermometer: (
    <>
      <path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0Z" />
    </>
  ),
  ship: (
    <>
      <path d="M3 17c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
      <path d="M5 13l1.5-5h11L19 13" />
      <path d="M12 8V4" />
      <path d="M3 17v2c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0 3 1 4.5 0v-2" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2v20M4 6l16 12M20 6L4 18" />
      <path d="M9 4l3 2 3-2M9 20l3-2 3 2M4 11l3 1-1 3M20 11l-3 1 1 3" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2l2-3h6l2 3h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  videocam: (
    <>
      <rect x="2" y="7" width="14" height="10" rx="2" />
      <path d="m16 10 6-3v10l-6-3Z" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  school: (
    <>
      <path d="m12 3 10 5-10 5L2 8Z" />
      <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  newspaper: (
    <>
      <path d="M4 5h13a1 1 0 0 1 1 1v12a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M18 8h2v10a2 2 0 0 1-2 2" />
      <path d="M7 9h7M7 12h7M7 15h4" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  chevronRight: (
    <>
      <path d="m9 6 6 6-6 6" />
    </>
  ),
  play: (
    <>
      <path d="M8 5.5v13l11-6.5Z" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20.5C7 16.5 3 13.3 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 4-4 7.2-9 11.2Z" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </>
  ),
  gov: (
    <>
      <path d="M3 21h18M5 21V10h14v11" />
      <path d="m12 3 8 5H4Z" />
      <path d="M9 21v-6M12 21v-6M15 21v-6" />
    </>
  ),
  satellite: (
    <>
      <path d="m7 12 5-5 5 5-5 5Z" />
      <path d="M2 13l3 3M19 8l3-3" />
      <path d="M9 21a6 6 0 0 0-6-6" />
      <path d="M13 3a8 8 0 0 1 8 8" />
    </>
  ),
  contrast: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" fill="currentColor" />
      <path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" stroke="none" />
    </>
  ),
  textPlus: (
    <>
      <path d="M4 20 9 6l5 14M5.8 15h6.4" />
      <path d="M18 9v6M15 12h6" />
    </>
  ),
  textMinus: (
    <>
      <path d="M4 20 9 6l5 14M5.8 15h6.4" />
      <path d="M15 12h6" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z" />
      <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7Z" />
    </>
  ),
  library: (
    <>
      <path d="M4 20h16M6 20V8l6-4 6 4v12" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  wave: (
    <>
      <path d="M3 12c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      <path d="M3 17c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      <path d="M3 7c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
    </>
  ),
  mountain: (
    <>
      <path d="m8 21 4-8 4 8" />
      <path d="M3 21 9 8l3 6" />
      <path d="M15 21h6" />
    </>
  ),
}
