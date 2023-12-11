import React, {useState, useEffect} from 'react';

export let progBool = true;

const LoadingScreen: React.FC = ( ) => {
  const pendingASCII = '░';
  const progASCII = '▓ ';
  const [loadingText, setLoadingText] = useState<string>('Initializing...');
  const [progress, setProgress] = useState<number>(0);
  const [doneASCII, setDoneASCII] = useState<string>('');

  if(progress == 100) {
    progBool = false;
  }

  useEffect(() => {
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

    const genLoad = setInterval(() => {
      if (progress < 100) {
        console.log(doneASCII);
        setProgress(prevProgress =>
          prevProgress < 100 ? prevProgress + 20 : prevProgress
        );
        setLoadingText(loadingTextOptions[Math.floor(Math.random() * loadingTextOptions.length)]);
      }
      // setProgress(prevProgress =>
      //   prevProgress < 100 ? prevProgress + 20 : prevProgress
      // );
      setDoneASCII(progASCII + progASCII.repeat(progress));

    }, 275);
    return () => clearInterval(genLoad);
  }, [progress]);

  return (
    <div className="fixed w-full h-full flex flex-col items-center justify-center">
      <div className="font-fira loading-text">{loadingText}</div>
      <div className="progress-bar-container">
        <div
          id="progress-bar"
          className="bg-#4caf50 h-full w-full"
          style={{width: `${progress}%`}}>{doneASCII}</div>
      </div>
    </div>
  );


};

export default LoadingScreen;
