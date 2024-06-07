import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Items from './items';
import { clearItem } from './store/CartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.itemes);
  const dispatch=useDispatch()
  const clearCart=()=>{
    dispatch(clearItem())
  }
   
  return (
    <div className='text-center font-bold'>
      
      cart
      <div className='w-6/12 m-auto'>
        <button className='bg-blue-700 m-4 p-4 rounded-md shadow-xl text-white' onClick={()=>clearCart()}>clearCart</button>
        <Items items={cartItems}/>
      </div>
     

      
    </div>
  )
}

export default Cart
