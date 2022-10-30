import React from 'react';

export default function NavigationBar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b-2 border-black bg-white">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a className="inline-flex gap-1.5 font-semibold" href="#">
              <span>MyResume</span>
              <span aria-hidden="true" role="img">
                🚀
              </span>
            </a>
            <span
              aria-hidden="true"
              className="hidden sm:block sm:h-6 sm:w-px sm:bg-gray-400"
            ></span>
            <nav aria-label="Page Nav" className="hidden sm:block">
              <ul className="flex gap-6">
                <li>
                  <a
                    className="ibm-md block text-sm font-medium hover:opacity-75"
                    href="#aboutme"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    className="ibm-md block text-sm font-medium hover:opacity-75"
                    href="#projects"
                  >
                    Latest projects
                  </a>
                </li>
                <li>
                  <a
                    className="ibm-md block text-sm font-medium hover:opacity-75"
                    href="#connectme"
                  >
                    Chat me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/wakhidabdul82/"
                rel="noreferrer"
                target="_blank"
                className="hover:opacity-75"
              >
                <span className="sr-only"> GitHub </span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/id/wakhidabdul82"
                rel="noreferrer"
                target="_blank"
                className="hover:opacity-75"
              >
                <span className="sr-only"> Linkedin </span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
