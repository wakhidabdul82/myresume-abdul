import React from 'react';

import Button from './Button';

export default function ConnectMe() {
  return (
    <div className="mx-auto max-w-lg items-center justify-center pt-12">
      <a className="flex justify-center">
        <span className="flex w-1/3 items-center">
          <img src="/assets/images/social-media.png" alt="" />
        </span>
      </a>
      <p className="comfortaa-bold pt-6 text-center text-3xl text-black">
        connect with me? click button below!
      </p>
      <div className="mx-auto flex justify-center px-8 pb-6 pt-4 text-black">
        <Button
          title="💬 Chat me!"
          link="https://wa.me/6282236593794"
          target="_blank"
          className="bg-green-400 hover:bg-green-500"
        />
      </div>
    </div>
  );
}
