// Reusable flat-SVG primitives: base figures, effect overlays, and props.
// Everything is drawn with solid fills and thin strokes — no gradients.
// Scenes (scenes.jsx) compose these inside a 200x140 viewBox.

export const INK = '#3a3f4d'
export const SKIN = '#f6c9a0'
export const PANTS = '#5c6470'

const S = { stroke: INK, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
const NOFILL = { ...S, fill: 'none' }

// ── Faces ────────────────────────────────────────────────────────────

function FaceParts({ face }) {
  switch (face) {
    case 'happy':
      return (
        <g>
          <circle cx="-4" cy="-2" r="1.5" fill={INK} />
          <circle cx="4" cy="-2" r="1.5" fill={INK} />
          <path d="M-4,3 Q0,6.5 4,3" {...NOFILL} />
        </g>
      )
    case 'bigsmile':
      return (
        <g>
          <path d="M-6,-2 Q-4,-4.5 -2,-2" {...NOFILL} />
          <path d="M2,-2 Q4,-4.5 6,-2" {...NOFILL} />
          <path d="M-4,2 Q0,8 4,2 Z" fill="#e8756d" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
        </g>
      )
    case 'sad':
      return (
        <g>
          <circle cx="-4" cy="-2" r="1.5" fill={INK} />
          <circle cx="4" cy="-2" r="1.5" fill={INK} />
          <path d="M-3.5,5 Q0,2.5 3.5,5" {...NOFILL} />
        </g>
      )
    case 'cry':
      return (
        <g>
          <path d="M-6,-2 Q-4,0 -2,-2" {...NOFILL} />
          <path d="M2,-2 Q4,0 6,-2" {...NOFILL} />
          <path d="M-3,5 Q0,3 3,5" {...NOFILL} />
          <path d="M-5,1 q-1.4,3 0,4 q1.4,-1 0,-4" fill="#7db8e8" stroke="none" />
          <path d="M5,1 q-1.4,3 0,4 q1.4,-1 0,-4" fill="#7db8e8" stroke="none" />
        </g>
      )
    case 'angry':
      return (
        <g>
          <path d="M-6.5,-5 L-2,-3" {...NOFILL} />
          <path d="M6.5,-5 L2,-3" {...NOFILL} />
          <circle cx="-4" cy="-1" r="1.5" fill={INK} />
          <circle cx="4" cy="-1" r="1.5" fill={INK} />
          <path d="M-3.5,5.5 Q0,3 3.5,5.5" {...NOFILL} />
        </g>
      )
    case 'worried':
      return (
        <g>
          <path d="M-6.5,-5.5 Q-4,-6.5 -1.5,-5" {...NOFILL} />
          <path d="M6.5,-5.5 Q4,-6.5 1.5,-5" {...NOFILL} />
          <circle cx="-4" cy="-1.5" r="1.5" fill={INK} />
          <circle cx="4" cy="-1.5" r="1.5" fill={INK} />
          <path d="M-3,4.5 Q-1,3.5 0,4.5 Q1,5.5 3,4.5" {...NOFILL} />
        </g>
      )
    case 'shock':
      return (
        <g>
          <circle cx="-4" cy="-2" r="2" fill="none" stroke={INK} strokeWidth="1.6" />
          <circle cx="4" cy="-2" r="2" fill="none" stroke={INK} strokeWidth="1.6" />
          <ellipse cx="0" cy="4.5" rx="2.2" ry="3" fill={INK} />
        </g>
      )
    case 'relaxed':
      return (
        <g>
          <path d="M-6,-2 Q-4,0 -2,-2" {...NOFILL} />
          <path d="M2,-2 Q4,0 6,-2" {...NOFILL} />
          <path d="M-3.5,3.5 Q0,6.5 3.5,3.5" {...NOFILL} />
          <circle cx="-7" cy="2" r="2" fill="#f3a8a0" opacity="0.7" stroke="none" />
          <circle cx="7" cy="2" r="2" fill="#f3a8a0" opacity="0.7" stroke="none" />
        </g>
      )
    case 'sleep':
      return (
        <g>
          <path d="M-6,-1 Q-4,1 -2,-1" {...NOFILL} />
          <path d="M2,-1 Q4,1 6,-1" {...NOFILL} />
          <ellipse cx="0" cy="4.5" rx="1.8" ry="2.2" fill="none" stroke={INK} strokeWidth="1.5" />
        </g>
      )
    default: // neutral
      return (
        <g>
          <circle cx="-4" cy="-2" r="1.5" fill={INK} />
          <circle cx="4" cy="-2" r="1.5" fill={INK} />
          <path d="M-2.5,4 L2.5,4" {...NOFILL} />
        </g>
      )
  }
}

export function Head({ x = 0, y = 0, face = 'neutral', r = 11, hair = '#4a4a55' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx="0" cy="0" r={r} fill={SKIN} stroke={INK} strokeWidth="2" />
      <path d={`M${-r},0 A${r},${r} 0 0 1 ${r},0 L${r - 3},-3 Q${r - 5},${-r + 3} 0,${-r + 2} Q${-r + 5},${-r + 3} ${-r + 3},-3 Z`} fill={hair} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
      <FaceParts face={face} />
    </g>
  )
}

// ── People ───────────────────────────────────────────────────────────
// Origin: center of the feet, on the ground line. Figures are ~62 tall.

export function Person({ x = 0, y = 0, pose = 'stand', face = 'neutral', color = '#5b8dd9', hair = '#4a4a55', flip = false }) {
  const sx = flip ? -1 : 1
  let body = null
  if (pose === 'stand') {
    body = (
      <g>
        <rect x="-8" y="-19" width="6.5" height="19" rx="3" fill={PANTS} stroke={INK} strokeWidth="1.5" />
        <rect x="1.5" y="-19" width="6.5" height="19" rx="3" fill={PANTS} stroke={INK} strokeWidth="1.5" />
        <rect x="-11" y="-48" width="22" height="31" rx="9" fill={color} stroke={INK} strokeWidth="2" />
        <path d="M-10,-42 Q-16,-36 -14,-25" {...NOFILL} strokeWidth="4.5" stroke={color} />
        <path d="M10,-42 Q16,-36 14,-25" {...NOFILL} strokeWidth="4.5" stroke={color} />
        <Head x={0} y={-58} face={face} hair={hair} />
      </g>
    )
  } else if (pose === 'walk') {
    body = (
      <g>
        <path d="M0,-18 L9,0" {...NOFILL} strokeWidth="6" stroke={PANTS} />
        <path d="M0,-18 L-8,-1" {...NOFILL} strokeWidth="6" stroke={PANTS} />
        <g transform="rotate(-4)">
          <rect x="-10" y="-48" width="20" height="31" rx="9" fill={color} stroke={INK} strokeWidth="2" />
          <path d="M-8,-42 Q-15,-34 -11,-26" {...NOFILL} strokeWidth="4.5" stroke={color} />
          <path d="M8,-42 Q15,-38 13,-28" {...NOFILL} strokeWidth="4.5" stroke={color} />
          <Head x={1} y={-58} face={face} hair={hair} />
        </g>
      </g>
    )
  } else if (pose === 'run') {
    body = (
      <g>
        <path d="M0,-18 L13,-4 L15,0" {...NOFILL} strokeWidth="6" stroke={PANTS} />
        <path d="M0,-18 L-11,-8 L-14,-1" {...NOFILL} strokeWidth="6" stroke={PANTS} />
        <g transform="rotate(-13)">
          <rect x="-10" y="-48" width="20" height="31" rx="9" fill={color} stroke={INK} strokeWidth="2" />
          <path d="M-8,-40 Q-17,-38 -18,-30" {...NOFILL} strokeWidth="4.5" stroke={color} />
          <path d="M8,-42 Q16,-46 19,-42" {...NOFILL} strokeWidth="4.5" stroke={color} />
          <Head x={2} y={-58} face={face} hair={hair} />
        </g>
      </g>
    )
  } else if (pose === 'sit') {
    // sitting on the ground / low seat, legs forward
    body = (
      <g>
        <path d="M2,-13 L15,-13 L15,-2" {...NOFILL} strokeWidth="6" stroke={PANTS} />
        <rect x="-10" y="-40" width="20" height="29" rx="9" fill={color} stroke={INK} strokeWidth="2" />
        <path d="M-8,-34 Q-14,-28 -12,-19" {...NOFILL} strokeWidth="4.5" stroke={color} />
        <path d="M8,-34 Q13,-28 11,-19" {...NOFILL} strokeWidth="4.5" stroke={color} />
        <Head x={0} y={-50} face={face} hair={hair} />
      </g>
    )
  } else if (pose === 'lie') {
    // lying flat, head to the right
    body = (
      <g>
        <path d="M-14,-8 L-30,-8" {...NOFILL} strokeWidth="6" stroke={PANTS} />
        <rect x="-16" y="-16" width="32" height="16" rx="8" fill={color} stroke={INK} strokeWidth="2" />
        <Head x={24} y={-11} face={face} hair={hair} />
      </g>
    )
  } else if (pose === 'armsup') {
    body = (
      <g>
        <rect x="-8" y="-19" width="6.5" height="19" rx="3" fill={PANTS} stroke={INK} strokeWidth="1.5" />
        <rect x="1.5" y="-19" width="6.5" height="19" rx="3" fill={PANTS} stroke={INK} strokeWidth="1.5" />
        <rect x="-11" y="-48" width="22" height="31" rx="9" fill={color} stroke={INK} strokeWidth="2" />
        <path d="M-10,-44 Q-17,-50 -18,-57" {...NOFILL} strokeWidth="4.5" stroke={color} />
        <path d="M10,-44 Q17,-50 18,-57" {...NOFILL} strokeWidth="4.5" stroke={color} />
        <Head x={0} y={-58} face={face} hair={hair} />
      </g>
    )
  }
  return <g transform={`translate(${x},${y}) scale(${sx},1)`}>{body}</g>
}

export function Baby({ x = 0, y = 0, face = 'happy', color = '#f0b45c' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path d="M-3,-12 L-6,0 M3,-12 L6,0" {...NOFILL} strokeWidth="4.5" stroke={SKIN} />
      <rect x="-9" y="-26" width="18" height="18" rx="8" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M-8,-22 L-14,-16 M8,-22 L14,-16" {...NOFILL} strokeWidth="4" stroke={color} />
      <g transform="translate(0,-34)">
        <circle cx="0" cy="0" r="10" fill={SKIN} stroke={INK} strokeWidth="2" />
        <path d="M0,-10 q1,-3 3,-4" {...NOFILL} strokeWidth="1.8" />
        <FaceParts face={face} />
      </g>
    </g>
  )
}

// ── Animals ──────────────────────────────────────────────────────────

export function Dog({ x = 0, y = 0, color = '#c98d5a', flip = false, mouthOpen = false }) {
  return (
    <g transform={`translate(${x},${y}) scale(${flip ? -1 : 1},1)`}>
      <rect x="-18" y="-22" width="32" height="18" rx="8" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M-14,-4 L-14,0 M-6,-4 L-6,0 M6,-4 L6,0 M12,-4 L12,0" {...NOFILL} strokeWidth="3.5" stroke={color} />
      <path d="M-18,-18 Q-26,-24 -24,-30" {...NOFILL} strokeWidth="3.5" stroke={color} />
      <circle cx="16" cy="-26" r="10" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M9,-34 q-3,-6 1,-8 q3,3 3,7 Z" fill="#8a5a33" stroke={INK} strokeWidth="1.5" />
      <path d="M22,-35 q3,-6 -1,-7 q-3,3 -3,6 Z" fill="#8a5a33" stroke={INK} strokeWidth="1.5" />
      <circle cx="14" cy="-28" r="1.4" fill={INK} />
      <circle cx="21" cy="-28" r="1.4" fill={INK} />
      <circle cx="18" cy="-24" r="1.8" fill={INK} />
      {mouthOpen && <path d="M15,-20 Q18,-17 21,-20" {...NOFILL} strokeWidth="1.6" />}
    </g>
  )
}

export function Cat({ x = 0, y = 0, color = '#8d8da8', flip = false }) {
  return (
    <g transform={`translate(${x},${y}) scale(${flip ? -1 : 1},1)`}>
      <rect x="-16" y="-20" width="28" height="16" rx="8" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M-12,-4 L-12,0 M-4,-4 L-4,0 M4,-4 L4,0 M9,-4 L9,0" {...NOFILL} strokeWidth="3" stroke={color} />
      <path d="M-16,-14 Q-26,-14 -25,-26" {...NOFILL} strokeWidth="3.5" stroke={color} />
      <circle cx="14" cy="-24" r="9" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M7,-30 L6,-38 L13,-32 Z" fill={color} stroke={INK} strokeWidth="1.5" />
      <path d="M21,-30 L22,-38 L15,-32 Z" fill={color} stroke={INK} strokeWidth="1.5" />
      <path d="M9,-25 L11,-24 M19,-25 L17,-24" {...NOFILL} strokeWidth="1.6" />
      <path d="M12,-21 q2,2 4,0" {...NOFILL} strokeWidth="1.4" />
      <path d="M4,-22 L-1,-23 M4,-19 L-1,-18 M24,-22 L29,-23 M24,-19 L29,-18" {...NOFILL} strokeWidth="1" />
    </g>
  )
}

export function Cow({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-24" y="-30" width="42" height="24" rx="10" fill="#f5f0e6" stroke={INK} strokeWidth="2" />
      <path d="M-18,-6 L-18,0 M-8,-6 L-8,0 M6,-6 L6,0 M13,-6 L13,0" {...NOFILL} strokeWidth="4" stroke="#f5f0e6" />
      <circle cx="-10" cy="-22" r="5" fill="#4a4a55" stroke="none" />
      <circle cx="4" cy="-14" r="4" fill="#4a4a55" stroke="none" />
      <circle cx="20" cy="-34" r="11" fill="#f5f0e6" stroke={INK} strokeWidth="2" />
      <path d="M12,-43 q-2,-4 2,-5 M28,-43 q2,-4 -2,-5" {...NOFILL} />
      <path d="M10,-38 q-5,0 -5,4 M30,-38 q5,0 5,4" {...NOFILL} strokeWidth="3" stroke="#e8bfae" />
      <circle cx="17" cy="-36" r="1.4" fill={INK} />
      <circle cx="24" cy="-36" r="1.4" fill={INK} />
      <ellipse cx="20" cy="-28" rx="6" ry="4" fill="#e8bfae" stroke={INK} strokeWidth="1.5" />
      <circle cx="18" cy="-28" r="1" fill={INK} />
      <circle cx="23" cy="-28" r="1" fill={INK} />
    </g>
  )
}

export function Rabbit({ x = 0, y = 0, color = '#efe6da' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <ellipse cx="0" cy="-11" rx="13" ry="11" fill={color} stroke={INK} strokeWidth="2" />
      <circle cx="8" cy="-24" r="8" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M3,-30 q-4,-10 0,-13 q4,2 3,12 Z" fill={color} stroke={INK} strokeWidth="1.5" />
      <path d="M12,-31 q1,-10 5,-12 q3,3 -1,12 Z" fill={color} stroke={INK} strokeWidth="1.5" />
      <circle cx="6" cy="-25" r="1.3" fill={INK} />
      <circle cx="12" cy="-25" r="1.3" fill={INK} />
      <path d="M8,-21 q2,1.5 4,0" {...NOFILL} strokeWidth="1.3" />
      <circle cx="-11" cy="-8" r="4" fill="#fff" stroke={INK} strokeWidth="1.5" />
    </g>
  )
}

export function Turtle({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path d="M-18,-4 A18,14 0 0 1 18,-4 Z" fill="#7aa864" stroke={INK} strokeWidth="2" />
      <path d="M-9,-15 L-5,-4 M9,-15 L5,-4 M0,-18 L0,-4" {...NOFILL} strokeWidth="1.4" opacity="0.7" />
      <path d="M-16,-4 L-19,0 M-8,-4 L-9,0 M8,-4 L9,0 M16,-4 L19,0" {...NOFILL} strokeWidth="3.5" stroke="#9ec78a" />
      <circle cx="23" cy="-9" r="5.5" fill="#9ec78a" stroke={INK} strokeWidth="2" />
      <circle cx="24.5" cy="-10" r="1.1" fill={INK} />
    </g>
  )
}

export function Bug({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <ellipse cx="0" cy="0" rx="7" ry="4.5" fill="#6b4a3a" stroke={INK} strokeWidth="1.5" />
      <path d="M-5,-3 L-9,-7 M5,-3 L9,-7 M-6,2 L-10,4 M6,2 L10,4 M0,-4 L0,-8" {...NOFILL} strokeWidth="1.2" />
    </g>
  )
}

export function Bird({ x = 0, y = 0, color = '#e8a13c' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <ellipse cx="0" cy="0" rx="8" ry="6" fill={color} stroke={INK} strokeWidth="1.8" />
      <circle cx="7" cy="-4" r="4.5" fill={color} stroke={INK} strokeWidth="1.8" />
      <path d="M11,-4 L15,-3 L11,-2 Z" fill="#c9762a" stroke={INK} strokeWidth="1" />
      <circle cx="7.5" cy="-5" r="1" fill={INK} />
      <path d="M-4,-2 Q-1,-6 3,-3" {...NOFILL} strokeWidth="1.4" />
    </g>
  )
}

// ── Effects / overlays ───────────────────────────────────────────────

export function Spark({ x = 0, y = 0, s = 1, color = '#f2b834' }) {
  return (
    <path
      transform={`translate(${x},${y}) scale(${s})`}
      d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z"
      fill={color} stroke="none"
    />
  )
}

export function Sparkles({ x = 0, y = 0, color = '#f2b834' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <Spark x={0} y={0} s={1.1} color={color} />
      <Spark x={16} y={-10} s={0.7} color={color} />
      <Spark x={-14} y={-6} s={0.6} color={color} />
      <Spark x={8} y={10} s={0.5} color={color} />
    </g>
  )
}

export function RainHeavy({ color = '#6ba3d6' }) {
  const drops = []
  for (let i = 0; i < 9; i++) {
    const x = 14 + i * 21
    drops.push(<path key={i} d={`M${x},8 L${x - 7},34`} stroke={color} strokeWidth="2.5" strokeLinecap="round" />)
    drops.push(<path key={i + 'b'} d={`M${x + 9},44 L${x + 3},66`} stroke={color} strokeWidth="2.5" strokeLinecap="round" />)
  }
  return <g opacity="0.85">{drops}</g>
}

export function RainLight({ color = '#8db8de' }) {
  const drops = []
  for (let i = 0; i < 7; i++) {
    const x = 22 + i * 26
    drops.push(<path key={i} d={`M${x},14 L${x - 2},22`} stroke={color} strokeWidth="2" strokeLinecap="round" />)
    drops.push(<path key={i + 'b'} d={`M${x + 11},38 L${x + 9},46`} stroke={color} strokeWidth="2" strokeLinecap="round" />)
  }
  return <g opacity="0.85">{drops}</g>
}

export function MotionLines({ x = 0, y = 0, len = 12, gap = 6, color = INK }) {
  return (
    <g transform={`translate(${x},${y})`} opacity="0.55">
      <path d={`M0,0 L${-len},0`} stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d={`M2,${gap} L${-len + 4},${gap}`} stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d={`M0,${gap * 2} L${-len},${gap * 2}`} stroke={color} strokeWidth="2" strokeLinecap="round" />
    </g>
  )
}

export function SweatDrop({ x = 0, y = 0, s = 1 }) {
  return (
    <path
      transform={`translate(${x},${y}) scale(${s})`}
      d="M0,-5 Q4,1 4,3.5 A4,4 0 1 1 -4,3.5 Q-4,1 0,-5 Z"
      fill="#7db8e8" stroke={INK} strokeWidth="1.3"
    />
  )
}

export function WobbleLines({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`} opacity="0.6">
      <path d="M-6,0 q3,-4 6,0 q3,4 6,0" {...NOFILL} strokeWidth="1.8" />
      <path d="M-4,7 q3,-4 6,0 q3,4 6,0" {...NOFILL} strokeWidth="1.8" />
    </g>
  )
}

export function FxText({ x = 0, y = 0, size = 13, color = INK, children, bold = true, rotate = 0, opacity = 1 }) {
  return (
    <text
      x={x} y={y} fontSize={size} fill={color} opacity={opacity}
      fontFamily="'Hiragino Sans','Yu Gothic',sans-serif"
      fontWeight={bold ? 700 : 400}
      textAnchor="middle"
      transform={rotate ? `rotate(${rotate},${x},${y})` : undefined}
    >
      {children}
    </text>
  )
}

export function Heart({ x = 0, y = 0, s = 1, color = '#e8756d' }) {
  return (
    <path
      transform={`translate(${x},${y}) scale(${s})`}
      d="M0,2 C-1,-1 -5,-2 -5,1 C-5,3.5 -1.5,5.5 0,7 C1.5,5.5 5,3.5 5,1 C5,-2 1,-1 0,2 Z"
      fill={color} stroke="none"
    />
  )
}

export function AngerMark({ x = 0, y = 0, s = 1, color = '#d9534f' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none">
      <path d="M-6,-2 Q-3,-4 -2,-7" />
      <path d="M2,-7 Q3,-4 6,-2" />
      <path d="M6,2 Q3,4 2,7" />
      <path d="M-2,7 Q-3,4 -6,2" />
    </g>
  )
}

export function Steam({ x = 0, y = 0, color = '#b9c4cf' }) {
  return (
    <g transform={`translate(${x},${y})`} stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9">
      <path d="M0,0 q-4,-6 0,-12 q4,-6 0,-12" />
      <path d="M10,2 q-4,-6 0,-12 q4,-6 0,-12" />
    </g>
  )
}

export function SoundWaves({ x = 0, y = 0, s = 1, color = INK }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7">
      <path d="M0,-6 q5,6 0,12" />
      <path d="M6,-9 q8,9 0,18" />
      <path d="M12,-12 q11,12 0,24" />
    </g>
  )
}

export function Spiral({ x = 0, y = 0, s = 1, color = INK }) {
  return (
    <path
      transform={`translate(${x},${y}) scale(${s})`}
      d="M0,0 m-1,0 a1,1 0 0 1 2,0 a2,2 0 0 1 -4,0 a3.2,3.2 0 0 1 6.4,0 a4.6,4.6 0 0 1 -9.2,0 a6,6 0 0 1 12,0"
      fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.75"
    />
  )
}

export function SpeechBubble({ x = 0, y = 0, w = 34, h = 20, text = '', size = 9, tail = 'left', fill = '#ffffff' }) {
  const tx = tail === 'left' ? -w / 2 + 8 : w / 2 - 8
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={h / 2.6} fill={fill} stroke={INK} strokeWidth="1.8" />
      <path d={`M${tx},${h / 2 - 1} L${tx - 3},${h / 2 + 7} L${tx + 6},${h / 2 - 1} Z`} fill={fill} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x={tx - 2.5} y={h / 2 - 3} width={9} height={4} fill={fill} stroke="none" />
      {text && (
        <text x="0" y={size / 3} fontSize={size} fill={INK} textAnchor="middle" fontWeight="700" fontFamily="'Hiragino Sans','Yu Gothic',sans-serif">
          {text}
        </text>
      )}
    </g>
  )
}

export function ThoughtCloud({ x = 0, y = 0, s = 1, color = '#dde4ec' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <circle cx="-12" cy="0" r="9" fill={color} stroke={INK} strokeWidth="1.6" />
      <circle cx="0" cy="-5" r="11" fill={color} stroke={INK} strokeWidth="1.6" />
      <circle cx="12" cy="1" r="8" fill={color} stroke={INK} strokeWidth="1.6" />
      <ellipse cx="0" cy="2" rx="18" ry="8" fill={color} stroke="none" />
      <circle cx="-16" cy="16" r="3" fill={color} stroke={INK} strokeWidth="1.4" />
      <circle cx="-21" cy="23" r="1.8" fill={color} stroke={INK} strokeWidth="1.2" />
    </g>
  )
}

export function WindLines({ x = 0, y = 0, color = '#8db8de' }) {
  return (
    <g transform={`translate(${x},${y})`} stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none">
      <path d="M0,0 q30,-8 55,0 q12,4 20,-2" />
      <path d="M8,14 q26,-7 48,0 q10,3 17,-2" />
      <path d="M-2,28 q30,-8 55,0" />
    </g>
  )
}

export function Lightning({ x = 0, y = 0, s = 1, color = '#f2c234' }) {
  return (
    <path
      transform={`translate(${x},${y}) scale(${s})`}
      d="M4,-14 L-5,2 L0,2 L-4,14 L7,-2 L1,-2 Z"
      fill={color} stroke={INK} strokeWidth="1.4" strokeLinejoin="round"
    />
  )
}

export function DustPuff({ x = 0, y = 0, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} fill="#d3d9df" stroke={INK} strokeWidth="1.3">
      <circle cx="0" cy="0" r="5" />
      <circle cx="-8" cy="2" r="3.5" />
      <circle cx="7" cy="2" r="3" />
    </g>
  )
}

export function Ripples({ x = 0, y = 0, color = '#6ba3d6' }) {
  return (
    <g transform={`translate(${x},${y})`} stroke={color} strokeWidth="1.8" fill="none" opacity="0.8">
      <ellipse cx="0" cy="0" rx="10" ry="3.5" />
      <ellipse cx="0" cy="0" rx="19" ry="7" />
      <ellipse cx="0" cy="0" rx="28" ry="10.5" />
    </g>
  )
}

export function ShiverLines({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`} stroke={INK} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6">
      <path d="M-3,0 l-4,-3 M-3,6 l-4,3" />
      <path d="M3,0 l4,-3 M3,6 l4,3" />
    </g>
  )
}

