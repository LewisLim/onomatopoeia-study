// Pure quiz helpers: shuffling and same-category distractor selection.

import { WORDS } from './data/words.js'

export function shuffle(array) {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// A freshly shuffled full pass over the pool (array of word ids).
export function newDeck() {
  return shuffle(WORDS.map((w) => w.id))
}

export function wordById(id) {
  return WORDS.find((w) => w.id === id)
}

// 4 options: the correct word + 3 random distractors from the same
// category. If a category ever has fewer than 4 words, top up from the
// rest of the pool rather than breaking.
export function buildOptions(correctId) {
  const correct = wordById(correctId)
  const sameCategory = WORDS.filter(
    (w) => w.category === correct.category && w.id !== correct.id
  )
  let distractors = shuffle(sameCategory).slice(0, 3)
  if (distractors.length < 3) {
    const others = WORDS.filter(
      (w) => w.category !== correct.category && w.id !== correct.id
    )
    distractors = distractors.concat(
      shuffle(others).slice(0, 3 - distractors.length)
    )
  }
  return shuffle([correct, ...distractors])
}
