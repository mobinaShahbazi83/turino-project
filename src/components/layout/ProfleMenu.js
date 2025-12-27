import { IoPerson } from "react-icons/io5";
import { IoAirplane } from "react-icons/io5";
import { HiMiniCalculator } from "react-icons/hi2";
import Link from "next/link";

function ProfleMenu() {
  return (
    <div className="w-[280px] h-[160px] bg-[#FFFFFF] border border-[#00000033] rounded-lg mr-20 px-2">
        <Link href="/profile" className="flex mr-3 mt-4 gap-1 border-b border-[#00000029]  pb-2">
            <IoPerson className="text-[#28A745]"/>
            <h1 className="text-[#28A745] text-base">پروفایل</h1>
        </Link>
        <Link href="/profile/tours" className="flex  gap-1 border-b border-[#00000029]  pb-2 mt-4 mr-3 gap-2">
          <IoAirplane className="text-[#28A745]" />
          <h2 className="text-sm text-[#28A745]">تور های من</h2>
        </Link>
        <Link href="/profile/transactions" className="flex  mt-4 mr-3 gap-2">
          <HiMiniCalculator className="text-[#28A745]"/>
          <h3  className="text-sm text-[#28A745]">تراکنش ها</h3>
        </Link>
    </div>
  )
}

export default ProfleMenu 