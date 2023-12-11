'use client';
import React, {useState, useEffect} from 'react';
import Navbar from './navbar';
import './components.css';
import Typewriter, {LoadingSequence} from './typing';
import {BiChevronRight} from 'react-icons/bi/index';

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
      <div>
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
  }


  export default Main;
