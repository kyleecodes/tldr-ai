// src/app/components/TextInput.tsx

import React, { useState } from 'react';
import TextOutput from './TextOutput';

const TextInput: React.FC = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      if (response.ok) {
        setSummary(data.summary);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error submitting text:', error);
    }
  };

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to summarize"
          rows={10}
          className="w-full h-40 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
      {summary && <TextOutput summary={summary} />}
    </div>
  );
};

export default TextInput;
