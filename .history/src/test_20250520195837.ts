import { generateWord, generatePhrase, generateParagraph, generateText, ofTheKing } from './index';

console.log('=== Testando a biblioteca Of The King The Power ===\n');

console.log('1. Testando generateWord:');
console.log(generateWord());
console.log(generateWord());
console.log(generateWord());
console.log('\n');

console.log('2. Testando generatePhrase:');
console.log(generatePhrase(5));
console.log(generatePhrase(3));
console.log('\n');

console.log('3. Testando generateParagraph:');
console.log(generateParagraph(3));
console.log('\n');

console.log('4. Testando generateText com diferentes intensidades:');
console.log('Intensidade baixa:');
console.log(generateText({ intensity: 'low' }));
console.log('\nIntensidade média:');
console.log(generateText({ intensity: 'medium' }));
console.log('\nIntensidade alta:');
console.log(generateText({ intensity: 'high' }));
console.log('\n');

console.log('5. Testando ofTheKing (Lorem Ipsum):');
console.log(ofTheKing(2, 3, 4)); 