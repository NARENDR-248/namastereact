import React, { useEffect, useState } from "react";
import { MENU_API } from "../../utilits/constants";

const useRestarentApiCall = (resId) => {
  const [resinfo, setResinfo] = useState(null);
  useEffect(() => {
    feachdata();
  }, []);
  const feachdata = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const resmenu =
    json.data


    
    

    setResinfo(resmenu)
    console.log(resmenu)
    
  };

  return resinfo;
};

export default useRestarentApiCall;