// ── Props ────────────────────────────────────────────────────────────

export function Ground({ y = 118, color = '#e3dccb' }) {
  return <rect x="0" y={y} width="200" height={140 - y} fill={color} />
}

export function Sun({ x = 168, y = 26, color = '#f2c234' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx="0" cy="0" r="10" fill={color} stroke={INK} strokeWidth="1.8" />
      <g stroke={color} strokeWidth="2.2" strokeLinecap="round">
        <path d="M0,-14 L0,-18 M10,-10 L13,-13 M14,0 L18,0 M10,10 L13,13 M0,14 L0,18 M-10,10 L-13,13 M-14,0 L-18,0 M-10,-10 L-13,-13" />
      </g>
    </g>
  )
}

export function CloudShape({ x = 0, y = 0, s = 1, color = '#eef2f6' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <circle cx="-14" cy="2" r="10" fill={color} stroke={INK} strokeWidth="1.8" />
      <circle cx="0" cy="-4" r="13" fill={color} stroke={INK} strokeWidth="1.8" />
      <circle cx="14" cy="2" r="10" fill={color} stroke={INK} strokeWidth="1.8" />
      <rect x="-18" y="2" width="36" height="9" rx="4.5" fill={color} stroke="none" />
      <path d="M-23,10 L23,10" stroke={INK} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </g>
  )
}

