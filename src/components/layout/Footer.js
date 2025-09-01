import styles from "@/layout/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.Detailsfirs}>
        <h3>تورینو</h3>
        <ul>
          <li>درباره ما</li>
          <li>تماس با ما</li>
          <li>چرا تورینو</li>
          <li>بیمه مسافرتی</li>
        </ul>
      </div>
      <div className={styles.Detailssecond}>
        <h3>خدمات مشتریان</h3>
        <ul>
          <li>پشتیبانی آنلاین</li>
          <li>راهنمای خرید</li>
          <li>راهنمای استرداد</li>
          <li>پرسش و پاسخ</li>
        </ul>
      </div>
      <div className={styles.support}>
        <img src="/images/Torino.png" className={styles.img} />
        <h4>021-8574تلفن پشتیبانی:</h4>
      </div>
      <div className={styles.logo}>
        <img src="/images/Combined-Shape.png" className={styles.img} />
        <img src="/images/ecunion-35c3c933.png" className={styles.img} />
        <img src="/images/samandehi-6e2b448a.png" className={styles.img} />
        <img src="/images/aira-682b7c43.png" className={styles.img} />
      </div>
      <span className={styles.text}>
        کلیه حقوق این وب سایت متعلق به تورینو میباشد.
      </span>
    </footer>
  );
}

export default Footer;
