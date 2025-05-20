# Of The King The Power

Uma biblioteca TypeScript para gerar textos na "língua dos anjos" dos neopentecostais, perfeita para substituir o Lorem Ipsum com um toque de humor.

## Instalação

```bash
npm install of-the-king-the-power
```

## Uso

```typescript
import { generateWord, generatePhrase, generateParagraph, generateText, ofTheKing } from 'of-the-king-the-power';

// Gerar uma única palavra/frase
const word = generateWord();
console.log(word); // Exemplo: "shalala"

// Gerar uma frase com 5 palavras
const phrase = generatePhrase(5);
console.log(phrase); // Exemplo: "of the king the power the best the king the ferry des nay shalala shababa"

// Gerar um parágrafo com 3 frases
const paragraph = generateParagraph(3);
console.log(paragraph); // Exemplo: "of the king the power the best the king the ferry des nay shalala. shababa shadada shakaka. shamama sharana shasasa."

// Gerar um texto completo com intensidade alta
const text = generateText({ intensity: 'high' });
console.log(text); // Gera múltiplos parágrafos com intensidade alta

// Gerar um texto no estilo Lorem Ipsum
const loremIpsum = ofTheKing(3, 5, 8);
console.log(loremIpsum); // Gera 3 parágrafos com 5 frases cada, 8 palavras por frase

// Personalizar as opções
const customText = generateText({
  intensity: 'low',
  includeIntro: true
});
```

## API

### `generateWord(options?: GlossolaliaOptions): string`

Gera uma única palavra/frase na língua dos anjos.

### `generatePhrase(wordCount?: number, options?: GlossolaliaOptions): string`

Gera uma frase com o número especificado de palavras, sempre começando com "of the king the power the best the king the ferry des nay" quando `includeIntro` é verdadeiro.

### `generateParagraph(sentenceCount?: number, options?: GlossolaliaOptions): string`

Gera um parágrafo com o número especificado de frases.

### `generateText(options?: GlossolaliaOptions): string`

Gera um texto completo com múltiplos parágrafos, com intensidade configurável.

### `ofTheKing(paragraphs?: number, sentencesPerParagraph?: number, wordsPerSentence?: number, options?: GlossolaliaOptions): string`

Gera um texto no estilo Lorem Ipsum usando a língua dos anjos. Parâmetros:
- `paragraphs`: Número de parágrafos (padrão: 3)
- `sentencesPerParagraph`: Número de frases por parágrafo (padrão: 5)
- `wordsPerSentence`: Número de palavras por frase (padrão: 8)
- `options`: Opções adicionais de geração

### Opções

A interface `GlossolaliaOptions` permite personalizar a geração:

```typescript
interface GlossolaliaOptions {
  minLength?: number;     // Comprimento mínimo da palavra (padrão: 3)
  maxLength?: number;     // Comprimento máximo da palavra (padrão: 8)
  includeIntro?: boolean; // Incluir a introdução padrão (padrão: true)
  intensity?: 'low' | 'medium' | 'high'; // Intensidade do texto gerado (padrão: 'medium')
}
```

## Características

- Sempre começa com "of the king the power the best the king the ferry des nay"
- Inclui frases características da língua dos anjos
- Gera textos com diferentes níveis de intensidade
- Perfeito para substituir Lorem Ipsum em projetos de design
- Ideal para criar conteúdo de teste com um toque de humor
- Função `ofTheKing()` para gerar textos no estilo Lorem Ipsum

## Exemplo de Uso como Lorem Ipsum

```typescript
import { ofTheKing } from 'of-the-king-the-power';

// Gerar um texto no estilo Lorem Ipsum
const placeholder = ofTheKing(2, 4, 6);
console.log(placeholder);
// Saída exemplo:
// of the king the power the best the king the ferry des nay cantarabashéia urabachai. decalamassubia xandarabassuri fogo glória. kabassundéria labarashourei power fire. tongues glory kabashunderia.
//
// of the king the power the best the king the ferry des nay holy deliverance shalala. shababa shadada shakaka shamama. sharana shasasa shavava shazaza. alleluia gloria poder força.
```

## Licença

MIT 