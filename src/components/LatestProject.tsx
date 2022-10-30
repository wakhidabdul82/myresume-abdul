/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

import CardWithTitle from './CardWithTitle';
import CarouselProject from './CarouselProject';

export default function LatestProject() {
  return (
    <CardWithTitle title="latest projects" bgColor="bg-purple-400">
      <div className="grid gap-8 md:grid-cols-2">
        <CarouselProject />
        <div className="ibm-md mt-8 text-base text-black">
          <a className="ibm-semibold mb-4 flex text-lg">
            {' '}
            💡 Latest projects :{' '}
          </a>
          <ul className="ml-4 list-disc">
            <li className="mb-2">
              <span className="ibm-semibold">Larashop</span>
              <br />
              <span className="text-sm">
                Link :{' '}
                <a href="https://github.com/wakhidabdul82/larashop">
                  Klik here
                </a>
              </span>
            </li>
            <li className="mb-2">
              <span className="ibm-semibold">Management Trooking</span>
              <br />
              <span className="text-sm">Private Site</span>
            </li>
            <li className="mb-2">
              <span className="ibm-semibold">Trooking Internal</span>
              <br />
              <span className="text-sm">Private Site</span>
            </li>
            <li className="mb-2">
              <span className="ibm-semibold">My Resume</span>
              <br />
              <span className="text-sm">
                Demo : <a href="/#">Klik here</a>{' '}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </CardWithTitle>
  );
}
