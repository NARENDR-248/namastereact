import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilits/constants";
import Smmer from "./Smmer";
import ResrarentMenuCard from "./RestarentMenuCard";
import useRestarentApiCall from "./COSTAMHOOKS/useRestarentApiCall";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestarentApiCall(resId);
  
  const [showIndex, setShowIndex] = useState(null);

  if (resinfo === null) {
    return <Smmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;

    const categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
    console.log(categories)
  



  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        // Controlled Component
        <ResrarentMenuCard

        
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
         
        />
      ))}
    

    </div>
  );
};
export default RestaurentMenu;
