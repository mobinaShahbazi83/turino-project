"use client";
import CheckOtpForm from "@/module/CheckOtpForm";
import SendOtpForm from "@/module/SendOtpForm";
import { useState } from "react";

function AuthModal({showlogin,setShowLogin}) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[3px]  bg-opacity-50 ">
  <div  className="bg-white p-4   shadow-lg w-auto md:w-[571px] h-[362px] border border-[#28A745] rounded-xl">
     <span
          className="h-[12px] w-[12px] flex mr-130 text-[#D40000] "
          onClick={() => setShowLogin(null)}
        >
          x
        </span>
 {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && <CheckOtpForm code={code} setCode={setCode}  mobile={mobile} setStep={setStep}/>}
  </div>
     
    </div>
  );
}

export default  AuthModal;
