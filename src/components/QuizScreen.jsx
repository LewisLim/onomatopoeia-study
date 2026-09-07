import { useState } from 'react'
import { newDeck, buildOptions, wordById } from '../quiz.js'
import { CATEGORIES } from '../data/words.js'
import { Scene } from '../art/scenes.jsx'
import { playCorrect, playWrong } from '../audio.js'

export default function QuizScreen({ onQuit }) {
  const [deck, setDeck] = useState(() => newDeck())
  const [pos, setPos] = useState(0)
  const [options, setOptions] = useState(() => buildOptions(deck[0]))
  const [phase, setPhase] = useState('answering') // 'answering' | 'revealed'
  const [wrongPicks, setWrongPicks] = useState(() => new Set())
  const [shake, setShake] = useState({ id: null, nonce: 0 })
  const [attempted, setAttempted] = useState(0)
  const [firstTry, setFirstTry] = useState(0)

  const word = wordById(deck[pos])
  const category = CATEGORIES[word.category]

  function advance() {
    let nextDeck = deck
    let nextPos = pos + 1
    if (nextPos >= deck.length) {
      // Full pool shown once — reshuffle and keep going.
      nextDeck = newDeck()
      nextPos = 0
      setDeck(nextDeck)
    }
    setPos(nextPos)
    setOptions(buildOptions(nextDeck[nextPos]))
    setPhase('answering')
    setWrongPicks(new Set())
    setShake({ id: null, nonce: 0 })
  }

  function pick(option) {
    if (phase === 'revealed') return
    if (option.id === word.id) {
      playCorrect()
      setPhase('revealed')
      setAttempted((n) => n + 1)
      if (wrongPicks.size === 0) setFirstTry((n) => n + 1)
    } else {
      playWrong()
      setWrongPicks((prev) => new Set(prev).add(option.id))
      setShake((s) => ({ id: option.id, nonce: s.nonce + 1 }))
    }
  }

  return (
    <div className="screen quiz-screen">
      <header className="quiz-header">
        <span className="attempt-counter">
          <span className="jp">{attempted}問</span>
          <span className="en">answered</span>
        </span>
        <button
          className="btn btn-quit"
          onClick={() => onQuit({ attempted, firstTry })}
        >
          <span className="jp">やめる</span>
          <span className="en">Quit</span>
        </button>
      </header>

      <div className="scene-card">
        <Scene id={word.id} />
        <div className="caption">
          <p className="jp">{word.captionJp}</p>
          <p className="en">{word.captionEn}</p>
        </div>
      </div>

      <div className="options" role="group" aria-label="Answer choices">
        {options.map((option) => {
          const isCorrectPick = phase === 'revealed' && option.id === word.id
          const wasWrong = wrongPicks.has(option.id)
          const shaking = shake.id === option.id
          return (
            <button
              key={shaking ? `${option.id}-${shake.nonce}` : option.id}
              className={
                'option-btn' +
                (isCorrectPick ? ' correct' : '') +
                (wasWrong ? ' was-wrong' : '') +
                (shaking ? ' shaking' : '') +
                (phase === 'revealed' && !isCorrectPick ? ' faded' : '')
              }
              onClick={() => pick(option)}
              disabled={phase === 'revealed'}
            >
              <span className="jp">{option.jp}</span>
              <span className="romaji">{option.romaji}</span>
            </button>
          )
        })}
      </div>

      {phase === 'revealed' ? (
        <div className="reveal">
          <div className="reveal-word">
            <span className="jp">{word.jp}</span>
            <span className="romaji">{word.romaji}</span>
          </div>
          <p className="reveal-meaning">{word.meaning}</p>
          <p className="reveal-category">
            {category.jp} · {category.en}
          </p>
          <button className="btn btn-primary" onClick={advance} autoFocus>
            <span className="jp">次へ</span>
            <span className="en">Next</span>
          </button>
        </div>
      ) : (
        <p className="quiz-hint">
          <span className="jp">合うことばを選んでください</span>
          <span className="en">Choose the word that fits the scene</span>
        </p>
      )}
    </div>
  )
}
