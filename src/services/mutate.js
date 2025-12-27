import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "src/configs/api";


const useProfileUpdate = () => {
    const queryClient = useQueryClient();
     const mutationFn = (data) => api.put("/user/profile", data);
      return useMutation({ mutationFn,
        onSuccess: (response) => {
                console.log(response)
                queryClient.invalidateQueries(['user']);
               
            },
             onError: (error) => {
                console.log(error)
             }
      });
}



export {useProfileUpdate}