export function StormCloud({ x = 0, y = 0, s = 1 }) {
  return <CloudShape x={x} y={y} s={s} color="#9aa5b5" />
}

export function Door({ x = 0, y = 118, color = '#b98a5c', open = false }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-24" y="-72" width="48" height="72" rx="3" fill="#e8e0d0" stroke={INK} strokeWidth="2" />
      <rect x="-18" y="-66" width="36" height="66" fill={color} stroke={INK} strokeWidth="2" transform={open ? 'skewY(-6) scale(0.85,1)' : undefined} />
      <circle cx="11" cy="-33" r="2.6" fill="#f2c234" stroke={INK} strokeWidth="1.3" />
      <rect x="-13" y="-58" width="26" height="20" rx="2" fill="none" stroke={INK} strokeWidth="1.5" opacity="0.5" />
    </g>
  )
}

export function Window({ x = 0, y = 0, w = 64, h = 56, children }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-w / 2 - 5} y={-h / 2 - 5} width={w + 10} height={h + 10} rx="4" fill="#c9b18a" stroke={INK} strokeWidth="2" />
      <rect x={-w / 2} y={-h / 2} width={w} height={h} fill="#cfe3f2" stroke={INK} strokeWidth="1.6" />
      {children}
      <path d={`M0,${-h / 2} L0,${h / 2} M${-w / 2},0 L${w / 2},0`} stroke={INK} strokeWidth="1.6" />
    </g>
  )
}

