

function CheckOtpForm({code ,setCode  ,mobile ,setStep}) {
  return (
    <form>
      <p>کد تایید را وارد کنید.</p>
      <span>کد تایید به شماره {mobile} ارسال شد.</span>
    
    <button type="submit">ورود به تورینو</button>
    </form>
  )
}

export default CheckOtpForm