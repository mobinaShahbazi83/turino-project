import { useQuery } from "@tanstack/react-query";
import api from "src/configs/api";


const useGetUserInfo = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user"];
  return useQuery({
    queryFn, queryKey 
   })

};


 const useGetTours = () => {
  const queryFn = () => api.get("/tour");
  const queryKey = ["tours"];
  return useQuery({
    queryFn, queryKey 
   })
 }
 const  searchTurs = query => api.get(`/products/?query=${query}`)
 

 const useGetTransactions = () => {
   const queryFn = () => api.get("/user/transactions");
    const queryKey = ["transactions"];
     return useQuery({
    queryFn, queryKey 
   })
 }
export {useGetUserInfo, searchTurs, useGetTours, useGetTransactions}