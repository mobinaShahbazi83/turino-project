"use client"
import AuthModal from "@/module/AuthModal";
import Link from "next/link";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { useGetUserInfo } from "src/services/queries";
import { HiChevronDown } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { BiRun } from "react-icons/bi";
import { IoMan } from "react-icons/io5";
import { deleteCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
       const [showlogin, setShowLogin] = useState(null)
       const [showMenu, setShowMenu] = useState(null)

       const showHandler = () => {
        setShowLogin(true)
       }

       const openHandler = () => {
        setShowMenu(true)
       }
 
       const {data, refetch} = useGetUserInfo()
       console.log(data)

       const logoutHandler = () => {
         deleteCookie("accessToken");
         deleteCookie("refreshToken");
         router.replace("/");
         setShowMenu(false)
         refetch()
        
       }

  return (
    <header className="max-w-[1200px] mx-auto  h-[74px] flex justify-between items-center ">
      <div className="flex items-center gap-25">
        <img src="/images/Torino.png"  />
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/" className="!text-[#28A745]">
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link href="/tourism-services">خدمات گردشگری</Link>
          </li>
          <li>
            <Link href="/about-us">درباره ما</Link>
          </li>
          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>
        </ul>
      </div>

      <div>
      {
        data?.data?.mobile ? (
          <div className="relative" >
           <div className="flex gap-1">
             <IoPersonSharp className="text-[#28A745]" />
          <span className="text-[#28A745]"  onClick={openHandler}>{data?.data?.mobile}</span>
          <HiChevronDown  className="text-[#28A745]"/>
           </div>
          {/* min-w-[130px] */}
          {!!showMenu && (<div className="flex flex-col absolute  w-[200px] h-[95px] border rounded-lg bg-[#FFFFFF] border-[#F4F4F4] ">
            <div className="flex mt-3 border-b border-[#0000001F] p-1 gap-1">
              <IoMan className="w-[23px] h-[23px] text-[#28A745]"/>
            <Link href="/profile" className=" text-[#28A745]">اطلاعات حساب کاربری</Link>
            </div>
           <div className="flex mt-2 gap-1">
             <BiRun   className="w-[23px] h-[23px] text-[#D40000]"/>
            <button className=" text-[#D40000]" onClick={logoutHandler}>خروج از حساب کاربری</button>
           </div>
          </div>)}
          </div>
          
        ) : (
           <button  className="flex items-center border rounded-lg  px-3 py-1  gap-1  text-[#28A745]  " onClick={showHandler}>
          <IoPerson className="!mt-1" />
          ورود | ثبت نام</button>
        )
      }
      </div>
      {!!showlogin && <AuthModal showlogin={showlogin} setShowLogin={setShowLogin}/>}
    </header>
  );
}

export default Header;
