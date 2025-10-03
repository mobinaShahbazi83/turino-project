import { ImUser } from "react-icons/im";
import { ImPaste } from "react-icons/im";
import { FaMedal } from "react-icons/fa";
import { TbRoute } from "react-icons/tb";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { PiBusFill } from "react-icons/pi";
import { HiMiniUsers } from "react-icons/hi2";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Image from "next/image";

function TourDetailsPage() {
  return (
    <div className="lg:bg-[#F3F3F3]  h-auto py-20">
      <div className="w-[1100px] h-[360px] bg-[#FFFFFF] mr-40 border rounded-xl border-[#28A745]">
        <div className="flex gap-5">
          <Image
            width={335}
            height={200}
            alt="photo"
            src="/images/arbil.png"
            className="w-[335px] h-[200px] border rounded-xl border-[#00000029] mr-5 mt-5"
          />
          <div>
            <h1 className="font-medium text-[25px] mt-5">اربیل</h1>
            <p className="text-xl mt-5">5 روز و 4 شب</p>

            <div className="flex gap-20 mt-5 ">
              <div className="flex gap-2">
                <ImUser className=" text-[#7D7D7D] "/>
                <p className="font-thin text-base text-[#7D7D7D]">تورلیدر از مبدا</p>
              </div>
              <div className="flex  gap-2">
                <ImPaste  className=" text-[#7D7D7D]"/>
                <p  className="font-thin text-base  text-[#7D7D7D]">برنامه سفر</p>
              </div>

              <div className="flex  gap-2">
                <FaMedal className=" text-[#7D7D7D]" />
                <p  className="font-thin text-base  text-[#7D7D7D]">تضمین کیفیت</p>
              </div>
            </div>
            <div className="flex  justify-between mt-10 gap-100 ">
              <div className="flex">
                <span className="text-[#009ECA] ml-2">17,500,000</span>
              <p className="text-sm text-[#7D7D7D] mt-0.5 font-extralight">تومان</p>
              </div>
              <button className="border rounded-lg bg-[#28A745] border-[#28A745] text-[#FFFFFF] w-[140px] h-[38px]">رزرو و خرید</button>
            </div>
          </div>
        </div>

        <div className="flex mt-10 gap-25 mr-5">
          <div>
            <div className="flex gap-1 mr-2 ">
              <TbRoute />
              <p className="text-sm">مبدا</p>
            </div>
            <p className="text-base mt-1 mr-3 font-medium">سنندج</p>
          </div>
          <div>
            <div  className="flex gap-2">
              <BsFillCalendarDateFill  className="text-[#444444]"/>
              <p  className="text-sm">تاریخ رفت</p>
            </div>
            <p  className="text-base mt-2  font-medium">23 مهر 1403</p>
          </div>
          <div>
            <div  className="flex gap-2">
              <BsFillCalendarDateFill className="text-[#444444]"/>
              <p  className="text-sm">تاریخ برگشت</p>
            </div>
            <p  className="text-base mt-2 font-medium">28 مهر 1403</p>
          </div>
          <div>
            <div  className="flex gap-2">
              <PiBusFill className="text-[#444444]"/>
              <p  className="text-sm">حمل و نقل</p>
            </div>
            <p  className="text-base mt-2 font-medium">اتوبوس</p>
          </div>
          <div>
            <div  className="flex gap-2">
              <HiMiniUsers className="text-[#444444]"/>
              <p  className="text-sm">ظرفیت</p>
            </div>
            <p  className="text-base mt-2 font-medium">حداکثر 30 نفر</p>
          </div>
          <div>
            <div  className="flex gap-2">
              <AiFillSafetyCertificate className="text-[#444444]" />
              <p  className="text-sm">بیمه</p>
            </div>
            <p  className="text-base mt-2 font-medium">بیمه 50 هزار دیناری</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;
