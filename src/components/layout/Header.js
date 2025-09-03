import Link from "next/link";
import { IoPerson } from "react-icons/io5";

function Header() {
  return (
    <header className="  h-[74px] flex justify-between items-center  border-b border-[#00000029]">
      <div className="flex items-center gap-25">
        <img src="/images/Torino.png" className=" mt-6" />
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

      <div className="flex items-center text-[#28A745]  border rounded-lg !px-3 !py-1  gap-2">
        <Link href="/login" className="flex items-center  gap-1 ">
          <IoPerson className="!mt-1" />
          ورود
        </Link>
        |<Link href="/register">ثبت نام</Link>
      </div>
    </header>
  );
}

export default Header;
