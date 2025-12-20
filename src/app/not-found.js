import Link from 'next/link'


function notFound() {
  return (
     <div className="flex  flex-col-reverse lg:flex-row gap-y-0 gap-36 justify-center items-center mb-40">
      <div>
        <h1 className="text-4xl font-medium">صفحه مورد نظر یافت نشد!</h1>
        <button className="text-[#28A745] text-[28px]  bg-[#D8FFE1] px-10 py-3 rounded-2xl mt-7 lg:mt-20">
          <Link href="/" className="font-normal">بازگشت به صفحه اصلی</Link>
        </button>
      </div>
      <img src="/images/pagenotfound.png" width="555" height="555" />
    </div>
  )
}

export default notFound