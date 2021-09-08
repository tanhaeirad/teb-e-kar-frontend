import React from 'react';

import HeroImg from '../assets/img/Doctor_And_Patient.png';

// TODO: HeroImg should be svg
// TODO: Should add motion to hero
// TODO: Should make it responsive

const Hero = () => (
  <div className="container grid grid-cols-12">
    <div className="col-span-5">
      <h1 className="font-bold text-gray-heavy md:text-2xl lg:text-3xl">
        مرکز تخصصی طب کار
        <span className="text-purple-secondary"> آرنا</span>
      </h1>
      <div className="mt-7">
        <p className="text-lg text-purple-primary">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد.
        </p>
      </div>
    </div>
    <div className="col-span-7 flex justify-end">
      <img src={HeroImg} alt="Doctor_And_Patient" className=" h-5/6" />
    </div>
    <div className="absolute -right-40 mt-80 opacity-70">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(100,21,255)' }} />
            <stop offset="100%" style={{ stopColor: 'rgb(100, 21, 255);' }} />
          </linearGradient>
        </defs>
        <path
          id="blob"
          d="M430,291Q377,332,340.5,350.5Q304,369,266.5,383.5Q229,398,195.5,374.5Q162,351,92,334Q22,317,64,262.5Q106,208,131,175Q156,142,193,126Q230,110,278,97Q326,84,383,106Q440,128,461.5,189Q483,250,430,291Z"
          fill="url(#gradient)"
          style={{ position: 'absolute' }}
        />
      </svg>
    </div>
  </div>
);

export default Hero;