export function Cup({ x = 0, y = 0, s = 1, color = '#e8756d', empty = false }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M-7,-12 L-5.5,2 Q-5,4 -3,4 L3,4 Q5,4 5.5,2 L7,-12 Z" fill={color} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      {empty && <path d="M-5,-9 L5,-9" stroke="#fff" strokeWidth="1.4" opacity="0.7" />}
      <path d="M7,-9 q6,1 4,6 q-1.5,3.5 -5,3" fill="none" stroke={INK} strokeWidth="1.8" />
    </g>
  )
}

export function Pot({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-20" y="-18" width="40" height="18" rx="4" fill="#7a8896" stroke={INK} strokeWidth="2" />
      <path d="M-20,-14 L-27,-14 M20,-14 L27,-14" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="0" cy="-18" rx="20" ry="4" fill="#f0a860" stroke={INK} strokeWidth="1.8" />
      <circle cx="-8" cy="-19" r="2.5" fill="#fff" opacity="0.9" />
      <circle cx="4" cy="-20" r="2" fill="#fff" opacity="0.9" />
      <circle cx="11" cy="-18" r="1.6" fill="#fff" opacity="0.9" />
    </g>
  )
}

export function Pan({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <ellipse cx="0" cy="-4" rx="22" ry="6" fill="#4d5866" stroke={INK} strokeWidth="2" />
      <path d="M20,-6 L34,-10" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="-3" cy="-5" rx="10" ry="3.5" fill="#b06a45" stroke={INK} strokeWidth="1.5" />
    </g>
  )
}

