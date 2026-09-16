/**
 * THE NERVOUS RESET — Check-In Questionnaire Data
 *
 * Questions explore broad wellbeing dimensions related to the five
 * Reset products (thenervous.md §19, §20).
 *
 * Each answer contributes to one or more scoring dimensions.
 * Scoring logic is NOT implemented here — Phase 5 handles that.
 *
 * Dimensions:
 *   anxiety    — mental tension, worry, overthinking
 *   burnout    — exhaustion, overload, boundaries
 *   lowEnergy  — depletion, motivation, daily energy
 *   newMom     — adjustment, identity, overwhelm
 *   heartbreak — loss, grief, emotional recovery
 */

export type Dimension =
  | "anxiety"
  | "burnout"
  | "lowEnergy"
  | "newMom"
  | "heartbreak";

export interface CheckInOption {
  id: string;
  label: string;
  /** Score weights per dimension — 0 = no contribution, 1–3 = strength */
  weights: Partial<Record<Dimension, number>>;
}

export interface CheckInQuestion {
  id: string;
  question: string;
  /** Optional context line below the question */
  context?: string;
  options: CheckInOption[];
}

export const CHECK_IN_QUESTIONS: CheckInQuestion[] = [
  {
    id: "q1",
    question: "How often do you find your mind racing with thoughts you can't seem to quiet?",
    context: "There are no wrong answers.",
    options: [
      { id: "q1-a", label: "Rarely — my mind usually feels settled", weights: {} },
      { id: "q1-b", label: "Sometimes, especially at night", weights: { anxiety: 1 } },
      { id: "q1-c", label: "Most days — it feels hard to switch off", weights: { anxiety: 2 } },
      { id: "q1-d", label: "Almost constantly — it's exhausting", weights: { anxiety: 3 } },
    ],
  },
  {
    id: "q2",
    question: "When you think about your daily responsibilities, how do you feel?",
    options: [
      { id: "q2-a", label: "I can manage them without much difficulty", weights: {} },
      { id: "q2-b", label: "They feel heavy, but I get through", weights: { burnout: 1, lowEnergy: 1 } },
      { id: "q2-c", label: "I feel overwhelmed — there's too much", weights: { burnout: 2 } },
      { id: "q2-d", label: "I feel depleted before the day even starts", weights: { burnout: 2, lowEnergy: 2 } },
    ],
  },
  {
    id: "q3",
    question: "How would you describe your energy most days?",
    options: [
      { id: "q3-a", label: "I have enough energy for what I need to do", weights: {} },
      { id: "q3-b", label: "It comes and goes — I have good and low days", weights: { lowEnergy: 1 } },
      { id: "q3-c", label: "I feel drained more often than not", weights: { lowEnergy: 2 } },
      { id: "q3-d", label: "Even small tasks feel like they take everything I have", weights: { lowEnergy: 3 } },
    ],
  },
  {
    id: "q4",
    question: "How are you sleeping?",
    context: "Think about the last few weeks, not just last night.",
    options: [
      { id: "q4-a", label: "Well — I feel rested most mornings", weights: {} },
      { id: "q4-b", label: "Okay, but I wake up tired sometimes", weights: { lowEnergy: 1 } },
      { id: "q4-c", label: "Poorly — I either can't fall asleep or stay asleep", weights: { anxiety: 2, burnout: 1 } },
      { id: "q4-d", label: "Very poorly — it's affecting everything", weights: { anxiety: 2, burnout: 2 } },
    ],
  },
  {
    id: "q5",
    question: "Have you recently experienced a significant emotional loss or change in a relationship?",
    context: "This could include a breakup, divorce, or the end of an important connection.",
    options: [
      { id: "q5-a", label: "No", weights: {} },
      { id: "q5-b", label: "Something ended recently, and I'm still processing it", weights: { heartbreak: 3 } },
      { id: "q5-c", label: "It happened a while ago, but it still affects me daily", weights: { heartbreak: 2 } },
      { id: "q5-d", label: "I feel stuck in grief I can't seem to move through", weights: { heartbreak: 3 } },
    ],
  },
  {
    id: "q6",
    question: "If you are a new or recent mother, how are you feeling about the transition?",
    context: "If this doesn't apply to you, you can skip ahead.",
    options: [
      { id: "q6-a", label: "This doesn't apply to me", weights: {} },
      { id: "q6-b", label: "I'm adjusting, but it feels manageable", weights: { newMom: 1 } },
      { id: "q6-c", label: "I feel overwhelmed — I'm not myself anymore", weights: { newMom: 2 } },
      { id: "q6-d", label: "I'm struggling to connect with who I was before", weights: { newMom: 3 } },
    ],
  },
  {
    id: "q7",
    question: "How often do you feel a sense of calm or peace during your day?",
    options: [
      { id: "q7-a", label: "Regularly — I have moments of genuine calm", weights: {} },
      { id: "q7-b", label: "Sometimes, but they're becoming less frequent", weights: { anxiety: 1, burnout: 1 } },
      { id: "q7-c", label: "Rarely — I can't remember the last time I felt at ease", weights: { anxiety: 2, burnout: 2 } },
      { id: "q7-d", label: "I can't remember what calm feels like", weights: { anxiety: 3, burnout: 2 } },
    ],
  },
  {
    id: "q8",
    question: "When you think about the coming weeks, what comes up for you?",
    options: [
      { id: "q8-a", label: "I feel cautiously optimistic", weights: {} },
      { id: "q8-b", label: "Uncertainty — I don't know what I need yet", weights: { lowEnergy: 1, heartbreak: 1 } },
      { id: "q8-c", label: "Dread — I feel like I'm just surviving", weights: { burnout: 2, anxiety: 1 } },
      { id: "q8-d", label: "Hope — but I need help finding where to start", weights: {} },
    ],
  },
];

/** Total question count — used for progress display */
export const TOTAL_QUESTIONS = CHECK_IN_QUESTIONS.length;
