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
    <div className="flex bottom mt-20">
      <div className="mb-10 grid max-md:text-center max-md:w-screen w-full justify-between grid-cols-5 text-center">
        <SiteLink
          title="Instagram"
          link="https://instagram.com/standardrobot.wav"
          content="pics"
        />
        <SiteLink
          title="Blog"
          link="https://blog.standardrobot.dev"
          content="words"
        />
        <SiteLink
          title="Twitter"
          link="https://twitter.com/standard_robot"
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
