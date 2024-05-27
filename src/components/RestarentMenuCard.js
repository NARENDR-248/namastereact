import { RES_CDN } from "../utilits/constants";

const ResrarentMenuCard = ({ imageId, name, price, description }) => {
  // console.log(props)
  return (
    <div className='bg-slate-50 flex justify-between shadow-xl m-20 w-full'>
      <div className="res-menu_info">
        <h2  className="text-gray-500">{name}</h2>
        <h3  className="text-gray-500">{price / 100}</h3>

        <p  className="text-gray-50">{description }<br/></p>
      </div>
      <div className="flex flex-col ">
        <img className="w-full h-40 object-cover rounded-t-lg" src={RES_CDN + imageId} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">add</button>
      </div>
    </div>
  );
};
export default ResrarentMenuCard;
