import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilits/constants";
import Smmer from "./Smmer";
import ResrarentMenuCard from "./RestarentMenuCard";
import useRestarentApiCall from "./COSTAMHOOKS/useRestarentApiCall";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestarentApiCall(resId);

  if (resinfo === null) {
    return <Smmer />;
  }
  console.log(resinfo);
  const centegery = Array.isArray(resinfo)
    ? resinfo.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    : [];

  console.log(centegery);

  // console.log(centegery);
  return (
    <div className="flex justify-center items-center">
      {
        centegery.map((res)=>{
          <ResrarentMenuCard title={res.card.title} />
        })
      }
      
    </div>
  );
};
export default RestaurentMenu;
