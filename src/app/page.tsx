// src/app/page.tsx

"use client";

import React from 'react';
import TextInput from './components/TextInput';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <TextInput />
    </div>
  );
};

export default HomePage;
