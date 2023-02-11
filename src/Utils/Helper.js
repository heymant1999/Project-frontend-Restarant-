 export function filterData(searchinpuTxt,restaurants){
    const filterData= restaurants.filter((restaurant)=>
         restaurant?.data?.name?.toLowerCase()?.includes(searchinpuTxt.toLowerCase()))
         return filterData;
   }