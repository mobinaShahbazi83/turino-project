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
    
 {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile}  setShowLogin={setShowLogin} />
      )}
      {step === 2 && <CheckOtpForm code={code} setCode={setCode}  mobile={mobile} setStep={setStep} setShowLogin={setShowLogin}/>}
  </div>
     
    </div>
  );
}

export default  AuthModal;
