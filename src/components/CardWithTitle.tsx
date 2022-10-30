import React from 'react';

interface CardWithTitleProps {
  children: React.ReactNode;
  bgColor: any;
  title: string;
}
export default function CardWithTitle(props: CardWithTitleProps) {
  const { children, bgColor, title } = props;
  return (
    <div className="my-16">
      <div className="mx-4 flex max-w-xl flex-wrap justify-end md:mx-auto">
        <span
          className={`comfortaa-bold rounded-t border-x border-t border-black text-base text-black ${bgColor} px-6 py-1 shadow-[10px_10px_0_0_#000]`}
        >
          {title}
        </span>
      </div>
      <div className="relative mx-4 flex max-w-xl items-center justify-center rounded-b rounded-tl border border-black bg-slate-100 p-4 shadow-[10px_10px_0_0_#000] md:mx-auto">
        <div>{children}</div>
      </div>
    </div>
  );
}
