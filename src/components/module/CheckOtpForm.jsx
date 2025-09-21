"use client"
import { useEffect, useState } from "react";
import { OtpInput } from 'reactjs-otp-input';
import { GoArrowLeft } from "react-icons/go";


function CheckOtpForm({code ,setCode  ,mobile ,setStep}) {
   const [otp, setOtp] = useState('');
    const [timeLeft, setTimeLeft] = useState(85);
   const handleChange = (otp) => setOtp(otp);

   const submitHandler = (event) => {
     event.preventDefault();
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
          onClick={() => setStep(2)}>
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
                numInputs={5}
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
           <button
              type="submit"
              className="block w-full bg-[#28A745]  border  rounded-lg mt-19 py-4 text-white">
              ورود به تورینو
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default CheckOtpForm
//  <form onSubmit={submitHandler}>
//       <GoArrowLeft className="w-[20px] h-[20px] mr-130" />
//       <p className="font-medium text-[28px] flex justify-center mt-8">کد تایید را وارد کنید.</p>
//       <span className="font-extralight text-base flex justify-center mt-3 ">کد تایید به شماره {mobile} ارسال شد.</span>
//     <OtpInput value={otp} onChange={handleChange} numInputs={5} separator={<span>-</span>}  className="flex justify-center mt-3"/>;
//     <button type="submit">ورود به تورینو</button>
//     </form>