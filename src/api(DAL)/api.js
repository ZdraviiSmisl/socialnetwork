import * as axios from "axios";
export const getUsers=(currentPage=1,pageSize=40)=>{
  return      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`,
         {
             withCredentials: true,
             /*  headers: {"API-KEY": "94e4d73c-3c12-433f-9191-6d1113ffafc1"}*/
         }).then(response=>response.data)
 }
