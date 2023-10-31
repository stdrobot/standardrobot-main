import React from 'react';
import './components.css';
interface TWProps {
  title?: string;
  link: string;
  content?: string;
}

const SiteLink: React.FC<TWProps> = ({ title, link, content }) => {
  return (
    <div>
      <a href={link}>{title}</a>
      <p>{content}</p>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="w-[100vw] flex mt-20 text-white">
      <div className="mb-16 grid max-md:text-center max-md:w-screen w-full grid-cols-5 text-center">
        <SiteLink
          title="IG"
          link="https://instagram.com/standardrobot.wav"
          content="pics"
        />
        <SiteLink title="Blog" link="/blog" content="words" />
        <SiteLink
          title="Twitter"
          link="https://twitter.com/standardrobot_"
          content="fewer words"
        />
        <SiteLink
          title="SoundCloud"
          link="https://soundcloud.com/standardrobot"
          content="tunes"
        />
        <SiteLink
          title="GitHub"
          link="https://github.com/standard-robot"
          content="src code"
        />
      </div>
    </div>
  );
}
