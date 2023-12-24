'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import './components.css';
import Typewriter, { LoadingSequence } from './typing';
import { BiChevronRight } from 'react-icons/bi/index';

const Buttons = () => {
  const minimize = () => {
    alert('Window Minimized');
  };

  const maximize = () => {
    alert('Window maximized');
  };

  const close = () => {
    alert('Button clicked!');
  };

  return (
    <div className="bg-black flex justify-between">
      <div className="flex space-x-2 text-red-500">
        <button
          className="w-3 h-3 rounded-full border-dashed border-white bg-red-500"
          onClick={close}
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-yellow-500"
          onClick={minimize}
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-green-500"
          onClick={maximize}
        ></button>
      </div>
      <p className="text-white mr-12 text-sm">zsh</p>
    </div>
  );
};

const Main = () => {
  const aboutMe = (
    <p className="text-white">
      + I'm standardrobot I enjoy making electronic music and programming.
      <br /> + Professionally, I'm a software engineer with have a strong
      interest in cybersecurity.
      <br />+ Check out the links above for things.
    </p>
  );
  return (
    <div className="bg-black p-8 text-lg h-screen w-screen flex flex-col overflow-hidden">
      <Buttons />
      <div className="flex">
        <Navbar />
      </div>

      <div className="flex justify-center" id="test">
        <img
          src="/robot.svg"
          alt="standardrobot logo"
          width="350"
          height="300"
          loading="eager"
        />
      </div>

      <div className="p-12">
        <LoadingSequence
          childElement={
            <span className="items-center flex text-textPurple">
              /home/robot <BiChevronRight size={24} color="textPurple" />{' '}
              $&emsp;
              <Typewriter
                color="white"
                txt="pkg install standardrobot"
                delay={10}
              />
            </span>
          }
          childElement2={
            <p className="w-full text-white">+ standardrobot@1.0.0</p>
          }
          delay={500}
        />
        <br />
        <LoadingSequence
          childElement={
            <span className="items-center flex text-textPurple">
              /home/robot <BiChevronRight size={24} color="textPurple" />{' '}
              $&emsp;
              <Typewriter color="white" txt="whoami" delay={20} />
            </span>
          }
          childElement2={aboutMe}
          delay={2000}
        />
      </div>
    </div>
  );
};

export default Main;
