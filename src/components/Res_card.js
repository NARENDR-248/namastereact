import { RES_CDN } from "../utilits/constants";

const Res_card = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  



  
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RES_CDN + cloudinaryImageId}
        alt="logo-csard"
      />
      <h3>{name}</h3>
      
      <h3>cost:300Rs</h3>
      <h4>{avgRating}stars</h4>
    </div>
  );
};
export default Res_card;
