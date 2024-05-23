import { RES_CDN } from "../utilits/constants";

const ResrarentMenuCard = ({ imageId, name, price, description }) => {
  // console.log(props)
  return (
    <div className="res-menu_card">
      <div className="res-menu_info">
        <h2>{name}</h2>
        <h3>{price / 100}</h3>

        <p>{description }<br/></p>
      </div>
      <div className="res-img-info">
        <img src={RES_CDN + imageId} />
        <button>add</button>
      </div>
    </div>
  );
};
export default ResrarentMenuCard;
