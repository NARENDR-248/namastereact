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

  return (
    <div className='flex justify-center items-center'>
      <ul>
        {resinfo.map((res) => {
          return (
            <ResrarentMenuCard key={res.card.info.id} {...res.card.info} />
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurentMenu;
