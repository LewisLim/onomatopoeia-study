export default function EndScreen({ attempted, firstTry, onPlayAgain, onTitle }) {
  const accuracy = attempted > 0 ? Math.round((firstTry / attempted) * 100) : null

  return (
    <div className="screen end-screen">
      <h1 className="end-heading">
        <span className="jp">おつかれさまでした</span>
        <span className="en">Nice studying!</span>
      </h1>

      <div className="summary-card">
        <div className="summary-row">
          <div className="summary-label">
            <span className="jp">答えた問題</span>
            <span className="en">Questions attempted</span>
          </div>
          <div className="summary-value">{attempted}</div>
        </div>
        <div className="summary-row">
          <div className="summary-label">
            <span className="jp">一発正解率</span>
            <span className="en">Correct on first try</span>
          </div>
          <div className="summary-value">
            {accuracy === null ? '—' : `${accuracy}%`}
          </div>
        </div>
      </div>

      <div className="end-buttons">
        <button className="btn btn-primary" onClick={onPlayAgain}>
          <span className="jp">もう一度あそぶ</span>
          <span className="en">Play again</span>
        </button>
        <button className="btn btn-ghost" onClick={onTitle}>
          <span className="jp">タイトルへ</span>
          <span className="en">Back to title</span>
        </button>
      </div>
    </div>
  )
}
