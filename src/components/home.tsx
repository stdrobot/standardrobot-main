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
    <div className="bg-black p-8 h-full text-lg w-full flex flex-col overflow-auto">
      {loadingComplete ? <LoadingScreen onProgressComplete={handleProgressComplete} /> : <Main />}
    </div>
  );
}
