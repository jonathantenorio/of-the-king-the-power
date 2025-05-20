/**
 * Core types for the glossolalia generator
 */
export interface GlossolaliaOptions {
  minLength?: number;
  maxLength?: number;
  syllables?: string[];
  consonants?: string[];
  vowels?: string[];
}

/**
 * Default options for glossolalia generation
 */
const DEFAULT_OPTIONS: Required<GlossolaliaOptions> = {
  minLength: 3,
  maxLength: 8,
  syllables: ['ba', 'da', 'ga', 'ka', 'la', 'ma', 'na', 'pa', 'ra', 'sa', 'ta', 'va', 'za'],
  consonants: ['b', 'd', 'g', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z'],
  vowels: ['a', 'e', 'i', 'o', 'u']
};

/**
 * Generates a random number between min and max (inclusive)
 */
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random syllable from the provided options
 */
function generateSyllable(options: Required<GlossolaliaOptions>): string {
  const consonant = options.consonants[getRandomInt(0, options.consonants.length - 1)];
  const vowel = options.vowels[getRandomInt(0, options.vowels.length - 1)];
  return consonant + vowel;
}

/**
 * Generates a word in glossolalia
 */
export function generateWord(options: GlossolaliaOptions = {}): string {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const length = getRandomInt(mergedOptions.minLength, mergedOptions.maxLength);
  let word = '';

  for (let i = 0; i < length; i++) {
    word += generateSyllable(mergedOptions);
  }

  return word;
}

/**
 * Generates a phrase in glossolalia
 */
export function generatePhrase(wordCount: number = 5, options: GlossolaliaOptions = {}): string {
  const words: string[] = [];
  for (let i = 0; i < wordCount; i++) {
    words.push(generateWord(options));
  }
  return words.join(' ');
}

/**
 * Generates a paragraph in glossolalia
 */
export function generateParagraph(sentenceCount: number = 5, options: GlossolaliaOptions = {}): string {
  const sentences: string[] = [];
  for (let i = 0; i < sentenceCount; i++) {
    const wordCount = getRandomInt(3, 8);
    sentences.push(generatePhrase(wordCount, options));
  }
  return sentences.join('. ') + '.';
} 