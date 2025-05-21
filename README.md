# Of The King The Power 🎭

Uma biblioteca TypeScript para gerar textos na "língua dos anjos" do mini pastor, perfeita para substituir o Lorem Ipsum com um toque de humor celestial! ✨

## 🚀 Instalação

```bash
npm install of-the-king-the-power
```

## 🎯 Uso

```typescript
import { generateWord, generatePhrase, generateParagraph, generateText, ofTheKing } from 'of-the-king-the-power';

// Gerar uma única palavra/frase (porque às vezes você só precisa de um "shalala" na vida)
const word = generateWord();
console.log(word); // Exemplo: "shalala"

// Gerar uma frase com 5 palavras (para quando você precisa de um pouco mais de poder)
const phrase = generatePhrase(5);
console.log(phrase); // Exemplo: "of the king the power the best the king the ferry des nay shalala shababa"

// Gerar um parágrafo com 3 frases (para quando você quer impressionar os anjos)
const paragraph = generateParagraph(3);
console.log(paragraph); // Exemplo: "of the king the power the best the king the ferry des nay shalala. Shababa shadada shakaka. Shamama sharana shasasa."

// Gerar um texto completo com intensidade alta (para quando você quer fazer chover glória)
const text = generateText({ intensity: 'high' });
console.log(text); // Gera múltiplos parágrafos com intensidade alta

// Personalizar as opções (porque cada profeta tem seu estilo)
const customText = generateText({
  intensity: 'low',
  includeIntro: true
});
```

## 📚 API

### `generateWord(options?: GlossolaliaOptions): string` 🎵

Gera uma única palavra/frase na língua dos anjos. Perfeito para quando você precisa de um "shalala" rápido!

### `generatePhrase(wordCount?: number, options?: GlossolaliaOptions): string` 🎤

Gera uma frase com o número especificado de palavras, sempre começando com "of the king the power the best the king the ferry des nay" quando `includeIntro` é verdadeiro. Porque toda profecia precisa de uma introdução poderosa!

### `generateParagraph(sentenceCount?: number, options?: GlossolaliaOptions): string` 📝

Gera um parágrafo com o número especificado de frases. Ideal para quando você precisa de um texto mais elaborado para impressionar os anjos.

### `generateText(options?: GlossolaliaOptions): string` 📜

Gera um texto completo com múltiplos parágrafos, com intensidade configurável. Porque às vezes você precisa de um verdadeiro dilúvio de glória!

### `ofTheKing(paragraphs?: number, sentencesPerParagraph?: number, wordsPerSentence?: number, options?: GlossolaliaOptions): string` 👑

Gera um texto no estilo Lorem Ipsum usando a língua dos anjos. Parâmetros:
- `paragraphs`: Número de parágrafos (padrão: 3)
- `sentencesPerParagraph`: Número de frases por parágrafo (padrão: 5)
- `wordsPerSentence`: Número de palavras por frase (padrão: 8)
- `options`: Opções adicionais de geração

### ⚙️ Opções

A interface `GlossolaliaOptions` permite personalizar a geração:

```typescript
interface GlossolaliaOptions {
  minLength?: number;     // Comprimento mínimo da palavra (padrão: 3)
  maxLength?: number;     // Comprimento máximo da palavra (padrão: 8)
  includeIntro?: boolean; // Incluir a introdução padrão (padrão: true)
  intensity?: 'low' | 'medium' | 'high'; // Intensidade do texto gerado (padrão: 'medium')
}
```

## ✨ Características

- Sempre começa com "of the king the power the best the king the ferry des nay" (porque toda profecia precisa de um bom começo! 🎭)
- Inclui frases características da língua dos anjos (shalala, shababa, e muito mais! 🎵)
- Gera textos com diferentes níveis de intensidade (do sussurro ao grito de glória! 📢)
- Perfeito para substituir Lorem Ipsum em projetos de design (porque até os designers merecem um pouco de poder! 🎨)
- Ideal para criar conteúdo de teste com um toque de humor (e um pouco de glória! ✨)
- Função `ofTheKing()` para gerar textos no estilo Lorem Ipsum (porque até os profetas precisam de placeholder! 👑)

## 🎭 Exemplo de Uso como Lorem Ipsum

```typescript
import { ofTheKing } from 'of-the-king-the-power';

// Gerar um texto no estilo Lorem Ipsum (mas muito mais poderoso!)
const placeholder = ofTheKing(2, 4, 6);
console.log(placeholder);
// Saída exemplo:
// of the king the power the best the king the ferry des nay cantarabashéia urabachai. Decalamassubia xandarabassuri fogo glória. Kabassundéria labarashourei power fire. Tongues glory kabashunderia.
//
// of the king the power the best the king the ferry des nay holy deliverance shalala. Shababa shadada shakaka shamama. Sharana shasasa shavava shazaza. Alleluia gloria poder força.
```

## 📜 Licença

MIT (Mas você pode usar para a glória de Deus! 🙏) 
