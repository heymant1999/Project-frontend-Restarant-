import { useState,useEffect } from "react";
import { FETCH_RUL } from "../Constant";

const useRestaurant=(resId)=>{
    const [restaurant,setrestaurent]=useState({});
    
useEffect(()=>{
      getRestaurentInfo();
    },[])
    async function getRestaurentInfo(){
      const data =  await fetch(FETCH_RUL+resId);
      const json = await data.json();
     
      setrestaurent(json.data);
    }
    return restaurant
}
export default useRestaurant;