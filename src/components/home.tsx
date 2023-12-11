'use client';
import React, {useState, useEffect} from 'react';
import './components.css';
import Main from './main';
import LoadingScreen, {progBool} from './loading';


const Buttons = () => {
  const close = () => {
    alert('Button clicked!');
  };

  return (
    <div className="bg-black flex justify-between items-center">
      <div className="flex space-x-2 text-red-500">
        <button
          className="w-3 h-3 rounded-full border-dashed border-white bg-red-500"
          onClick={close}></button>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <p className="text-white text-sm">zsh</p>
    </div>
  );
};

export default function Home() {
  const aboutMe = (
    <p className="text-white">
      + I'm standardrobot I enjoy making electronic music and programming.
      <br /> + Professionally, I'm a software engineer with have a strong
      interest in cybersecurity.
      <br />+ Check out the links above for things.
    </p>
  );

  return (
    <div className="bg-black p-8 h-full text-lg w-full flex flex-col overflow-auto">
      <Buttons />
      {progBool ? <LoadingScreen /> : <Main/>}
    </div>
  );
}