export function WallClock({ x = 0, y = 0, s = 1, hour = 10, minute = 10 }) {
  const ha = ((hour % 12) / 12) * 2 * Math.PI - Math.PI / 2
  const ma = (minute / 60) * 2 * Math.PI - Math.PI / 2
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <circle cx="0" cy="0" r="14" fill="#fff" stroke={INK} strokeWidth="2" />
      <path d="M0,-11 L0,-13 M11,0 L13,0 M0,11 L0,13 M-11,0 L-13,0" stroke={INK} strokeWidth="1.5" />
      <path d={`M0,0 L${Math.cos(ha) * 6},${Math.sin(ha) * 6}`} stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d={`M0,0 L${Math.cos(ma) * 10},${Math.sin(ma) * 10}`} stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="0" cy="0" r="1.4" fill={INK} />
    </g>
  )
}

export function DoorbellPanel({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-8" y="-12" width="16" height="24" rx="3" fill="#d3d9df" stroke={INK} strokeWidth="1.8" />
      <circle cx="0" cy="-2" r="4.5" fill="#f2c234" stroke={INK} strokeWidth="1.6" />
    </g>
  )
}

export function BookStack({ x = 0, y = 0, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-16" y="-8" width="32" height="8" rx="1.5" fill="#5b8dd9" stroke={INK} strokeWidth="1.6" />
      <rect x="-14" y="-16" width="28" height="8" rx="1.5" fill="#e8756d" stroke={INK} strokeWidth="1.6" />
      <rect x="-15" y="-24" width="26" height="8" rx="1.5" fill="#7aa864" stroke={INK} strokeWidth="1.6" />
    </g>
  )
}

export function Bookshelf({ x = 0, y = 118 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-26" y="-64" width="52" height="64" rx="2" fill="#c9b18a" stroke={INK} strokeWidth="2" />
      {[0, 1].map((row) => (
        <g key={row} transform={`translate(0,${-58 + row * 30})`}>
          <rect x="-21" y="0" width="7" height="22" fill="#e8756d" stroke={INK} strokeWidth="1.3" />
          <rect x="-12" y="2" width="7" height="20" fill="#5b8dd9" stroke={INK} strokeWidth="1.3" />
          <rect x="-3" y="0" width="7" height="22" fill="#7aa864" stroke={INK} strokeWidth="1.3" />
          <rect x="6" y="3" width="7" height="19" fill="#f0b45c" stroke={INK} strokeWidth="1.3" />
          <rect x="15" y="1" width="7" height="21" fill="#8d8da8" stroke={INK} strokeWidth="1.3" />
        </g>
      ))}
      <path d="M-26,-32 L26,-32" stroke={INK} strokeWidth="2" />
    </g>
  )
}

export function Plate({ x = 0, y = 0, broken = false }) {
  if (!broken) {
    return (
      <g transform={`translate(${x},${y})`}>
        <ellipse cx="0" cy="0" rx="16" ry="5" fill="#fff" stroke={INK} strokeWidth="1.8" />
        <ellipse cx="0" cy="-0.5" rx="9" ry="2.6" fill="none" stroke={INK} strokeWidth="1.2" opacity="0.5" />
      </g>
    )
  }
  return (
    <g transform={`translate(${x},${y})`}>
      <path d="M-16,2 L-6,-3 L-2,2 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M0,-4 L8,-5 L12,2 L2,3 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14,-2 L20,1 L15,4 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    </g>
  )
}

export function TrainSide({ x = 0, y = 0, color = '#5b8dd9' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-52" y="-34" width="104" height="30" rx="7" fill={color} stroke={INK} strokeWidth="2" />
      <rect x="-44" y="-28" width="18" height="12" rx="2" fill="#cfe3f2" stroke={INK} strokeWidth="1.5" />
      <rect x="-18" y="-28" width="18" height="12" rx="2" fill="#cfe3f2" stroke={INK} strokeWidth="1.5" />
      <rect x="8" y="-28" width="18" height="12" rx="2" fill="#cfe3f2" stroke={INK} strokeWidth="1.5" />
      <rect x="34" y="-28" width="12" height="12" rx="2" fill="#cfe3f2" stroke={INK} strokeWidth="1.5" />
      <circle cx="-30" cy="-2" r="4.5" fill="#4d5866" stroke={INK} strokeWidth="1.6" />
      <circle cx="26" cy="-2" r="4.5" fill="#4d5866" stroke={INK} strokeWidth="1.6" />
      <path d="M-58,3 L58,3" stroke={INK} strokeWidth="2" />
      <path d="M-54,7 L-48,3 M-42,7 L-36,3 M-30,7 L-24,3 M-18,7 L-12,3 M-6,7 L0,3 M6,7 L12,3 M18,7 L24,3 M30,7 L36,3 M42,7 L48,3" stroke={INK} strokeWidth="1.3" opacity="0.6" />
    </g>
  )
}

