# オノマトペ・マッチ — Onomatopoeia Match

A relaxed, untimed, no-score study quiz: look at a scene, pick the Japanese
onomatopoeia that fits. Wrong answers just mean "try again" — there is no
timer, score, or penalty.

- **150-word pool** across the five onomatopoeia categories (擬情語 emotions,
  擬態語 states/textures, 擬音語 object/nature sounds, 擬声語 human/animal
  sounds, 擬容語 movement), shuffled with no repeats until the whole pool has
  been seen, then reshuffled.
- **Same-category distractors** — the 3 wrong options always come from the
  correct answer's own category, so they're plausibly confusable.
- **JP-primary / EN-subtitle** UI text throughout; options show JP + romaji
  only (the English meaning is revealed after a correct answer).
- **Flat 2D SVG art** composed from a small library of reusable primitives
  (base figures, effect overlays, props) — no image assets. Feedback tones
  are synthesized with Web Audio (no audio files).


<img width="400" height="674" alt="ezgif-8568a7e9fe8dda55" src="https://github.com/user-attachments/assets/339af3e4-b92b-45fb-8269-0402db409087" />


## Run

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run lint     # oxlint
```

## Structure

```
src/
  data/words.js        80-word pool + JP/EN scene captions, tagged by category
  art/primitives.jsx   reusable SVG primitives (figures, overlays, props)
  art/scenes.jsx       one composed scene per word
  components/          TitleScreen / QuizScreen / EndScreen
  quiz.js              shuffling + same-category distractor selection
  audio.js             optional Web Audio feedback tones
  App.jsx              screen state machine (title → quiz → end)
```
