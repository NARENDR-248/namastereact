import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilits/constants";
import Smmer from "./Smmer";

const RestaurentMenu = () => {
  const [resinfo, setResinfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    getresdata();
  }, []);
  const getresdata = async () => {
    console.log(resId)
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    const resmenu =
    json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards
    console.log(json);
    setResinfo(resmenu);
  };
  if(resinfo===null){
    return(<Smmer />)
  }
  return (
    <div>
      <ul>
        {resinfo.map((res) => {
          return <li>{res.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default RestaurentMenu;
