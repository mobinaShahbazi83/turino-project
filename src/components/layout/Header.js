import styles from "@/layout/Header.module.css"
import Link from "next/link"
import { IoPerson } from "react-icons/io5";

function Header() {
  return (
   <header className={styles.header}>
    <div>
        <img src="/images/Torino.png" className={styles.img}/>
    </div>
     <div className={styles.right}>
        <ul>
            <li>
                <Link href="/">صفحه اصلی</Link>
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
     <div className={styles.left}>
      <ul>
        <li>
            <Link href="/login">ورود <IoPerson /></Link>
        </li>
        |
        <li>
            <Link href="/register">ثبت نام</Link>
        </li>
      </ul>
     </div>
   </header>
  )
}

export default Header