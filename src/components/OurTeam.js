import React from 'react';

import Divider from '../layouts/Divider';

import person1 from '../assets/img/person1.webp';
import person2 from '../assets/img/person2.webp';
import person3 from '../assets/img/person3.webp';
import person4 from '../assets/img/person4.webp';

// TODO: Should add motion to OurTeam
// TODO: Should make it responsive

const OurTeam = () => (
  <section className=" py-10">
    <Divider title="کادر مجرب ما" />
    <div className="container mt-6 grid grid-cols-4">
      <div className="flex flex-col items-center">
        <img
          src={person1}
          alt="person"
          className="max-h-40 w-auto rounded-full"
        />
        <p className="pt-6 text-purple-secondary text-xl font-bold">
          متخصص طب کار
        </p>
        <p className="text-purple-primary font-bold text-lg">محمد رضایی</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={person2}
          alt="person"
          className="max-h-40 w-auto rounded-full"
        />
        <p className="pt-6 text-purple-secondary text-xl font-bold">
          متخصص طب کار
        </p>
        <p className="text-purple-primary font-bold text-lg">محمد رضایی</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={person3}
          alt="person"
          className="max-h-40 w-auto rounded-full"
        />
        <p className="pt-6 text-purple-secondary text-xl font-bold">
          متخصص طب کار
        </p>
        <p className="text-purple-primary font-bold text-lg">محمد رضایی</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={person4}
          alt="person"
          className="max-h-40 w-auto rounded-full"
        />
        <p className="pt-6 text-purple-secondary text-xl font-bold">
          متخصص طب کار
        </p>
        <p className="text-purple-primary font-bold text-lg">محمد رضایی</p>
      </div>
    </div>
  </section>
);

export default OurTeam;