export function TrainInterior({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-70" y="-58" width="140" height="76" rx="6" fill="#eef2f6" stroke={INK} strokeWidth="2" />
      <rect x="-58" y="-48" width="34" height="20" rx="2" fill="#cfe3f2" stroke={INK} strokeWidth="1.5" />
      <rect x="-14" y="-48" width="34" height="20" rx="2" fill="#cfe3f2" stroke={INK} strokeWidth="1.5" />
      <rect x="30" y="-48" width="28" height="20" rx="2" fill="#cfe3f2" stroke={INK} strokeWidth="1.5" />
      <rect x="-62" y="-14" width="124" height="14" rx="5" fill="#7aa864" stroke={INK} strokeWidth="1.8" />
      <path d="M-40,-14 L-40,0 M-12,-14 L-12,0 M16,-14 L16,0 M44,-14 L44,0" stroke={INK} strokeWidth="1.3" opacity="0.5" />
      <path d="M-50,-58 L-50,-50 M0,-58 L0,-50 M46,-58 L46,-50" stroke={INK} strokeWidth="1.6" opacity="0.6" />
    </g>
  )
}

export function Sofa({ x = 0, y = 118, color = '#7aa864' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-38" y="-30" width="76" height="22" rx="7" fill={color} stroke={INK} strokeWidth="2" />
      <rect x="-44" y="-36" width="12" height="30" rx="5" fill={color} stroke={INK} strokeWidth="2" />
      <rect x="32" y="-36" width="12" height="30" rx="5" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M-36,-8 L-36,0 M36,-8 L36,0" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </g>
  )
}

export function Plant({ x = 0, y = 118, s = 1, tall = false }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M-9,0 L9,0 L6,-12 L-6,-12 Z" fill="#c9762a" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <path d={`M0,-12 L0,${tall ? -52 : -30}`} stroke="#5d8a4a" strokeWidth="2.5" strokeLinecap="round" />
      <path d={`M0,${tall ? -30 : -20} q-10,-2 -13,-11`} stroke="#5d8a4a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <ellipse cx={-14} cy={tall ? -44 : -33} rx="5.5" ry="3.5" fill="#7aa864" stroke={INK} strokeWidth="1.5" transform={`rotate(-40 ${-14} ${tall ? -44 : -33})`} />
      <path d={`M0,${tall ? -38 : -24} q9,-2 11,-9`} stroke="#5d8a4a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <ellipse cx={12} cy={tall ? -49 : -35} rx="5.5" ry="3.5" fill="#7aa864" stroke={INK} strokeWidth="1.5" transform={`rotate(35 12 ${tall ? -49 : -35})`} />
      <ellipse cx={0} cy={tall ? -56 : -34} rx="4.5" ry="6" fill="#7aa864" stroke={INK} strokeWidth="1.5" />
    </g>
  )
}

export function Bag({ x = 0, y = 118, tattered = false, color = '#b98a5c' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-17" y="-26" width="34" height="26" rx="5" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M-8,-26 q0,-9 8,-9 q8,0 8,9" fill="none" stroke={INK} strokeWidth="2.5" />
      <rect x="-11" y="-17" width="22" height="3.5" rx="1.5" fill="#8a5a33" stroke="none" />
      {tattered && (
        <g>
          <path d="M-17,-10 l-4,3 M17,-14 l4,-3" stroke={INK} strokeWidth="1.5" />
          <path d="M-6,-6 l4,-4 M-2,-6 l-4,-4" stroke={INK} strokeWidth="1.5" />
          <rect x="6" y="-10" width="7" height="6" fill="#8a5a33" stroke={INK} strokeWidth="1.2" transform="rotate(8 9 -7)" />
          <path d="M-14,0 l-2,4 M0,0 l1,4 M12,0 l3,4" stroke={INK} strokeWidth="1.3" opacity="0.7" />
        </g>
      )}
    </g>
  )
}

export function Shoe({ x = 0, y = 0, s = 1, color = '#e8756d' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M-14,0 L-14,-10 Q-14,-14 -10,-14 L-2,-14 Q4,-14 8,-8 Q14,-6 14,-2 L14,0 Z" fill={color} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M-14,0 L14,0 L14,3 L-14,3 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M-6,-14 L-4,-8 M0,-14 L2,-9" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </g>
  )
}

export function Bread({ x = 0, y = 0, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M-16,4 L16,4 Q20,4 20,-2 Q20,-12 8,-13 Q4,-18 -4,-16 Q-14,-17 -17,-9 Q-20,-2 -16,4 Z" fill="#f0c078" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M-8,-9 q2,-2 4,0 M2,-8 q2,-2 4,0" stroke="#c9762a" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </g>
  )
}

export function Bowl({ x = 0, y = 0, s = 1, color = '#8d8da8', contents = '#c9a961' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M-14,-6 A14,12 0 0 0 14,-6 L12,0 L-12,0 Z" fill={color} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <ellipse cx="0" cy="-6" rx="14" ry="4" fill={contents} stroke={INK} strokeWidth="1.6" />
    </g>
  )
}

export function DeskMessy({ x = 0, y = 118 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-42" y="-36" width="84" height="7" rx="2" fill="#c9b18a" stroke={INK} strokeWidth="2" />
      <path d="M-36,-29 L-36,0 M36,-29 L36,0" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="-36" y="-44" width="18" height="8" rx="1.5" fill="#e8756d" stroke={INK} strokeWidth="1.5" transform="rotate(-8 -27 -40)" />
      <rect x="-20" y="-42" width="16" height="7" rx="1.5" fill="#5b8dd9" stroke={INK} strokeWidth="1.5" transform="rotate(5 -12 -38)" />
      <path d="M-2,-38 l10,-4 l3,5 l-10,4 Z" fill="#fff" stroke={INK} strokeWidth="1.4" />
      <path d="M8,-44 l9,-2 l2,5 l-9,2 Z" fill="#fff" stroke={INK} strokeWidth="1.4" transform="rotate(-12 13 -42)" />
      <Cup x={28} y={-38} s={0.8} color="#f0b45c" />
      <path d="M18,-37 q3,-4 6,-1" stroke={INK} strokeWidth="1.3" fill="none" />
    </g>
  )
}

export function Suitcase({ x = 0, y = 118, color = '#e8756d' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-13" y="-34" width="26" height="34" rx="4" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M-5,-34 q0,-6 5,-6 q5,0 5,6" fill="none" stroke={INK} strokeWidth="2.2" />
      <path d="M-13,-22 L13,-22" stroke={INK} strokeWidth="1.5" opacity="0.6" />
      <circle cx="-6" cy="0" r="2.6" fill="#4d5866" stroke={INK} strokeWidth="1.3" />
      <circle cx="6" cy="0" r="2.6" fill="#4d5866" stroke={INK} strokeWidth="1.3" />
    </g>
  )
}

export function Umbrella({ x = 0, y = 0, s = 1, color = '#5b8dd9' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M-20,0 A20,18 0 0 1 20,0 Z" fill={color} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M-20,0 Q-13,-4 -7,0 Q0,-4 7,0 Q13,-4 20,0" fill="none" stroke={INK} strokeWidth="1.4" />
      <path d="M0,-18 L0,0 M0,0 L0,14 q0,4 4,4" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    </g>
  )
}

