import React, {useState, useRef, useEffect} from 'react';

interface LoadingScreenProps {
  onProgressComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({onProgressComplete}) => {
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
  const parentRef = useRef(null);
  useEffect(() => {
    const parentWidth = parentRef.current.clientWidth;

    if (progress == 100) {
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
      'Reading Config ...'
    ];
    const genLoad = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress =>
          prevProgress < 100 ? prevProgress + 20 : prevProgress
        );

        setLoadingText(
          loadingTextOptions[
            Math.floor(Math.random() * loadingTextOptions.length)
          ]
        );
      }
      const doneWidth = (parentWidth * progress) / 100;
      // Set the doneASCII to a fixed number of characters based on the calculated width
      const doneChars = Math.floor(doneWidth / 10); // Adjust this divisor as needed
      setDoneASCII(progASCII.repeat(doneChars));
    }, 250);

    return () => clearInterval(genLoad);
  }, [progress, parentRef]);

  return (
    <body className="min-w-0 overflow-hidden">
      <div className="bg-black p-8 w-screen h-screen flex flex-col">
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <pre className="mb-2 text-white">{loadingASCII}</pre>
          <div className="font-fira text-white loading-text">{loadingText}</div>
          <div ref={parentRef} className=" h-[20px] w-[80%]">
            <div
              className=" text-white bg-#4caf50 h-[100%] overflow-hidden"
              style={{width: '100%'}}>
              <span className="text-white">{doneASCII}</span>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default LoadingScreen;
