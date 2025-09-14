function LoginPage({showlogin,setShowLogin }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[3px]  bg-opacity-50 ">
        
      <div className="bg-white p-4   shadow-lg w-auto md:w-[571px] h-[362px] border border-[#28A745] rounded-xl">
        <span className="h-[12px] w-[12px] flex mr-130 text-[#D40000] " onClick={() => setShowLogin(null)}>x</span>
           <h1 className="font-light text-3xl text-[#282828]  flex justify-center mt-7">
          ورود به تورینو
        </h1>
        <div className="mt-15">
          <label className="font-light text-base mr-6">
            شماره موبایل خود را وارد کنید
          </label>
          <input
            type="number"
            placeholder="4253***0919"
            className="w-[491px] h-[54px] border border-[#00000040] rounded-lg p-[10px] mt-3 mr-5"
          />
        </div>
        <div>
          <button className="w-[491px] h-[54px] border border-[#00000040] rounded-lg mt-8 mr-5 text-[#FFFFFF] bg-[#28A745]">
            ارسال کد تایید
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default LoginPage;
