import { useState } from 'react'
import TitleScreen from './components/TitleScreen.jsx'
import QuizScreen from './components/QuizScreen.jsx'
import EndScreen from './components/EndScreen.jsx'
import './App.css'

export default function App() {
  const [screen, setScreen] = useState('title') // 'title' | 'quiz' | 'end'
  const [summary, setSummary] = useState({ attempted: 0, firstTry: 0 })
  const [sessionKey, setSessionKey] = useState(0)

  function startSession() {
    setSessionKey((k) => k + 1) // remount QuizScreen → fresh deck & counters
    setScreen('quiz')
  }

  function quitSession(result) {
    setSummary(result)
    setScreen('end')
  }

  return (
    <div className="app">
      {screen === 'title' && <TitleScreen onStart={startSession} />}
      {screen === 'quiz' && <QuizScreen key={sessionKey} onQuit={quitSession} />}
      {screen === 'end' && (
        <EndScreen
          attempted={summary.attempted}
          firstTry={summary.firstTry}
          onPlayAgain={startSession}
          onTitle={() => setScreen('title')}
        />
      )}
    </div>
  )
}
