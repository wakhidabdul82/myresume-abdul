import React from 'react';

interface ButtonProps {
  title: string;
  link: string;
  className: any;
  target: string;
}

export default function Button(props: ButtonProps) {
  const { title, link, className, target } = props;
  return (
    <a
      className={`mx-4 flex items-center justify-center rounded-md border border-black px-6 py-2 shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50 ${className}`}
      href={link}
      target={target}
    >
      <span className="ibm-md text-base"> {title} </span>
    </a>
  );
}
