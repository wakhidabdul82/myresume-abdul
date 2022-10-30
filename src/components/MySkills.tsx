import React from 'react';

export default function MySkills() {
  return (
    <div className="mx-auto max-w-lg items-center justify-center pt-8 text-black">
      <h1 className="comfortaa-bold text-center text-2xl">
        My Knowledge & Working Skills :
      </h1>
      <div className="mx-auto flex justify-center px-8 pt-6">
        <span className="mx-2 inline-flex items-center justify-center rounded-md border-black bg-orange-600 px-4 py-2 text-base font-semibold leading-none text-orange-100">
          Laravel
        </span>
        <span className="mx-2 inline-flex items-center justify-center rounded-md border-black bg-black px-4 py-1 text-base font-semibold leading-none text-slate-100">
          Next JS
        </span>
        <span className="mx-2 inline-flex items-center justify-center rounded-md border-black bg-green-600 px-4 py-1 text-base font-semibold leading-none text-green-100">
          Vue JS
        </span>
      </div>
      <div className="mx-auto flex justify-center px-8 py-6">
        <span className="mx-2 inline-flex items-center justify-center rounded-md border-black bg-blue-400 px-4 py-1 text-base font-semibold leading-none text-blue-100">
          Tailwind CSS
        </span>
        <span className="mx-2 inline-flex items-center justify-center rounded-md border-black bg-purple-800 px-4 py-2 text-base font-semibold leading-none text-purple-100">
          Bootstrap
        </span>
      </div>
    </div>
  );
}
