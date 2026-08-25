/* =====================================================================
   Описание ребенка наблюдаемыми признаками.

   Возрастные группы вида 1-3 или 3-5 придуманы не потому, что дети
   так устроены, а потому что человек не мог удержать в голове больше
   нескольких корзин. Ограничение было наше, а не детское.

   Машина этим ограничением не связана. В стандарте у каждого навыка
   стоит собственная возрастная норма и собственная сложность, а не
   принадлежность к корзине. Значит ребенка можно описать тем, что он
   делает, и подбирать по этому, а не по числу лет.

   Здесь родителю задаются вопросы о наблюдаемом поведении. Ни один
   не требует от него разбираться в терминах. Каждый ответ превращается
   в набор навыков, которые уже определены в public/api/skills.json,
   и дальше работают обычные правила стандарта.

   Возраст остается, но как отправная точка, а не как приговор:
   правила безопасности в стандарте привязаны к возрасту, и обойти
   их нельзя. Ребенок с опережением или отставанием получит другой
   ответ при том же числе лет, и в этом весь смысл.
   ===================================================================== */

export type Answer = { value: string; label: string; skills: string[] };
export type Question = { id: string; ask: string; note: string; answers: Answer[] };

export const QUESTIONS: Question[] = [
  {
    id: "hand",
    ask: "What does the child do with a crayon or pencil?",
    note: "Watch the hand, not the result.",
    answers: [
      { value: "fist", label: "Holds it in a fist, marks go anywhere on the sheet", skills: ["motor_basic", "one_object_per_page", "sensory_safety"] },
      { value: "aiming", label: "Aims at the picture, crosses the outline freely", skills: ["motor_basic", "creative_confidence", "moderate_detail"] },
      { value: "inside", label: "Stays inside the outline most of the time", skills: ["moderate_detail", "visual_planning", "creative_confidence"] },
      { value: "copies", label: "Copies a drawing step by step and finishes it alone", skills: ["motor_mastery", "step_by_step_logic", "complex_shape_breakdown"] },
      { value: "skip", label: "Not applicable or not sure", skills: [] },
    ],
  },
  {
    id: "attention",
    ask: "How long does the child stay with one book or one page?",
    note: "On an ordinary day, not the best one.",
    answers: [
      { value: "min", label: "A minute or two, then moves on", skills: ["low_stimulation", "low_cognitive_load", "attention_growth"] },
      { value: "five", label: "About five minutes", skills: ["attention_growth", "imagination_seed"] },
      { value: "ten", label: "Ten minutes or more, and comes back to it", skills: ["concentration", "visual_planning"] },
      { value: "long", label: "Sits with a long story to the end", skills: ["long_focus", "multi_scene_structure"] },
      { value: "skip", label: "Not sure", skills: [] },
    ],
  },
  {
    id: "speech",
    ask: "How does the child speak?",
    note: "How they speak, not how much they understand.",
    answers: [
      { value: "words", label: "Single words, or not speaking yet", skills: ["soft_story", "predictable_sequence", "sensory_safety"] },
      { value: "phrases", label: "Short phrases, names what is on the page", skills: ["speech_development", "simple_dialogues"] },
      { value: "retells", label: "Retells what happened in a story", skills: ["simple_dialogues", "early_logic", "situational_language"] },
      { value: "reasons", label: "Explains why a character did something", skills: ["logic", "complex_vocabulary", "structured_reasoning"] },
      { value: "skip", label: "Not sure", skills: [] },
    ],
  },
  {
    id: "feeling",
    ask: "How does the child take tension in a story?",
    note: "A lost toy, a character in trouble.",
    answers: [
      { value: "avoid", label: "Gets upset, needs the story calm and predictable", skills: ["soft_story", "sensory_safety", "low_stimulation", "predictable_sequence"] },
      { value: "ok", label: "Takes it fine if it ends well", skills: ["confidence", "imagination_seed"] },
      { value: "interest", label: "Is interested in why someone felt that way", skills: ["emotion_depth", "moral_reasoning"] },
      { value: "deep", label: "Follows several characters wanting different things", skills: ["advanced_emotion_depth", "multi_scene_structure", "abstract_reasoning"] },
      { value: "skip", label: "Not sure", skills: [] },
    ],
  },
];

/* Ответы превращаются в навыки. Повторы убираются: один и тот же
   навык, названный дважды, не должен весить вдвое. */
export function skillsFromAnswers(picked: Record<string, string>): string[] {
  const out = new Set<string>();
  for (const q of QUESTIONS) {
    const a = q.answers.find((x) => x.value === picked[q.id]);
    for (const s of a?.skills || []) out.add(s);
  }
  return Array.from(out);
}
