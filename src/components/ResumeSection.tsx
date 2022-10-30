import React from 'react';

import CardWithTitle from './CardWithTitle';

export default function ResumeSection() {
  return (
    <CardWithTitle bgColor="bg-green-400" title="resume">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="ibm-md my-2 text-base text-black">
          <a className="ibm-semibold mb-4 flex text-lg">
            🎓 Background Education
          </a>
          <ul className="ml-4 list-disc">
            <li className="mb-2">
              <span className="ibm-semibold">Web Developer Course</span>
              <br />
              <span className="text-sm">Eduwork.id (12/21 - 03/22)</span>
            </li>
            <li className="mb-2">
              <span className="ibm-semibold">Electrical Engineer</span>
              <br />
              <span className="text-sm">Semarang State University</span>
              <br />
              <span className="text-sm">GPA 3.44/4.00</span>
            </li>
          </ul>
        </div>
        <div className="ibm-md my-2 text-base text-black">
          <a className="ibm-semibold mb-4 flex text-lg">💼 Last Experience</a>
          <ul className="ml-4 list-disc">
            <li className="mb-2">
              <span className="ibm-semibold">Fullstack Web Developer</span>
              <br />
              <span className="text-sm">Trooking.id (04/22 - 08/22)</span>
            </li>
          </ul>
        </div>
      </div>
    </CardWithTitle>
  );
}
