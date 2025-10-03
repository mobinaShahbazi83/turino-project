import { HiMiniPencilSquare } from "react-icons/hi2";

function ProfilePage() {
  return (
    <div>
      <div className="w-[872px] h-[115px] bg-[#FFFFFF] border rounded-lg border-[#00000040]">
        <h1 className="mt-2 mr-3 text-base">اطلاعات حساب کاربری</h1>
        <div className="flex gap-100 mt-8" >
          <div className="flex gap-10 mr-5">
          <p className="text-sm font-normal">شماره موبایل</p>
          <h2>09224521125</h2>
          </div>
          <div className="flex gap-10">
            <p className="text-sm font-normal">ایمیل</p>
            <p>-</p>
            <div className="flex gap-1">
              <HiMiniPencilSquare className="text-[#009ECA]" />
              <button className="text-sm text-[#009ECA]">افزودن</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[872px] h-[171px] bg-[#FFFFFF] border rounded-lg border-[#00000040] mt-5">
        <div className="flex gap-150">
            <h2 className="mt-3 mr-3">اطلاعات شخصی</h2>
            <div className="flex mt-3 gap-1">
               <HiMiniPencilSquare className="text-[#009ECA] mt-" />
               <button className="text-[#009ECA] text-sm">ویرایش اطلاعات</button>
            </div>
        </div>
        <div className="flex gap-100 mt-7">
          <div className="flex gap-5 mr-3">
            <h3 className=" text-sm font-normal">نام و نام خانوادگی</h3>
            <p>مانیا رحیمی</p>
          </div>
          <div className="flex gap-8 ">
             <h3 className=" text-sm font-normal">کدملی</h3>
             <p>3721156232</p>
          </div>
        </div>
        <div className="flex gap-107 mt-7">
          <div className="flex mr-3 gap-23">
            <h4 className="text-sm font-normal">جنسیت</h4>
            <p>زن</p>
          </div>
          <div className="flex gap-6">
           <h4 className="text-sm font-normal">تاریخ تولد</h4>
           <p>1383/10/17</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[872px] h-[171px] bg-[#FFFFFF] border rounded-lg border-[#00000040] mt-5">
        <div className="flex gap-142">
            <h2 className="mt-3 mr-3">اطلاعات حساب بانکی</h2>
            <div className="flex mt-3 gap-1">
               <HiMiniPencilSquare className="text-[#009ECA] mt-" />
               <button className="text-[#009ECA] text-sm">ویرایش اطلاعات</button>
            </div>
        </div>
        <div className="flex gap-100 mt-7">
          <div className="flex gap-20 mr-3">
            <h3 className=" text-sm font-normal">شماره شبا</h3>
            <p>-</p>
          </div>
          <div className="flex gap-8 ">
             <h3 className=" text-sm font-normal">شماره کارت</h3>
             <p>6037991752468520</p>
          </div>
        </div>
        <div className="flex gap-107 mt-7">
          <div className="flex mr-3 gap-16">
            <h4 className="text-sm font-normal">شماره حساب</h4>
            <p>-</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProfilePage