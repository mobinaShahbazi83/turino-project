"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoPerson } from "react-icons/io5";
import { useCreateOrder } from "src/services/mutate";
import { useGetBasket } from "src/services/queries";

function BasketPage() {
       
    const {data} = useGetBasket()
    console.log(data)
    const basket = data?.data;
     const {mutate} = useCreateOrder()
     const router = useRouter()

   
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();

       const submitHandler = (data) => {
       mutate(data, {
      onSuccess: (data) => {
         router.push("/profile/tours");
          toast.success("تور شما با موفقیت رزرو شد.");
         console.log(data);
      },
      onError: (error) => {
         toast.error("مشکلی پیش آمده است!");
        console.log(error);
      },
    });
  };

  return (
    <div  className="lg:bg-[#F3F3F3]  h-auto py-20">
      <form onSubmit={handleSubmit(submitHandler)}>
         <div className="flex gap-25">
         <div className="w-[850px] h-[200px] bg-[#FFFFFF] border border-[#00000033] rounded-lg mr-25" >
            <div>
                <div className="flex mt-3 mr-4 gap-2">
                    <IoPerson />
                     <h1 className=" text-xl">مشخصات مسافر</h1>
                </div>
                <div className="flex gap-10 mt-6 mr-5">
                    <input placeholder="نام و نام خانوادگی" className="w-[230px] h-[40px] border border-[#00000033] rounded-lg text-sm p-1"  {...register("fullName")}/>
                    <input placeholder="کدملی" className="w-[230px] h-[40px] border border-[#00000033] rounded-lg text-sm p-1"  {...register("nationalCode")}/>
                    <input placeholder="تاریخ تولد" className="w-[230px] h-[40px] border border-[#00000033] rounded-lg text-sm p-1  " type="date"  {...register("birthDate")}/>
                </div>
               <div>
                 <div>
                   <select
                      placeholder="جنسیت"
                      className="w-[200px] h-[40px] border border-[#009ECA] rounded-xl mt-5 mr-5 text-sm p-1 appearance-none outline-none hover:border-[#009ECA]"
                      {...register("gender")}>
                      <option className="text-sm text-[#00000033]">
                        جنسیت
                      </option>
                      <option value="male">مرد</option>
                      <option value="female">زن</option>
                    </select>
                </div>
               </div>
            </div>
        </div>

        <div className="w-[290px] h-[200px]  bg-[#FFFFFF] border border-[#00000033] rounded-lg px-1">
            <div className="flex mt-5 gap-20  border-b border-[#00000033]  pb-5 ">
                <span className="font-normal text-x mr-3">{basket?.title}</span>
                <p className="text-sm">5 روز و 4 شب</p>
            </div>
            <div className="flex mt-6 gap-25">
                <p className="text-sm mr-3">قیمت نهایی</p>
               <div className="flex gap-1">
                 <span className="text-[#009ECA] font-normal">{basket?.price}</span>
              <p  className="text-sm text-[#7D7D7D] font-extralight">تومان</p>
               </div>
            </div>
            <button  className="w-[265px] h-[40px] border border-[#28A745] rounded-lg bg-[#28A745] mr-2 mt-5 text-[#FFFFFF] text-lg" type="submit">ثبت و خرید نهایی</button>
        </div>
       </div>
      </form>
    </div>
  )
}

export default BasketPage