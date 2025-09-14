"use client";
import CheckOtpForm from "@/module/CheckOtpForm";
import SendOtpForm from "@/module/SendOtpForm";
import { useState } from "react";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && <CheckOtpForm />}
    </div>
  );
}

export default AuthPage;
