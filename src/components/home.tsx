'use client';
import React from 'react';
import Navbar from './navbar';
import './components.css';
import Typewriter, { LoadingSequence } from './typing';
import { BiChevronRight } from 'react-icons/bi/index';

const Buttons = () => {
  const close = () => {
    alert('Button clicked!');
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-2 text-red-500">
        <button
          className="w-3 h-3 rounded-full border-dashed border-white bg-red-500"
          onClick={close}
        ></button>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <p className="text-white text-sm">zsh</p>
    </div>
  );
};

export default function Home() {
  const intro = (
    <p className="text-white">
      + I'm standardrobot I enjoy making electronic music and programming.
      Professionally, I'm a software engineer with have a strong interest in
      cybersecurity. This project came about because I bought this domain to
      secure the name. I'll be using the opportunity as a trial by fire dive
      into web-dev
    </p>
  );

  return (
    <div className="bg-black p-8 min-h-screen min-w-screen flex flex-col">
      <Buttons />
      <div className="flex">
        <Navbar />
      </div>
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
          <span className="items-center flex text-textPurple">
            /home/robot <BiChevronRight size={24} color="textPurple" /> $&emsp;
            <Typewriter
              color="white"
              txt="pkg install standardrobot@latest"
              delay={10}
            />
          </span>
        }
        childElement2={<p className="text-white">+ standardrobot@1.0.0</p>}
        delay={500}
      />
      <br />
      <div className="items-center">
        <LoadingSequence
          childElement={
            <span className="items-center flex text-textPurple">
              /home/robot <BiChevronRight size={24} color="textPurple" />{' '}
              $&emsp;
              <Typewriter color="white" txt="whoami" delay={20} />
            </span>
          }
          childElement2={intro}
          delay={2000}
        />
      </div>
    </div>
  );
}
