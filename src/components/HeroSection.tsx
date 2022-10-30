import React from 'react';

import Button from './Button';

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-lg items-center justify-center pt-16">
      <a className="flex justify-center">
        <span className="flex w-1/3 items-center">
          <img src="/assets/images/programmer.png" alt="" />
        </span>
      </a>
      <h1 className="comfortaa-light text-center text-5xl">abdul wakhid</h1>
      <h3 className="comfortaa-bold px-2 py-4 text-center text-2xl">
        Im a{' '}
        <span className="text-blue-300 no-underline hover:underline hover:decoration-blue-500">
          human
        </span>
        ,{' '}
        <span className="text-yellow-300 no-underline hover:underline hover:decoration-yellow-500">
          programmer
        </span>{' '}
        and{' '}
        <span className="text-green-300 no-underline hover:underline hover:decoration-green-500">
          web developer
        </span>
        .
      </h3>
      <div className="mx-auto flex justify-center px-8">
        <Button
          title="Hire Me!"
          link="https://id.linkedin.com/in/wakhidabdul82"
          target="_blank"
          className="bg-red-400 hover:bg-red-500"
        />
        <Button
          title="Download CV"
          link="https://bit.ly/3TPIxdv"
          target="_blank"
          className="bg-blue-400 hover:bg-blue-500"
        />
      </div>
    </div>
  );
}
