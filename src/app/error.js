"use client"

function Error() {
  return (
     <div className=" flex flex-col-reverse lg:flex-row gap-y-0 gap-36 justify-center items-center mb-40">
      <div>
        <h1 className="text-4xl font-medium">ارتباط با سرور برقرار نیست!</h1>
        <button className="font-normal text-2xl mt-5">
          لطفا بعدا دوباره امتحان کنید.
        </button>
      </div>
      <img src="/images/error.png" width="555" height="555" />
    </div>
  )
}

export default Error