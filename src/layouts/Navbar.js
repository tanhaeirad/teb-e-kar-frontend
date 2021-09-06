import React from 'react';
import { GoHome } from 'react-icons/go';

import logo from '../assets/img/logo.png';
import './Navbar.css';

// TODO: Navbar Should be responsive!
// TODO: Links of a tags should be change!
// TODO: a tags should be Link  component!
// TODO: Should add motion to navbar

const Navbar = () => (
  <div className="container mb-24">
    <div className="flex flex-row items-center justify-between text-base font-bold text-purple-primary">
      {/* navbar left-side */}
      <ul className="flex items-center flex-row">
        <li className="ml-10">
          <a href="/#">
            <div className="flex items-center px-7 py-2 rounded-full text-white-primary bg-purple-secondary transition duration-500 ease-in-out hover:bg-purple-dark hover:text-white-primary">
              <GoHome size="25" title="home" />
              <span className="pr-2">خانه</span>
            </div>
          </a>
        </li>
        <li className="mx-8">
          <a href="/#" className="nav-link">
            بلاگ
          </a>
        </li>
        <li className="mx-8">
          <a href="/#" className="nav-link">
            خدمات
          </a>
        </li>
        <li className="mx-8">
          <a href="/#" className="nav-link">
            درباره‌ ما
          </a>
        </li>
        <li className="mx-8">
          <a href="/#" className="nav-link">
            تماس با ما
          </a>
        </li>
      </ul>
      {/* navbar right-side */}
      <a href="/#">
        <div className="flex items-center">
          <span className="font-nastaliq text-xl pt-1 ml-3  ">
            مرکز تخصصی طب کار دکتر تنهایی
          </span>
          <img src={logo} alt="Logo" className="h-16" />
        </div>
      </a>
    </div>
  </div>
);

export default Navbar;
