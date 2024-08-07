import React from 'react';
import { RES_CDN } from '../utilits/constants';
import { useDispatch } from 'react-redux';
import { addItem } from './store/CartSlice';

import { useNavigate } from 'react-router-dom';

const Items = ({ items }) => {
  const dispatch = useDispatch();
  

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <button onClick={() => handleAddItem(item)} className="p-2 ml-6 mt-[70px] rounded-lg bg-black text-white shadow-lg hover:bg-white hover:text-black transition-all duration-[.3s]">
              Add +
            </button>
            <img
              src={RES_CDN + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
