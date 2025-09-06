import { FaLocationDot } from "react-icons/fa6";
import { RiEarthFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

function HomePage() {
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
    </div>
  );
}

export default HomePage;
