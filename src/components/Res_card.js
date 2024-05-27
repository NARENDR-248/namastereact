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
    <div className="res-card bg-white shadow-xl rounded-lg p-3 mt-20 mx-10 flex flex-col items-center space-y-6 w-64 h-92">
      <img
        className="res-logo w-full h-40 object-cover rounded-t-lg"
        src={RES_CDN + cloudinaryImageId}
        alt="Restaurant logo"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500 text-center break-words w-full px-2">{cuisines.join(", ")}</p>
      <p className="text-gray-500">{area}</p>
      <p className="text-gray-700">{lastMileTravelString}</p>
      <p className="text-gray-700">{costForTwoString}</p>
      <h4 className="text-yellow-500 font-bold">{avgRating} stars</h4>
    </div>
  );
};

export default Res_card;
