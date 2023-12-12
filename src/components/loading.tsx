import React, { useState, useRef, useEffect, useContext} from 'react';


interface LoadingScreenProps {
  onProgressComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({onProgressComplete}) => {
  const pendingASCII = '░ ';
  const progASCII = '▓ ';
  const loadingASCII = `
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKkooook0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0o,,,,o0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0kxkOKKKKKKKK0o,,,;o0KKKKKKKKOkxk0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOl;,;ckKOkkkkkxc,,;;lxkkkkk0Kxc;;;o0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOc,,,:xKx;;;;;;;,,;;;;;;;;:xKd;,;;lOKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOxddk0Kxc:cccc;,,;;;ccccclkK0kddxOKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000Ol,,,;oO000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0o,;,,o0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0kxxk0KKKKKKK0o;;;;o0KKKKKKKOdlldOKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOl,,,:xKKKKKKKKOxkkkOKKKKKKK0o,,;,ckKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOl,,,:xKKKKKKKKKKKKKKKKKKKKKKkl;,,:xKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0xdxOKKKKKKKKKKKKKKKKKKKKKKKKx:,;lOKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKkc;cdOKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOkO0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
`;
  const [loadingText, setLoadingText] = useState<string>('Initializing...');
  const [progress, setProgress] = useState<number>(0);
  const [doneASCII, setDoneASCII] = useState<string>('');
  const [noASCII, setNoASCII] = useState<string>(pendingASCII);
  const [progBool, setProgBool] = useState(true);

  const parentRef = useRef(null);

  useEffect(() => {
    if (progress === 100) {
      setProgBool(false);
      console.log(progBool);
      onProgressComplete();
    }
    const loadingTextOptions = [
      'Checking For Updates ...',
      'Updating Drivers ...',
      'Removing Ligatures Because They Suck ...',
      'Saying Hello, World ...',
      'Hold on ...',
      'Installing Arch ...',
      'Generating Ambient Music ...',
      'Browsing Reddit ...',
      'Fetching data ...',
      'Checking Cache ...',
      'Reading Config ...',
    ];

    const genLoad = setInterval(() => {

      if (progress < 100) {
        setProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 10 : prevProgress
        );
        setNoASCII((prevText) => prevText.slice(1));
        if (noASCII.length === 0) {
          clearInterval(genLoad);
        }
        setLoadingText(
          loadingTextOptions[
            Math.floor(Math.random() * loadingTextOptions.length)
          ]
        );
      }
      setDoneASCII(progASCII + progASCII.repeat(progress));   
    }, 200);

    return () => clearInterval(genLoad);
  }, [progress]);

  return (
    <div className="fixed w-full h-full flex flex-col items-center justify-center">
      <pre className="mb-2">{loadingASCII}</pre>
      <div className="font-fira loading-text">{loadingText}</div>
      <div ref={parentRef} className=" text-green progress-bar-container">
        <div
          id="progress-bar"
          className="bg-#4caf50 h-full w-full"
          style={{ width: `${progress}%` }}
        >
          {doneASCII}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
