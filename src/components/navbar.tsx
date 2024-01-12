import React from 'react';
import './components.css';

interface TWProps {
  title?: string;
  link: string;
  content?: string;
}

const SiteLink: React.FC<TWProps> = ({ title, link, content }) => {
  return (
    <div className="m-0.5 text-center hover:text-white">
      <a href={link}>{title}</a>
      <p>{content}</p>
    </div>
  );
};

interface NavbarProps {
  hue: string;
}

const Navbar: React.FC<NavbarProps> = ({ hue }) => {
  return (
    <div
      className={'w-full flex flex-col mt-20 items-center'}
      style={{ color: hue }}
    >
      <div className="mb-16 grid w-full grid-cols-1 md:grid-cols-5 gap-4">
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
          link="https://github.com/stdrobot"
          content="src code"
        />
      </div>
    </div>
  );
};

export default Navbar;
