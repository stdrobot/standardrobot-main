'use client';
import React, { useState, useEffect } from 'react';
import './components.css';
import Main from './main';
import LoadingScreen from './loading';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(true);

  const handleProgressComplete = () => {
    setLoadingComplete(false);
  };

  return (
    <body className="bg-black text-lg h-screen w-full flex flex-col overflow-hidden">
      {loadingComplete ? (
        <LoadingScreen onProgressComplete={handleProgressComplete} />
      ) : (
        <Main />
      )}
    </body>
  );
}
