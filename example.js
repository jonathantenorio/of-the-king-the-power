// Importando a biblioteca
const { generateWord, generatePhrase, generateParagraph, generateText, ofTheKing } = require('./dist/index');

console.log('=== Exemplo de uso em JavaScript ===\n');

// Exemplo 1: Gerando uma palavra
console.log('1. Uma palavra na língua dos anjos:');
console.log(generateWord());
console.log('\n');

// Exemplo 2: Gerando uma frase
console.log('2. Uma frase na língua dos anjos:');
console.log(generatePhrase(4));
console.log('\n');

// Exemplo 3: Gerando um parágrafo
console.log('3. Um parágrafo na língua dos anjos:');
console.log(generateParagraph(2));
console.log('\n');

// Exemplo 4: Gerando um texto completo
console.log('4. Um texto completo (intensidade média):');
console.log(generateText({ intensity: 'medium' }));
console.log('\n');

// Exemplo 5: Usando como Lorem Ipsum
console.log('5. Usando como Lorem Ipsum:');
console.log(ofTheKing(1, 2, 3)); 