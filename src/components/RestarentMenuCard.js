import { RES_CDN } from "../utilits/constants";
import Items from "./items";
import { useContext } from "react";
import ThemeContext from "../utilits/ThemeContext";

const ResrarentMenuCard = ({ data ,showItems, setShowIndex}) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  
  
  const handleClick = () => {
    setShowIndex();
  };
  console.log(data)
  
  return (
    <div >
      <div className={isDarkTheme?"w-6/12 mx-auto my-4 bg-black text-white shadow-lg p-4":"w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"} onClick={handleClick}>
        <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>

        </div>
       
        {    showItems &&<Items items={data.itemCards} /> }
    
      </div>

    </div>
  );
};
export default ResrarentMenuCard;
