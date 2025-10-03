function Footer() {
  return (
    <footer className="  border-t border-[#00000029] ">
      <div className="flex justify-between items-center  border-b border-[#00000029] ">
        <div className="flex  justify-between gap-25 !mb-10 ">
          <div>
            <h3 className="!mt-5 !text-[#28A745] !text-2xl">تورینو</h3>
            <ul className="!mt-5 flex flex-col gap-1">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>
          <div>
            <h3 className="!mt-5 !text-[#28A745] !text-2xl">خدمات مشتریان</h3>
            <ul className="!mt-5 flex flex-col gap-1">
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li>پرسش و پاسخ</li>
            </ul>
          </div>
        </div>
        <div className="justify-items-end flex flex-row-reverse md:block gap-20">
          <div className="content-end !mt-10">
            <img
              src="/images/Torino.png"
              className="flex self-center !w-[146px] !h-[44px]"
            />
            <p className="!mt-3">تلفن پشتیبانی: 021-8574</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 justify-center items-center !mt-10 ap-2 md:gap-7 !mb-8 ">
            <img
              src="/images/Combined-Shape.png"
              className="w-[70px] h-[60px]"
            />
            <img src="/images/code.png" className="w-[65px] h-[60px]" />
            <img
              src="/images/ecunion-35c3c933.png"
              className="w-[65px] h-[60px]"
            />
            <img
              src="/images/samandehi-6e2b448a.png"
              className="w-[65px] h-[60px]"
            />
            <img
              src="/images/aira-682b7c43.png"
              className="w-[65px] h-[60px]"
            />
          </div>
        </div>
      </div>
      <p className="text-center !mt-5">
        کلیه حقوق این وب سایت متعلق به تورینو میباشد.
      </p>
    </footer>
  );
}

export default Footer;
