import { WORDS } from '../data/words.js'

export default function TitleScreen({ onStart }) {
  return (
    <div className="screen title-screen">
      <p className="title-kicker">オノマトペ・マッチ</p>
      <h1 className="title-main">Onomatopoeia Match</h1>

      <div className="title-art" aria-hidden="true">
        <svg viewBox="0 0 200 60">
          <text x="30" y="38" fontSize="22" fontWeight="700" fill="#5b8dd9" transform="rotate(-8 30 38)">ざー</text>
          <text x="85" y="30" fontSize="18" fontWeight="700" fill="#e8756d">わくわく</text>
          <text x="150" y="46" fontSize="20" fontWeight="700" fill="#7aa864" transform="rotate(6 150 46)">ぴょん</text>
        </svg>
      </div>

      <div className="title-instructions">
        <p className="jp">場面に合うオノマトペを選びましょう。</p>
        <p className="en">Look at the scene and pick the onomatopoeia that fits!</p>
        <p className="jp sub">まちがえても大丈夫。何度でも答えられます。</p>
        <p className="en">Wrong guesses are fine — try again as many times as you like.</p>
      </div>

      <button className="btn btn-primary" onClick={onStart}>
        <span className="jp">はじめる</span>
        <span className="en">Start</span>
      </button>

      <p className="title-footnote">
        全{WORDS.length}語 ・ タイマーなし ・ スコアなし
        <br />
        <span className="en">{WORDS.length} words · no timer · no score</span>
      </p>
    </div>
  )
}
