'use client';

import React, {useEffect, useState} from 'react';
import './components.css'; // Make sure to import your styles

const LoadingScreen: React.FC = () => {
  const [loadingText, setLoadingText] = useState<string>('Initializing...');
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        const loadingTextOptions = [
          'Updating Drivers ...',
          'Removing Ligatures Because They Suck ...',
          'Saying Hello, World ...',
          'Oh shit, an asset ran away ...',
          'Hold on ...',
          'HOLD ON ...',
          'Fetching data ...',
          'Checking Cache ...',
          'Reading Config ...'
        ];
        loadingTextOptions.forEach(arg => {
          setLoadingText(arg);
        });
      }

      setProgress(prevProgress =>
        prevProgress < 100 ? prevProgress + 10 : prevProgress
      );
    }, 500);

    return () => clearInterval(interval);
  }, [progress]);
  return (
    <div className="fixed w-full h-full flex flex-col items-center justify-center">
      <div className="loading-text">{loadingText}</div>
      <div className="progress-bar-container">
        <div
          id="progress-bar"
          className="bg-#4caf50 h-full"
          style={{width: `${progress}%`}}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;

// .loading-screen {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #fff; /* Set your background color */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

// .loading-text {
//   font-size: 18px;
//   margin-bottom: 20px;
// }

// .progress-bar-container {
//   width: 200px; /* Set your desired width */
//   height: 20px; /* Set your desired height */
//   border: 1px solid #ccc; /* Set your border color */
//   overflow: hidden;
//   border-radius: 5px;
// }

// .progress-bar {
//   height: 100%;
//   background: #4caf50; /* Set your progress bar color */
//   transition: width 0.3s ease-in-out;
// }
