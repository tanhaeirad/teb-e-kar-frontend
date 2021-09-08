import React from 'react';

import { AiFillInstagram, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';
import { FaTwitter, FaFax } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdMail } from 'react-icons/md';

import './Footer.css';

// TODO: Should add motion to Footer
// TODO: Should make it responsive

const phone_number = '۴۳ ۳۷ ۲۴۶ ۰۳۱۳';

const Footer = () => (
  <div className="mt-20 py-24 bg-gray-heavy grid grid-cols-3 text-white-primary justify-items-center">
    {/* right side of footer */}
    <div className="flex flex-col gap-y-8 pr-20">
      <div className="flex gap-3 hover-style">
        <IoLocationSharp size={28} />
        <div>
          <span className="font-bold">نشانی: </span>
          <span className="text-sm text-white-alternative">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از است.
          </span>
        </div>
      </div>

      <div className="flex gap-3 hover-style">
        <AiFillPhone size={24} />
        <div>
          <span className="font-bold">تلفن: </span>
          <span className="text-sm" style={{ dir: 'ltr' }}>
            {phone_number}
          </span>
        </div>
      </div>

      <div className="flex gap-3 hover-style">
        <FaFax size={24} />
        <div>
          <span className="font-bold hover-style">نمابر: </span>
          <span className="text-sm">{phone_number}</span>
        </div>
      </div>
      <div className="flex gap-3 hover-style">
        <MdMail size={24} />
        <div>
          <span className="font-bold">پست الکترونیکی: </span>
          <span className="text-sm">example@example.com</span>
        </div>
      </div>
    </div>
    {/* middle side of footer */}
    <div className="flex flex-col">
      <a href="/#" className="mx-auto font-nastaliq text-2xl hover-style">
        مرکز تخصصی طب کار آرنا
      </a>
      <div className="flex gap-8 justify-center font-semibold text-base mt-10">
        <a href="/#" className="footer-link">
          خانه
        </a>
        <a href="/#" className="footer-link">
          بلاگ
        </a>
        <a href="/#" className="footer-link">
          خدمات
        </a>
        <a href="/#" className="footer-link">
          درباره ما
        </a>
        <a href="/#" className="footer-link">
          تماس با ما
        </a>
      </div>
      <div className="flex justify-center gap-10 text-4xl mt-9 hover:bounceOrig">
        <a href="/#" className="hover-style hover:bounceOrig">
          <AiFillInstagram />
        </a>
        <a href="/#" className="hover-style hover:bounceOrig">
          <AiFillLinkedin />
        </a>
        <a href="/#" className="hover-style hover:bounceOrig">
          <FaTwitter />
        </a>
      </div>
    </div>
    {/* left side of footer */}
    <div className="flex flex-col gap-y-4 text-sm text-white-alternative">
      <h3 className="font-bold text-lg pb-2 hover-style">خدمات</h3>
      <a href="/#" className="hover-style">
        معاینات بدو استخدام
      </a>
      <a href="/#" className="hover-style">
        معاینات سلامت شغلی
      </a>
      <a href="/#" className="hover-style">
        تعیین سلامت شغلی
      </a>
      <a href="/#" className="hover-style">
        آموزش و مشاوره
      </a>
      <a href="/#" className="hover-style">
        معاینات بازگشت به کار
      </a>
      <a href="/#" className="hover-style">
        ثبت پرونده و گزارش آنلاین
      </a>
    </div>
    <div className="col-span-3 mt-10 text-sm">
      <p className="text-gray-alternative rota">
        © استفاده از مطالب سایت تنها با درج لینک مستقیم به آن مطلب مجاز است.
      </p>
    </div>
  </div>
);

export default Footer;
