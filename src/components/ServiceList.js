import React from 'react';

// import icons
import {
  FaNotesMedical,
  FaFileMedicalAlt,
  FaLaptopMedical,
} from 'react-icons/fa';

import { MdSchool } from 'react-icons/md';
import { GiHealthNormal, GiHealing } from 'react-icons/gi';

import Divider from '../layouts/Divider';

// TODO: Should add motion to Service list and service items
// TODO: Should make it responsive

const ServiceList = () => (
  <section className=" mt-8">
    <Divider title="خدمات ما" />
    <div className="container max-w-5xl">
      <div className="flex flex-col items-center">
        <p className="font-bold text-3xl mt-5 ">
          {'تلاش ما '}
          <span className="text-purple-dark underline">ارائه بهترین خدمات</span>
          {' به شماست!'}
        </p>
        <p className="text-center mt-4 max-w-xl text-gray-primary text-lg">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون که لازم است.
        </p>
      </div>
      {/* services section */}
      <section className="grid grid-cols-3">
        <div>
          <div className="flex items-start px-2 py-8 mx-4">
            <span className="text-purple-secondary p-5 border rounded-full">
              <FaNotesMedical size="24" />
            </span>
            <span className="mt-2 mr-4">
              <span className="mt-4 text-purple-primary font-bold text-xl">
                معاینات بدو استخدام
              </span>
              <p className="mt-2 text-gray-primary text-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون که لازم است.
              </p>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-start px-2 py-8 mx-4">
            <span className="text-purple-secondary p-5 border rounded-full">
              <GiHealthNormal size="24" />
            </span>
            <span className="mt-2 mr-4">
              <span className="mt-4 text-purple-primary font-bold text-xl">
                معاینات سلامت شغلی
              </span>
              <p className="mt-2 text-gray-primary text-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون که لازم است.
              </p>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-start px-2 py-8 mx-4">
            <span className="text-purple-secondary p-5 border rounded-full">
              <FaLaptopMedical size="24" />
            </span>
            <span className="mt-2 mr-4">
              <span className="mt-4 text-purple-primary font-bold text-xl">
                تعین سلامت شعلی
              </span>
              <p className="mt-2 text-gray-primary text-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون که لازم است.
              </p>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-start px-2 py-8 mx-4">
            <span className="text-purple-secondary p-5 border rounded-full">
              <MdSchool size="24" />
            </span>
            <span className="mt-2 mr-4">
              <span className="mt-4 text-purple-primary font-bold text-xl">
                آموزش و مشاوره
              </span>
              <p className="mt-2 text-gray-primary text-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون که لازم است.
              </p>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-start px-2 py-8 mx-4">
            <span className="text-purple-secondary p-5 border rounded-full">
              <GiHealing size="24" />
            </span>
            <span className="mt-2 mr-4">
              <span className="mt-4 text-purple-primary font-bold text-xl">
                معاینات بازگشت به کار
              </span>
              <p className="mt-2 text-gray-primary text-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون که لازم است.
              </p>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-start px-2 py-8 mx-4">
            <span className="text-purple-secondary p-5 border rounded-full">
              <FaFileMedicalAlt size="24" />
            </span>
            <span className="mt-2 mr-4">
              <span className="mt-4 text-purple-primary font-bold text-xl">
                ثبت پرونده و گزارش آنلاین
              </span>
              <p className="mt-2 text-gray-primary text-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون که لازم است.
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default ServiceList;
