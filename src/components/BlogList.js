import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

import Divider from '../layouts/Divider';

import article1 from '../assets/img/article1.png';
import article2 from '../assets/img/article2.png';
import article3 from '../assets/img/article3.png';
import article4 from '../assets/img/article4.png';
import article5 from '../assets/img/article5.png';
import article6 from '../assets/img/article6.png';

// TODO: Should add motion to Bloglist
// TODO: Should make it responsive

const BlogList = () => (
  <section className="py-10">
    <Divider title="آخرین مقالات" />
    <div className="container mt-6">
      <div className="grid grid-cols-3 gap-16">
        <a href="/#" className="border-2 rounded-2xl overflow-hidden">
          <img src={article1} alt="blog" className="h-64 w-full" />
          <div className="mx-3 mt-4">
            <h2 className="text-purple-primary font-bold text-xl mb-1">
              عنوان مقاله
            </h2>
            <p className="text-gray-primary text-base text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
          <div className="flex justify-end px-4 py-2 text-purple-secondary font-bold text-sm">
            <p className="pl-2">۱۶ شهریور ۱۴۰۰</p>
            <FaRegCalendarAlt />
          </div>
        </a>
        <a href="/#" className="border-2 rounded-2xl overflow-hidden">
          <img src={article2} alt="blog" className="h-64 w-full" />
          <div className="mx-3 mt-4">
            <h2 className="text-purple-primary font-bold text-xl mb-1">
              عنوان مقاله
            </h2>
            <p className="text-gray-primary text-base text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
          <div className="flex justify-end px-4 py-2 text-purple-secondary font-bold text-sm">
            <p className="pl-2">۱۶ شهریور ۱۴۰۰</p>
            <FaRegCalendarAlt />
          </div>
        </a>
        <a href="/#" className="border-2 rounded-2xl overflow-hidden">
          <img src={article3} alt="blog" className="h-64 w-full" />
          <div className="mx-3 mt-4">
            <h2 className="text-purple-primary font-bold text-xl mb-1">
              عنوان مقاله
            </h2>
            <p className="text-gray-primary text-base text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
          <div className="flex justify-end px-4 py-2 text-purple-secondary font-bold text-sm">
            <p className="pl-2">۱۶ شهریور ۱۴۰۰</p>
            <FaRegCalendarAlt />
          </div>
        </a>
        <a href="/#" className="border-2 rounded-2xl overflow-hidden">
          <img src={article4} alt="blog" className="h-64 w-full" />
          <div className="mx-3 mt-4">
            <h2 className="text-purple-primary font-bold text-xl mb-1">
              عنوان مقاله
            </h2>
            <p className="text-gray-primary text-base text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
          <div className="flex justify-end px-4 py-2 text-purple-secondary font-bold text-sm">
            <p className="pl-2">۱۶ شهریور ۱۴۰۰</p>
            <FaRegCalendarAlt />
          </div>
        </a>
        <a href="/#" className="border-2 rounded-2xl overflow-hidden">
          <img src={article5} alt="blog" className="h-64 w-full" />
          <div className="mx-3 mt-4">
            <h2 className="text-purple-primary font-bold text-xl mb-1">
              عنوان مقاله
            </h2>
            <p className="text-gray-primary text-base text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
          <div className="flex justify-end px-4 py-2 text-purple-secondary font-bold text-sm">
            <p className="pl-2">۱۶ شهریور ۱۴۰۰</p>
            <FaRegCalendarAlt />
          </div>
        </a>
        <a href="/#" className="border-2 rounded-2xl overflow-hidden">
          <img src={article6} alt="blog" className="h-64 w-full" />
          <div className="mx-3 mt-4">
            <h2 className="text-purple-primary font-bold text-xl mb-1">
              عنوان مقاله
            </h2>
            <p className="text-gray-primary text-base text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
          <div className="flex justify-end px-4 py-2 text-purple-secondary font-bold text-sm">
            <p className="pl-2">۱۶ شهریور ۱۴۰۰</p>
            <FaRegCalendarAlt />
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default BlogList;
