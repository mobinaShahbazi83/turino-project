"use client"
import React from 'react'
import { useGetTransactions } from 'src/services/queries'

function TransactionsPage() {

   const {data} = useGetTransactions()
   console.log(data);
    
   const transactions = data?.data;

  return (
   <div className="w-[872px] h-[245px] border border-[#00000033] bg-[#FFFFFF] rounded-lg">
    <table className="w-full ">
      <thead className="bg-[#F3F3F3] h-14 rounded-t-lg ">
        <tr>
          <th  className="font-light ">تاریخ و ساعت</th>
          <th  className="font-light ">مبلغ (تومان)</th>
          <th  className="font-light ">نوع تراکنش</th>
          <th  className="font-light ">شماره سفارش</th>
        </tr>
      </thead>
      <tbody className="text-center h-auto">
       {transactions?.length ? (
        transactions?.map((transaction) => (
         <tr className="h-14" key={transaction.id}>
        <td className="font-extralight text-sm">1402/10/12 - 14:24</td>
        <td className="font-extralight text-sm">12,000,000</td>
        <td className="font-extralight text-sm">ثبت نام در تور گردشگری</td>
        <td className="font-extralight text-sm">سفارش 12054902</td>
      </tr>
        ))
        
       ) : (
<tr>
        <td className="text-center h-28" colSpan="5"> هیچ تراکنشی وجود ندارد</td>
       </tr>
       )}
      </tbody>
    </table>
    </div>
  )
}

 

export default TransactionsPage