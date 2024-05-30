import { RES_CDN } from "../utilits/constants";
import Items from "./items";

const ResrarentMenuCard = ({ data ,showItems, setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
  };
  console.log(data)
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4" onClick={handleClick}>
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
