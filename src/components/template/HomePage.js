"use client";
import { FaLocationDot } from "react-icons/fa6";
import { RiEarthFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import Card from "@/module/Card";
import { FaQuestionCircle } from "react-icons/fa";
import Slider from "@/module/Slider";
import { useGetTours } from "src/services/queries";
import { useEffect, useState } from "react";
import { DatePicker } from "zaman";


function HomePage() {
   const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
 

  const {data} = useGetTours()
  console.log(data)
  const tours = data?.data

 const [filteredTours, setFilteredTours] = useState(tours);

   const handleSearch = () => {
    const results = tours.filter(
      (tour) =>
        (origin ? tour.origin.name === origin : true) &&
        (destination ? tour.destination.name === destination : true)
    );
    setFilteredTours(results);
  };
  useEffect(() => {
    setFilteredTours(tours);
  }, [tours]);
  return (
    <div>
      <img src="/images/Untitle.png" />
      <p className="  text-2xl flex justify-center !mt-6  font-normal ">
        <span className="!text-[#28A745] mx-2 "> تورینو </span>
        برگذار کننده بهترین تور های داخلی و خارجی
      </p>
      <div className=" grid grid-cols-4  items-center  mt-8 border border-[#00000027] rounded-xl !px-2 !py-4 gap-2 w-[700px] h-[67px] m-auto ">
        <div className="flex gap-0.5 mr-3 ">
          <FaLocationDot className="mt-2 mb-2" />
          <select value={origin}  onChange={(e) => setOrigin(e.target.value)} className=" appearance-none outline-none font-medium text-lg text-[#28A745]   ">
            <option>مبدا</option>
              <option className="hover:bg-blue-500"  value="Tehran">تهران</option>
            <option  className="hover:bg-blue-500" value="Sananndaj">سنندج</option>
            <option   className="hover:bg-blue-500" value="Isfahan">اصفحان</option>
          </select>
        </div>
        <div className="flex gap-1 ml-20">
          <RiEarthFill className="mt-2 mb-2" />
          <select value={destination}
            onChange={(e) => setDestination(e.target.value)} className=" appearance-none outline-none font-semibold text-lg text-[#28A745] ">
            <option >مقصد</option>
            <option value="Italy">ایتالیا</option>
            <option value="offRoad Center">افرود</option>
            <option value="Mazandaran">مازندران</option>
            <option value="Hewler">اربیل</option>
            <option value="sulaymaniyahTour">سلمانیه</option>
            <option value="Madrid">مادرید</option>
            <option value="Sananndaj">سنندج</option>
          </select>
        </div>
        <div className=" gap-3">
           <div className="flex gap-5 relative  ">
            <FaCalendarAlt  className="absolute left-43 top-1/2 -translate-y-1/2 text-black text-base pointer-events-none " />
            <DatePicker inputAttributes={{placeholder:"تاریخ"}} inputClass=" outline-none font-black text-lg text-[#28A745] ml-20" onChange={(e) => console.log(e.value)} />
          </div> 
         </div>
        <div>
          <button onClick={handleSearch} className=" border-[#28A745] text-xl text-[#FFFFFF] bg-[#28A745] rounded-4xl w-[160px] h-[40px]  ">
            جستجو
          </button>
        </div>
      </div>
      <h1 className="font-light  text-3xl mt-20 mr-30">همه تور ها</h1>
     
      <div className="grid grid-cols-4 w-[1200px] m-auto ">
       
        {filteredTours?.map((tour) => (
          <Card key={tour.id} tour={tour}  />
        ))}
      </div>
      <div className="w-[1200px] h-[300px] rounded-lg mt-20 m-auto">
        <img src="/images/call.png" />
      </div>

      <div className="mb-5 ">
        <div className="flex gap-50">
          <div>
            <div className="flex mr-5">
               <FaQuestionCircle className="text-[#28A745] w-[59px] h-[68px] " />
         <p className="w-[179px] h-[62px] font-light text-3xl mt-5.5 mr-2">
               چرا <span className="text-[#28A745]"> تورینو</span> ؟
            </p>
            </div>
               <h4 className="font-light text-[24px] mt-1 mr-8 ">
        تور طبیعت گردی و تاریخی
            </h4>
            <p className="font-extralight w-[400px] h-[50px] leading-[220.00000000000003%] mt-3 mr-9">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
           </p>
          </div>
           <div>
            <div className="flex gap-5 mt-20">
              <img src="/images/yazd.png" className="w-[200px] h-[200px] "/>
              <img src="/images/salmanie.png" className="w-[220px] h-[200px] border rounded-xl "/>
              <img src="/images/mazandaran.png"  className="w-[220px] h-[200px] border rounded-xl "/>
            </div>
           </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6  mb-30  h-[100px] max-w-[1200px] m-auto "  dir="rtl">
         <div  className="flex items-center gap-4  border-t border-[#00000029] mt-50">
          <img
           src="/images/prsent.png"
            className="w-[95px] h-[95px]"
            alt="صرفه ترین قیمت"/>
            <div className="text-right">
              <h2 className="font-normal text-xl">بصرفه ترین قیمت</h2>
               <p className="font-light text-base ">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
            </div>
         </div>
         <div className="flex items-center gap-4  border-t border-[#00000029] mt-50">
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
         <div className="flex items-center gap-4  border-t border-[#00000029] mt-50">
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



      

    