import React, { useEffect,useState } from 'react'
import { MENU_API } from '../../utilits/constants';

const useRestarentApiCall = (resId) => {
const [resinfo, setResinfo] = useState(null);
useEffect(()=>{
    feachdata()
},[])
const feachdata=async()=>{
    const data=await fetch(MENU_API + resId);
    const json = await data.json();
    const resmenu =
    json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards
    setResinfo(resmenu)

}

  return resinfo;
}

export default useRestarentApiCall