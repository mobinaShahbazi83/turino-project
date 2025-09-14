"use client";
import { FaLocationDot } from "react-icons/fa6";
import { RiEarthFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import Card from "@/module/Card";
import { FaQuestionCircle } from "react-icons/fa";
import Slider from "@/module/Slider";



function HomePage() {
  const tours = [
    {
      id: 1,
      title: "اربیل",
      image: "/images/arbil.png",
      discription: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
      price: 17500000,
    },
    {
      id: 2,
      title: "سلمانیه",
      image: "/images/salmanie.png",
      discription: "مهر ماه . 6 روزه - پرواز - هتل 5 س...",
      price: 27500000,
    },
    {
      id: 3,
      title: "تور مادرید",
      image: "/images/madrid.png",
      discription: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
      price: 34000000,
    },
    {
      id: 4,
      title: "تور دبی",
      image: "/images/dubia.png",
      discription: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
      price: 7500000,
    },
    {
      id: 5,
      title: "تور کیش",
      image: "/images/kish.png",
      discription: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
      price: 7500000,
    },
    {
      id: 6,
      title: "تور ایتالیا",
      image: "/images/italy.png",
      discription: "مهر ماه . 6 روزه - پرواز - هتل 5 س...",
      price: 27500000,
    },
    {
      id: 7,
      title: "تور آفرود",
      image: "/images/afrod.png",
      discription: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
      price: 34000000,
    },
    {
      id: 8,
      title: "تور مازندران",
      image: "/images/mazandaran.png",
      discription: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
      price: 500000,
    },
  ];
  return (
    <div>
      <img src="/images/Untitle.png" />
      <p className="  text-2xl flex justify-center !mt-6  font-normal ">
        <span className="!text-[#28A745] mx-2 "> تورینو </span>
        برگذار کننده بهترین تور های داخلی و خارجی
      </p>
      <div className="flex justify-between items-center mt-8 border border-[#00000027] rounded-xl !px-2 !py-4 gap-2 w-[750px] h-[67px] m-auto ">
        <div className="flex gap-0.5">
          <FaLocationDot className="mt-2 mb-2" />
          <select className=" appearance-none">
            <option>مبدا</option>
          </select>
        </div>
        |
        <div className="flex gap-1">
          <RiEarthFill className="mt-2 mb-2" />
          <select className=" appearance-none">
            <option>مقصد</option>
          </select>
        </div>
        |
        <div className="flex gap-1">
          <FaCalendarAlt className="mt-2 mb-2" />
          <select className=" appearance-none">
            <option>تاریخ</option>
          </select>
        </div>
        <div>
          <button className=" border-[#28A745] text-xl text-[#FFFFFF] bg-[#28A745] rounded-4xl w-[130px] h-[40px]  ">
            جستجو
          </button>
        </div>
      </div>
      <h1 className="font-light  text-3xl mt-20 mr-30">همه تور ها</h1>
      <div className="grid grid-cols-4 w-[1200px] m-auto ">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} />
        ))}
      </div>
      <div className="w-[1200px] h-[300px] rounded-lg mt-30 m-auto">
        <img src="/images/call.png" />
      </div>
      <div className="flex  mt-20 w-[300px] h-[200px]">
        <div className="mt-5 mr-30 mb-50">
          <div className="flex">
            <FaQuestionCircle className="text-[#28A745] w-[59px] h-[68px] " />
            <p className="w-[179px] h-[62px] font-light text-3xl mt-5.5 mr-2">
              چرا <span className="text-[#28A745]"> تورینو</span> ؟
            </p>
          </div>
          <h4 className="font-light text-[24px] mt-2 ">
            تور طبیعت گردی و تاریخی
          </h4>
          <p className="font-extralight w-[400px] h-[50px] leading-[220.00000000000003%] mt-3">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
        <div>{/* <Slider/> */}</div>
      </div>
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-6 mt-50  h-[100px] "
        dir="rtl"
      >
        <div className="flex items-center gap-4 mt-60 border-t border-[#00000029]">
          <img
            src="/images/prsent.png"
            className="w-[95px] h-[95px]"
            alt="صرفه ترین قیمت"
          />
          <div className="text-right">
            <h2 className="font-normal text-xl">بصرفه ترین قیمت</h2>
            <p className="font-light text-base ">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-60 border-t border-[#00000029]">
          <img
            src="/images/message.png"
            className="w-[95px] h-[95px]"
            alt="پشتیبانی 24 ساعته"
          />
          <div className="text-right">
            <h2 className="font-normal text-xl">پشتیبانی</h2>
            <p className="font-light text-base ">
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-60 border-t border-[#00000029]">
          <img
            src="/images/hart.png"
            className="w-[95px] h-[95px]"
            alt="رضایت کاربران"
          />
          <div className="text-right">
            <h2 className="font-normal text-xl ">رضایت کاربران</h2>
            <p className="font-light text-base ">
              رضایت بیش از 10هزار کاربر از تور های ما.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
