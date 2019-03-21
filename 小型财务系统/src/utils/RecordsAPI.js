import axios from "axios/index";


const api=process.env.REACT_APP_RECORDS_API_URL ||"https://5b384a14e1f26d0014569e9b.mockapi.io";
export const getALL=()=>
    axios(`${api}/api/v1/records`);
export  const  create=(body)=>
    axios.post(`${api}/api/v1/records`,body);
export const update=(id,body)=>
    axios.put(`${api}/api/v1/records/${id}`,body);
export const remove=(id)=>
    axios.delete(`${api}/api/v1/records/${id}`);