"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { useProfileUpdate } from "src/services/mutate";
import { useGetUserInfo } from "src/services/queries";

function ProfilePage() {
  const { mutate } = useProfileUpdate();
  const [useraccount, setUserAccount] = useState(false);
  const [personalinfo, setPersonalInfo] = useState(false);
  const [bankaccount, setBankAccount] = useState(false);

  const { data } = useGetUserInfo();
  console.log(data);
  const profile = data?.data;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailHandler = (data) => {
   
    mutate(data, {
      onSuccess: (data) => {
        setUserAccount(false);
         console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

 

  const personalHandler = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        setPersonalInfo(false);
        // refetch();
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
     const bankaccountHandler = (data) => {
      console.log(data)
     mutate({payment:data}, {
      onSuccess: (data) => {
        setBankAccount(false);
        // refetch();
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
     }

      useEffect(() => {
    if (profile) {
      reset({
        firstname: profile.firstname || "",
        lastname: profile.lastname || "",
        national_code: profile.nationalcode || "",
        birthdate: profile.birthdate || "",
        gender: profile.gender || "",
    
           shaba_code: profile.payment.shaba_code ||"",
           debitCard_code: profile.payment.debitCard_code || "",
           accountIdentifier: profile.payment.accountIdentifier ||"",
      });
    }
  }, [profile, reset]);

  

  return (
    <div>
      <div className="w-[872px] h-[115px] bg-[#FFFFFF] border rounded-xl border-[#00000040] ">
        <div>
          <div>
            <h1 className="mt-2 mr-3 text-base">اطلاعات حساب کاربری</h1>
            <div className="grid grid-cols-2  mt-8">
              <div className="flex gap-5 mr-5">
                <p className="text-sm font-normal">شماره موبایل</p>
                <span>{profile?.mobile}</span>
              </div>
              <div className="flex gap-3 ">
                <form
                  className={useraccount ? "block" : "hidden"}
                  onSubmit={handleSubmit(emailHandler)}
                >
                  <input
                    placeholder="آدرس ایمیل"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[200px] h-[40px] border border-[#009ECA] rounded-xl text-sm p-1 ml-2 "
                    {...register("email")}
                  />
                  <button
                    type="submit"
                    className="w-[100px] h-[38px] border rounded-xl text-sm font-normal border-[#28A745] bg-[#28A745] text-[#FFFFFF] ml-2"
                  >
                    {" "}
                    تایید
                  </button>
                  <button
                    onClick={() => setUserAccount(false)}
                    className="w-[100px] h-[38px] border rounded-xl text-sm font-normal pt-1 border-[#28A745] bg-[#FFFFFF] text-[#28A745] "
                  >
                    انصراف
                  </button>
                </form>
                <div className={useraccount ? "hidden" : "flex gap-3"}>
                  <p className={"text-sm font-normal"}>ایمیل</p>
                  <span className={useraccount ? "hidden" : "block"}>
                    {profile?.email}
                  </span>
                  <button
                    className="text-sm text-[#009ECA] flex gap-1"
                    onClick={() => setUserAccount(true)}
                  >
                    <HiMiniPencilSquare className="text-[#009ECA]" />
                    افزودن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[872px] h-[171px] bg-[#FFFFFF] border rounded-xl border-[#00000040] mt-5">
        <div className={personalinfo ? "block" : "hidden"}>
          <h2 className="mt-3 mr-3">اطلاعات شخصی</h2>
          <div className="flex gap-10 mt-6 mr-5">
            <form onSubmit={handleSubmit(personalHandler)}>
              <input
                placeholder="نام "
                Value={profile?.firstname}
                className="w-[200px] h-[40px] border border-[#009ECA] rounded-xl text-sm p-1 ml-2 appearance-none outline-none hover:border-[#009ECA]"
                {...register("firstname")}
              />
              <input
                placeholder="نام خانوادگی "
                Value={profile?.lastname}
                className="w-[200px] h-[40px] border border-[#009ECA] rounded-xl text-sm p-1 ml-2 appearance-none outline-none hover:border-[#009ECA]"
                {...register("lastname")}
              />
              <input
                placeholder="کدملی"
                Value={profile?.nationalcode}
                className="w-[200px] h-[40px] border border-[#009ECA] rounded-xl text-sm p-1 ml-2 appearance-none outline-none hover:border-[#009ECA]"
                {...register("national_code")}
              />
              <input
                placeholder="تاریخ تولد"
                Value={profile?.birthdate}
                className="w-[200px] h-[40px] border border-[#009ECA] rounded-xl text-sm p-1 appearance-none outline-none hover:border-[#009ECA] "
                type="date"
                {...register("birthdate")}
              />
              <div className="flex">
                <div className="flex gap-5 mt-5">
                  <button
                    type="submit"
                    className="w-[144px] h-[38px] border rounded-xl text-sm font-normal border-[#28A745] bg-[#28A745] text-[#FFFFFF]"
                  >
                    تایید
                  </button>
                  <button
                    type="button"
                    onClick={() => setPersonalInfo(false)}
                    className="w-[144px] h-[38px] border rounded-xl text-sm font-normal pt-1 border-[#28A745] bg-[#FFFFFF] text-[#28A745] "
                  >
                    انصراف
                  </button>
                </div>
                <div className="flex gap-58">
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
            </form>
          </div>
        </div>
        <div>
        <div className={personalinfo ? "hidden" : "block"}>
          <div className="flex gap-150">
            <h2 className="mt-3 mr-3">اطلاعات شخصی</h2>
            <div className="flex mt-3 gap-1">
              <HiMiniPencilSquare className="text-[#009ECA] mt-" />
              <button
                className="text-[#009ECA] text-sm"
                onClick={() => setPersonalInfo(true)}
              >
                ویرایش اطلاعات
              </button>
            </div>
          </div>
          <div className="flex gap-100 mt-7">
            <div className="flex gap-5 mr-3">
              <h3 className=" text-sm font-normal">نام و نام خانوادگی</h3>
              <span>
                {profile?.firstname}
                {profile?.lastname}
              </span>
            </div>
            <div className="flex gap-8 ">
              <h3 className=" text-sm font-normal">کدملی</h3>
              <span>{profile?.nationalcode}</span>
            </div>
          </div>
          <div className="flex gap-107 mt-7">
            <div className="flex mr-3 gap-23">
              <h4 className="text-sm font-normal">جنسیت</h4>
               <span>
                        {profile?.gender === "male"
                          ? "مرد"
                          : profile?.gender === "female"
                          ? "زن"
                          : "_"}
                      </span>
            </div>
            <div className="flex gap-6">
              <h4 className="text-sm font-normal">تاریخ تولد</h4>
              <span>{profile?.birthdate}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
        <div className="w-[872px] h-[171px] bg-[#FFFFFF] border rounded-xl border-[#00000040] mt-5">
          <div className={bankaccount ? "block" : "hidden"}>
            <h2 className="mt-3 mr-3">اطلاعات حساب بانکی</h2>
            <div className="flex gap-10 mt-6 mr-5">
              <form onSubmit={handleSubmit(bankaccountHandler)}>
                <input
                placeholder="شماره شبا"
                 defaultValue={profile?.payment?.shaba_code}
                className="w-[230px] h-[40px] border border-[#009ECA] rounded-xl text-sm p-1 mr-10 appearance-none outline-none hover:border-[#009ECA]"
                 {...register("shaba_code")}
              />
              <input
                placeholder="شماره کارت"
                 defaultValue={profile?.payment?.debitcard_code}
                className="w-[230px] h-[40px] border border-[#009ECA] rounded-xl text-sm p-1 mr-10 appearance-none outline-none hover:border-[#009ECA]"
                {...register("debitcard_code")}
              />
              <input
                placeholder="شناسه حساب"
                 defaultValue={profile?.payment?.accountIdentifier}
                className="w-[230px] h-[40px] border border-[#009ECA] rounded-xl text-sm p-1 mr-10 appearance-none outline-none hover:border-[#009ECA]"
                {...register("accountIdentifier")}
              />
              <button  type="submit" className="w-[144px] h-[38px] border rounded-xl text-sm mr-10 mt-4 font-normal border-[#28A745] bg-[#28A745] text-[#FFFFFF]">
                تایید
              </button>
              <button
                type="button"
                onClick={() => setBankAccount(false)}
                className="w-[144px] h-[38px] border rounded-xl text-sm font-normal pt-1 mr-5 border-[#28A745] bg-[#FFFFFF] text-[#28A745] ">
                انصراف
              </button>
              </form>
            </div>
            </div>
            <div className={` ${bankaccount ? "hidden" : "block"}`}>
            <div className="flex ">
              <h2 className="mt-3 mr-3">اطلاعات حساب بانکی</h2>
              <div className="flex mt-3 gap-1">
                <HiMiniPencilSquare className="text-[#009ECA] mt-" />
                <button
                  type="button"
                  className="text-[#009ECA] text-sm"
                  onClick={() => setBankAccount(true)}
                >
                  ویرایش اطلاعات
                </button>
              </div>
            </div>
            <div className="flex gap-50 mt-7">
              <div className="flex gap-20 mr-3">
                <h3 className="text-sm font-normal">شماره شبا</h3>
                <p>
                  {profile?.payment?.shaba_code
                    ? profile?.payment?.shaba_code
                    : "_"}
                </p>
              </div>

              <div className="flex gap-8 ">
                <h3 className=" text-sm font-normal">شماره کارت</h3>
                <p>
                  {profile?.payment?.debitcard_code
                    ? profile?.payment?.debitcard_code
                    : "_"}
                </p>
              </div>
            </div>
            <div className="flex gap-107 mt-7">
              <div className="flex mr-3 gap-16">
                <h4 className="text-sm font-normal">شماره حساب</h4>
                <p>
                  {profile?.payment?.accountIdentifier
                    ? profile?.payment?.accountIdentifier
                    : "_"}
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>
  );
}

export default ProfilePage;
