// Light Web Audio feedback tones — synthesized, no audio files.
// Everything is wrapped in try/catch so audio can never break the game.

let ctx = null

function getCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

function tone(freq, start, duration, type = 'sine', volume = 0.12) {
  const ac = getCtx()
  if (!ac) return
  const osc = ac.createOscillator()
  const gain = ac.createGain()
  osc.type = type
  osc.frequency.value = freq
  const t0 = ac.currentTime + start
  gain.gain.setValueAtTime(0.0001, t0)
  gain.gain.linearRampToValueAtTime(volume, t0 + 0.015)
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration)
  osc.connect(gain)
  gain.connect(ac.destination)
  osc.start(t0)
  osc.stop(t0 + duration + 0.05)
}

export function playCorrect() {
  try {
    tone(660, 0, 0.16)
    tone(880, 0.11, 0.24)
  } catch {
    /* audio is optional */
  }
}

export function playWrong() {
  try {
    tone(220, 0, 0.18, 'triangle', 0.1)
  } catch {
    /* audio is optional */
  }
}
