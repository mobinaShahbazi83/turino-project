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


export {useGetUserInfo, searchTurs, useGetTours}