export function Tree({ x = 0, y = 118, s = 1, lean = 0 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s}) rotate(${lean})`}>
      <path d="M-4,0 L-3,-26 L3,-26 L4,0 Z" fill="#8a5a33" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="-12" cy="-34" r="12" fill="#7aa864" stroke={INK} strokeWidth="1.8" />
      <circle cx="12" cy="-34" r="12" fill="#7aa864" stroke={INK} strokeWidth="1.8" />
      <circle cx="0" cy="-46" r="14" fill="#7aa864" stroke={INK} strokeWidth="1.8" />
      <ellipse cx="0" cy="-34" rx="14" ry="10" fill="#7aa864" stroke="none" />
    </g>
  )
}

export function Key({ x = 0, y = 0, s = 1, color = '#f2c234' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s}) rotate(-30)`}>
      <circle cx="0" cy="-6" r="5" fill="none" stroke={color} strokeWidth="3" />
      <path d="M0,-1 L0,10 M0,6 L4,6 M0,10 L4,10" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  )
}

export function TV({ x = 0, y = 118 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-30" y="-46" width="60" height="38" rx="4" fill="#4d5866" stroke={INK} strokeWidth="2" />
      <rect x="-26" y="-42" width="52" height="30" rx="2" fill="#8fd0e8" stroke={INK} strokeWidth="1.4" />
      <path d="M-12,-32 L-2,-27 L-12,-22 Z" fill="#fff" stroke={INK} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6,-34 q6,4 0,8 M12,-37 q9,7 0,14" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M-8,-8 L-10,0 M8,-8 L10,0" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  )
}

export function Petal({ x = 0, y = 0, s = 1, rotate = 0, color = '#f3b8c8' }) {
  return (
    <path
      transform={`translate(${x},${y}) rotate(${rotate}) scale(${s})`}
      d="M0,-5 Q5,-2 4,3 Q2,6 0,5 Q-2,6 -4,3 Q-5,-2 0,-5 Z"
      fill={color} stroke={INK} strokeWidth="1.2" strokeLinejoin="round"
    />
  )
}

export function BusStop({ x = 0, y = 118 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path d="M0,0 L0,-62" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <circle cx="0" cy="-70" r="12" fill="#5b8dd9" stroke={INK} strokeWidth="2" />
      <text x="0" y="-66.5" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="700" fontFamily="'Hiragino Sans','Yu Gothic',sans-serif">バス</text>
    </g>
  )
}

export function Phone({ x = 0, y = 0, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-6" y="-11" width="12" height="22" rx="2.5" fill="#4d5866" stroke={INK} strokeWidth="1.6" />
      <rect x="-4.5" y="-8.5" width="9" height="15" rx="1" fill="#8fd0e8" stroke="none" />
      <circle cx="0" cy="8" r="1.3" fill="#fff" />
    </g>
  )
}

export function Star({ x = 0, y = 0, s = 1, color = '#f2e07a' }) {
  return (
    <path
      transform={`translate(${x},${y}) scale(${s})`}
      d="M0,-6 L1.8,-1.8 L6,-1.5 L2.8,1.4 L3.7,5.6 L0,3.2 L-3.7,5.6 L-2.8,1.4 L-6,-1.5 L-1.8,-1.8 Z"
      fill={color} stroke="none"
    />
  )
}

export function Moon({ x = 0, y = 0, s = 1 }) {
  return (
    <path
      transform={`translate(${x},${y}) scale(${s})`}
      d="M2,-9 A9,9 0 1 0 9,4 A7,7 0 0 1 2,-9 Z"
      fill="#f2e07a" stroke={INK} strokeWidth="1.6" strokeLinejoin="round"
    />
  )
}

export function NightSky({ children }) {
  return (
    <g>
      <rect x="0" y="0" width="200" height="118" fill="#3d4566" />
      {children}
    </g>
  )
}

export function Table({ x = 0, y = 118, w = 70 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-w / 2} y="-34" width={w} height="6" rx="2" fill="#c9b18a" stroke={INK} strokeWidth="2" />
      <path d={`M${-w / 2 + 7},-28 L${-w / 2 + 7},0 M${w / 2 - 7},-28 L${w / 2 - 7},0`} stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
    </g>
  )
}

export function Stove({ x = 0, y = 118 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-30" y="-30" width="60" height="30" rx="3" fill="#dde4ec" stroke={INK} strokeWidth="2" />
      <rect x="-24" y="-27" width="48" height="4" rx="2" fill="#4d5866" stroke="none" />
      <circle cx="14" cy="-14" r="4" fill="#7a8896" stroke={INK} strokeWidth="1.5" />
      <circle cx="-14" cy="-14" r="4" fill="#7a8896" stroke={INK} strokeWidth="1.5" />
    </g>
  )
}

export function Sheep({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path d="M-14,-6 L-14,0 M-5,-6 L-5,0 M5,-6 L5,0 M13,-6 L13,0" stroke="#6b6455" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="-12" cy="-16" r="8" fill="#f2ede3" stroke={INK} strokeWidth="1.8" />
      <circle cx="0" cy="-20" r="10" fill="#f2ede3" stroke={INK} strokeWidth="1.8" />
      <circle cx="12" cy="-16" r="8" fill="#f2ede3" stroke={INK} strokeWidth="1.8" />
      <ellipse cx="0" cy="-13" rx="16" ry="8" fill="#f2ede3" stroke="none" />
      <circle cx="19" cy="-24" r="7" fill="#8a7a66" stroke={INK} strokeWidth="1.8" />
      <path d="M13,-30 q-3,-4 1,-5 M25,-30 q3,-4 -1,-5" {...NOFILL} strokeWidth="1.6" />
      <circle cx="17" cy="-25" r="1.1" fill={INK} />
      <circle cx="22" cy="-25" r="1.1" fill={INK} />
      <path d="M18,-21 q2,1.5 4,0" {...NOFILL} strokeWidth="1.2" />
    </g>
  )
}

export function Horse({ x = 0, y = 0, color = '#b07a4a' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path d="M-18,-8 L-18,0 M-8,-8 L-8,0 M8,-8 L8,0 M16,-8 L16,0" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <rect x="-22" y="-30" width="40" height="22" rx="9" fill={color} stroke={INK} strokeWidth="2" />
      <path d="M-22,-24 q-7,2 -6,10" {...NOFILL} strokeWidth="2.5" stroke="#6b4a2a" />
      <path d="M16,-28 L26,-42" stroke={color} strokeWidth="8" strokeLinecap="round" />
      <path d="M20,-44 q10,-3 14,3 q2,4 -2,6 L22,-36 Z" fill={color} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M22,-48 l1,-5 M27,-47 l2,-4" stroke="#6b4a2a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14,-40 q-3,10 0,14" {...NOFILL} strokeWidth="2.5" stroke="#6b4a2a" />
      <circle cx="27" cy="-42" r="1.2" fill={INK} />
      <circle cx="31" cy="-38" r="1" fill={INK} />
    </g>
  )
}

