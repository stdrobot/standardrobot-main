'use client';
import React from 'react';
import Navbar from './navbar';
import './components.css';
import Typewriter, {LoadingSequence} from './typing';

export default function Home() {
  const intro = (
    <p className="text-white">
      + I'm standardrobot (one word, all lowercase, it's important to make a
      distinction). I enjoy making electronic music and programming.
      Professionally, I'm a software engineer with have a strong interest in
      cybersecurity. This project came about because I bought this domain to
      secure the name. I'll be using the opportunity as a trial by fire dive
      into web-dev
    </p>
  );

  return (
    <body>
      <div className="bg-black text-white p-8 w-full h-screen font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">zsh</p>
        </div>

        <Navbar />
        <div className="mt-4 flex justify-center">
          <div id="test">
            <img
              src="/robot.svg"
              alt="standardrobot logo"
              width="300"
              height="250"
              loading="eager"
            />
          </div>
        </div>
        <LoadingSequence
          childElement={
            <p className="text-mainPurple">
              <span className="items-center flex">
                ~ | ${' '}
                <Typewriter txt="pkg install standardrobot@latest" delay={10} />
              </span>
            </p>
          }
          childElement2={<p className="text-white">+ standardrobot@1.0.0</p>}
          delay={500}
        />
        <br />
        <div>
          <LoadingSequence
            childElement={
              <p className="text-mainPurple">
                <span className="items-center flex">
                  {' '}
                  ~ | $ <Typewriter txt="whoami" delay={10} />
                </span>{' '}
              </p>
            }
            childElement2={intro}
            delay={3000}
          />
        </div>
      </div>
    </body>
  );
}
