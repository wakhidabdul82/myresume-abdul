import React from 'react';

interface ChildrenProps {
  children: React.ReactNode;
}
export default function CardWithoutTitle(props: ChildrenProps) {
  const { children } = props;
  return (
    <div className="mx-4 mt-16 max-w-xl rounded-md border border-black bg-slate-100 p-4 shadow-[10px_10px_0_0_#000] md:mx-auto">
      <div>{children}</div>
    </div>
  );
}