export function Bear({ x = 0, y = 0, color = '#8a6a4a', flip = false }) {
  return (
    <g transform={`translate(${x},${y}) scale(${flip ? -1 : 1},1)`}>
      <path d="M-14,-6 L-14,0 M-4,-6 L-4,0 M8,-6 L8,0 M16,-6 L16,0" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="0" cy="-20" rx="22" ry="15" fill={color} stroke={INK} strokeWidth="2" />
      <circle cx="18" cy="-32" r="10" fill={color} stroke={INK} strokeWidth="2" />
      <circle cx="11" cy="-40" r="3.5" fill={color} stroke={INK} strokeWidth="1.6" />
      <circle cx="25" cy="-40" r="3.5" fill={color} stroke={INK} strokeWidth="1.6" />
      <circle cx="16" cy="-34" r="1.3" fill={INK} />
      <circle cx="23" cy="-34" r="1.3" fill={INK} />
      <ellipse cx="20" cy="-29" rx="4" ry="3" fill="#c9a87a" stroke={INK} strokeWidth="1.3" />
      <circle cx="20" cy="-30" r="1.2" fill={INK} />
    </g>
  )
}

export function Frog({ x = 0, y = 0, color = '#7db35a' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <ellipse cx="0" cy="-8" rx="13" ry="9" fill={color} stroke={INK} strokeWidth="1.8" />
      <circle cx="-6" cy="-17" r="4.5" fill={color} stroke={INK} strokeWidth="1.6" />
      <circle cx="6" cy="-17" r="4.5" fill={color} stroke={INK} strokeWidth="1.6" />
      <circle cx="-6" cy="-18" r="1.5" fill={INK} />
      <circle cx="6" cy="-18" r="1.5" fill={INK} />
      <path d="M-4,-7 q4,3 8,0" {...NOFILL} strokeWidth="1.5" />
      <path d="M-13,-3 q-4,2 -3,3 M13,-3 q4,2 3,3" {...NOFILL} strokeWidth="2.5" stroke={color} />
      <ellipse cx="0" cy="-4" rx="7" ry="4" fill="#d5e8c0" stroke="none" />
    </g>
  )
}

export function Fish({ x = 0, y = 0, s = 1, color = '#f0955c', flip = false }) {
  return (
    <g transform={`translate(${x},${y}) scale(${flip ? -s : s},${s})`}>
      <ellipse cx="0" cy="0" rx="9" ry="5.5" fill={color} stroke={INK} strokeWidth="1.6" />
      <path d="M-8,0 L-14,-5 L-14,5 Z" fill={color} stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="5" cy="-1.5" r="1.1" fill={INK} />
      <path d="M0,-2 q2,2 0,4" {...NOFILL} strokeWidth="1" opacity="0.6" />
    </g>
  )
}

export function Bee({ x = 0, y = 0, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <ellipse cx="-3" cy="-4" rx="4" ry="5" fill="#dce8f2" stroke={INK} strokeWidth="1.2" opacity="0.9" />
      <ellipse cx="3" cy="-4" rx="4" ry="5" fill="#dce8f2" stroke={INK} strokeWidth="1.2" opacity="0.9" />
      <ellipse cx="0" cy="2" rx="7" ry="5" fill="#f2c234" stroke={INK} strokeWidth="1.5" />
      <path d="M-2,-2.5 L-2,6.5 M2.5,-2 L2.5,6" stroke={INK} strokeWidth="1.8" />
      <circle cx="6" cy="0" r="1" fill={INK} />
      <path d="M7,2 L10,3" stroke={INK} strokeWidth="1.2" strokeLinecap="round" />
    </g>
  )
}

export function Flower({ x = 0, y = 0, s = 1, color = '#f3b8c8' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M0,0 L0,-16" stroke="#5d8a4a" strokeWidth="2" strokeLinecap="round" />
      <path d="M0,-8 q-6,-1 -7,-6" stroke="#5d8a4a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy="-21" rx="3" ry="4.5" fill={color} stroke={INK} strokeWidth="1.2" transform={`rotate(${a} 0 -16)`} />
      ))}
      <circle cx="0" cy="-16" r="2.6" fill="#f2c234" stroke={INK} strokeWidth="1.2" />
    </g>
  )
}

export function Box({ x = 0, y = 0, open = true, color = '#c9a87a' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-20" y="-24" width="40" height="24" fill={color} stroke={INK} strokeWidth="2" />
      {open && (
        <g>
          <path d="M-20,-24 L-30,-34" stroke={INK} strokeWidth="1.8" fill="none" />
          <path d="M-20,-24 L-30,-34 L-10,-34 Z" fill="#b8946a" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M20,-24 L30,-34 L10,-34 Z" fill="#b8946a" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
        </g>
      )}
      <path d="M-20,-16 L20,-16" stroke={INK} strokeWidth="1.2" opacity="0.4" />
    </g>
  )
}

export function Onigiri({ x = 0, y = 0, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M0,-14 Q4,-14 7,-8 L12,1 Q14,6 8,6 L-8,6 Q-14,6 -12,1 L-7,-8 Q-4,-14 0,-14 Z" fill="#fdfbf5" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="-5" y="-2" width="10" height="8" fill="#3d4a3a" stroke={INK} strokeWidth="1.2" />
    </g>
  )
}

export function FireworkBurst({ x = 0, y = 0, s = 1, color = '#f2b834' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
        <path key={a} d="M0,-8 L0,-20" stroke={a % 60 === 0 ? color : '#e8756d'} strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${a})`} />
      ))}
      <Spark x={0} y={0} s={1} color={color} />
      <Spark x={16} y={14} s={0.6} color="#e8756d" />
      <Spark x={-15} y={12} s={0.5} color="#8fd0e8" />
    </g>
  )
}

export function Glass({ x = 0, y = 0, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M-8,-18 L-6,4 Q-6,6 -4,6 L4,6 Q6,6 6,4 L8,-18 Z" fill="#dceef8" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" opacity="0.95" />
      <rect x="-3.5" y="-12" width="6" height="6" rx="1" fill="#fff" stroke={INK} strokeWidth="1.2" transform="rotate(12 0 -9)" />
      <rect x="-2" y="-6" width="6" height="6" rx="1" fill="#fff" stroke={INK} strokeWidth="1.2" transform="rotate(-18 1 -3)" />
      <path d="M-5,-16 L5,-16" stroke="#8fc0dc" strokeWidth="1.4" />
    </g>
  )
}

export function PaperBall({ x = 0, y = 0, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M-9,2 L-10,-4 L-5,-9 L1,-10 L7,-7 L10,-1 L8,5 L2,8 L-5,7 Z" fill="#fdfbf5" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M-5,-4 L1,-2 L-2,3 M3,-6 L4,0" {...NOFILL} strokeWidth="1.1" opacity="0.6" />
    </g>
  )
}

export function Shirt({ x = 0, y = 0, s = 1, color = '#8fc0dc' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M-10,-16 L-3,-19 Q0,-16 3,-19 L10,-16 L16,-9 L10,-4 L10,14 L-10,14 L-10,-4 L-16,-9 Z" fill={color} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
    </g>
  )
}

export function Hand({ x = 0, y = 0, s = 1, rotate = 0 }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate}) scale(${s})`}>
      <path d="M-8,10 L-8,-2 Q-8,-5 -5.5,-5 Q-3,-5 -3,-2 L-3,-6 Q-3,-9 -0.5,-9 Q2,-9 2,-6 L2,-5 Q2,-8 4.5,-8 Q7,-8 7,-5 L7,-3 Q7,-5.5 9,-5.5 Q11,-5.5 11,-3 L11,6 Q11,10 7,10 Z" fill={SKIN} stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    </g>
  )
}
