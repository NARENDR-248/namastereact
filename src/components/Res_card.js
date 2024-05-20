import { RES_CDN } from "../utilits/constants";

const Res_card = (props) => {
  const {resdata}=props;
  console.log(resdata)
  const{
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }=resdata.data;



  
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RES_CDN + cloudinaryImageId}
        alt="logo-csard"
      />
      <h3>{name}</h3>
      {console.log(name)}
      <h3>cost:300Rs</h3>
      <h4>{avgRating}stars</h4>
    </div>
  );
};
export default Res_card;
