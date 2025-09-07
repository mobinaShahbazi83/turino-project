import { FaLocationDot } from "react-icons/fa6";
import { RiEarthFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import Card from "@/module/Card";

function HomePage() {
  const tours = [
    {
      id: 1,
      title: "اردبیل",
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
      <div className="flex justify-between items-center mt-8 border border-[#00000029] rounded-xl !px-2 !py-4 gap-2 w-[750px] h-[67px] m-auto ">
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
      <h1>همه تورها</h1>
      <div>
        {tours.map((tour) => (
          <Card key={tour.id}  {...tour}/>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
