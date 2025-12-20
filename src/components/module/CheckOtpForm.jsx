"use client"
import { useEffect, useState } from "react";
import { OtpInput } from 'reactjs-otp-input';
import { GoArrowLeft } from "react-icons/go";
import {  useCheckOtp } from "src/services/auth";
import { setCookie } from "@/utils/cookie";
import toast from "react-hot-toast";


function CheckOtpForm({code ,setCode  ,mobile ,setStep, setShowLogin}) {

    const [timeLeft, setTimeLeft] = useState(85);
  const { mutate } = useCheckOtp();
   
 
   const submitHandler =  (event) => {
     event.preventDefault();
    
     console.log({code, mobile})
   
      mutate(
        {mobile, code},
      {
        onSuccess: (data) => {
          console.log(data)
          toast.success(data?.data?.message);
            setCookie(data?.data);
            setShowLogin(false)
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    )
   }

   
    const changeHandler = (otp) => {
    setCode(otp);
  };

   useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

   
  return (
    <div>
      <div className="flex justify-end">
         <button
          className="inline-block text-[#171717] text-xl "
          onClick={() => setStep(1)}>
          <GoArrowLeft />
        </button>
      </div>
      <div  className="px-7 text-center ">
        <h2 className="text-[28px] font-[500] leading-10 text-center mt-5">
          کد تایید را وارد کنید.
        </h2>
         <span className="font-extralight text-base flex justify-center mt-2 ">کد تایید به شماره {mobile} ارسال شد.</span>
        <form  onSubmit={submitHandler}>
          <div  className="mb-20">
            <label
              htmlFor="large-input"
              className="block mb-2 text-base font-light text-gray-900 dark:text-white">
              کد تایید به شماره {mobile} ارسال شد
            </label>
              <div className="flex justify-center mt-4" dir="ltr">
              <OtpInput
                value={code}
                onChange={changeHandler}
                numInputs={6}
                inputStyle={{
                  border: "1px solid #00000040",
                  borderRadius: "4px",
                  width: "40px",
                  height: "40px",
                  margin: "0 5px",
                  textAlign: "center",
                  fontSize: "16px",
                }}
                focusStyle={{
                  border: "1px solid #009eca",
                  outline: "none",
                }}
              />
            </div>
            
             <div className="flex mt-15 gap-10 mr-20">
              <button onClick={() => setStep(1)} className="w-[144px] h-[38px] border rounded-xl text-sm font-normal border-[#28A745] bg-[#28A745] text-[#FFFFFF]">تغییر شماره موبایل</button>
           <button
              type="submit"
              className="w-[144px] h-[38px] border rounded-xl text-sm font-normal border-[#28A745] bg-[#28A745] text-[#FFFFFF]">
              ورود به تورینو
            </button>
             </div>
           
          </div>
        </form>
      </div>

    </div>
  )
}

export default CheckOtpForm
