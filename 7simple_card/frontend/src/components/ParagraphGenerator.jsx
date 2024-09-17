// ParagraphGenerator.tsx
import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

// Create a new instance of LoremIpsum
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const ParagraphGenerator = () => {
  const [wordCount, setWordCount] = useState('');
  const [paragraph, setParagraph] = useState('');

  const handleGenerate = () => {
    const count = Number(wordCount);
    if (count > 0) {
      // Generate a paragraph based on the word count
      const generatedParagraph = lorem.generateWords(count);
      setParagraph(generatedParagraph);
    } else {
      setParagraph('Please enter a valid number of words.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Paragraph Generator</h1>
      <input
        type="number"
        placeholder="Enter number of words"
        value={wordCount}
        onChange={(e) => setWordCount(e.target.value)}
        min="1"
        className="border border-gray-300 rounded-md p-2 mb-4 w-64 text-center"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200"
      >
        Generate Paragraph
      </button>
      <p className="mt-4 text-gray-700 text-center">{paragraph}</p>
    </div>
  );
};

export default ParagraphGenerator;
