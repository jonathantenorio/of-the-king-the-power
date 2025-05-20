/**
 * Core types for the glossolalia generator
 */
export interface GlossolaliaOptions {
  minLength?: number;
  maxLength?: number;
  includeIntro?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

/**
 * Common phrases in the angelic language
 */
const ANGELIC_PHRASES = [
  'of the king the power',
  'the best the king',
  'the ferry des nay',
  'shalala',
  'shababa',
  'shadada',
  'shakaka',
  'shamama',
  'sharana',
  'shasasa',
  'shavava',
  'shazaza',
  'alleluia',
  'gloria',
  'poder',
  'força',
  'vitória',
  'bênção',
  'unção',
  'graça',
  'cantarabashéia',
  'urabachai',
  'decalamassubia',
  'xandarabassuri',
  'fogo',
  'glória',
  'kabassundéria',
  'labarashourei',
  'power',
  'fire',
  'tongues',
  'glory',
  'kabashunderia',
  'holy',
  'deliverance'
];

/**
 * Default options for glossolalia generation
 */
const DEFAULT_OPTIONS: Required<GlossolaliaOptions> = {
  minLength: 3,
  maxLength: 8,
  includeIntro: true,
  intensity: 'medium'
};

/**
 * Generates a random number between min and max (inclusive)
 */
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random phrase from the angelic language
 */
function generateRandomPhrase(): string {
  return ANGELIC_PHRASES[getRandomInt(0, ANGELIC_PHRASES.length - 1)];
}

/**
 * Generates a word in the angelic language
 */
export function generateWord(options: GlossolaliaOptions = {}): string {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  return generateRandomPhrase();
}

/**
 * Generates a phrase in the angelic language
 */
export function generatePhrase(wordCount: number = 5, options: GlossolaliaOptions = {}): string {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const words: string[] = [];
  
  if (mergedOptions.includeIntro) {
    words.push('of the king the power');
    words.push('the best the king');
    words.push('the ferry des nay');
  }

  const remainingWords = wordCount - (mergedOptions.includeIntro ? 3 : 0);
  for (let i = 0; i < remainingWords; i++) {
    words.push(generateRandomPhrase());
  }

  return words.join(' ');
}

/**
 * Generates a paragraph in the angelic language
 */
export function generateParagraph(sentenceCount: number = 5, options: GlossolaliaOptions = {}): string {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const sentences: string[] = [];
  
  // First sentence always includes the intro
  sentences.push(generatePhrase(getRandomInt(3, 8), { ...options, includeIntro: true }));
  
  // Remaining sentences
  for (let i = 1; i < sentenceCount; i++) {
    const wordCount = getRandomInt(3, 8);
    sentences.push(generatePhrase(wordCount, { ...options, includeIntro: false }));
  }

  return sentences.join('. ') + '.';
}

/**
 * Generates a text with varying intensity
 */
export function generateText(options: GlossolaliaOptions = {}): string {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const intensity = mergedOptions.intensity;
  
  let paragraphCount: number;
  switch (intensity) {
    case 'low':
      paragraphCount = 1;
      break;
    case 'high':
      paragraphCount = 5;
      break;
    case 'medium':
    default:
      paragraphCount = 3;
  }

  const paragraphs: string[] = [];
  for (let i = 0; i < paragraphCount; i++) {
    paragraphs.push(generateParagraph(getRandomInt(3, 6), options));
  }

  return paragraphs.join('\n\n');
} 