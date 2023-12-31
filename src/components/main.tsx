import React, { useState } from 'react';
import Navbar from './navbar';
import './components.css';
import ClosedView from './abstract';
import Typewriter, { LoadingSequence } from './typing';
// import Buttons from './buttons';
import { BiChevronRight } from 'react-icons/bi/index';

const ContentBody = () => {
  const aboutMe = (
    <p className="text-white">
      + I'm standardrobot I enjoy making electronic music and programming.
      <br /> + I'm a software engineer with have a strong interest in
      cybersecurity.
      <br />+ Check out the links above for things.
    </p>
  );

  return (
    <>
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
    </>
  );
};

const Main = () => {
  // Define the initial state and a method to update it

  const [buttonState, setButtonState] = useState('Main');
  // Handler for the button click event
  const closeClick = () => {
    setButtonState(buttonState === 'Main' ? 'Closed' : 'Main');
    console.log(buttonState);
  };

  const minimizeClick = () => {
    alert('Window Minimized');
  };

  const maximizeClick = () => {
    alert('Window maximized');
  };

  const Buttons = () => (
    <div className="bg-black p-8 flex justify-between">
      <div className="flex space-x-2 text-red-500">
        <button
          className="w-3 h-3 rounded-full border-dashed border-white bg-red-500"
          onClick={closeClick}
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-yellow-500"
          onClick={minimizeClick}
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-green-500"
          onClick={maximizeClick}
        ></button>
      </div>
      <p className="text-white mr-12 text-sm">zsh</p>
    </div>
  );
  return (
    <>
      <Buttons />
      {buttonState === 'Main' ? <ContentBody /> : <ClosedView />}
    </>
  );
};

export default Main;
