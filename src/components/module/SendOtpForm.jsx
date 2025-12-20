"use client"
import toast from "react-hot-toast";
import {  useSendOtp } from "src/services/auth";


function SendOtpForm({  setShowLogin, mobile, setStep, setMobile }) {
   const { mutate } = useSendOtp();
  const isValidMobile = (mobile) => {
    const mobileRegex = /^09\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
     mutate(
      { mobile},
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    )
    if (!isValidMobile(mobile)) {
      toast.error("شماره تلفن نامعتبر است");
      return;
    }
    
   
  };

  return (

    <form onSubmit={submitHandler}>
       <span
          className="h-[12px] w-[12px] flex mr-130 text-[#D40000] "
          onClick={() => setShowLogin(false)}
        >
          x
        </span>
      <p className="font-light text-3xl text-[#282828]  flex justify-center mt-7">
        ورود به تورینو
      </p>
      <div className="mt-15">
        <label className="font-light text-base mr-6" htmlFor="input">
          شماره موبایل خود را وارد کنید
        </label>
        <input
          type="text"
          id="input"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="4253***0919"
          className="w-[491px] h-[54px] border border-[#00000040] rounded-lg p-[10px] mt-3 mr-5"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-[491px] h-[54px] border  rounded-lg mt-8 mr-5 text-[#FFFFFF] bg-[#28A745]">
          ارسال کد تایید
        </button>
      </div>
    </form>

  );
}

export default SendOtpForm;
