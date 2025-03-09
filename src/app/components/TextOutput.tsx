// src/app/components/TextOutput.tsx

import React from 'react';

interface TextOutputProps {
  summary: string;
}

const TextOutput: React.FC<TextOutputProps> = ({ summary }) => {
  return (
    <div className="w-full h-40 p-2 mt-4 border border-gray-300 rounded">
      <h2 className="text-lg font-semibold mb-2">Summary</h2>
      <p>{summary}</p>
    </div>
  );
};

export default TextOutput;
