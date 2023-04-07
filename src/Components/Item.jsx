import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlice';
import {AiFillStar} from 'react-icons/ai'

const Item = ({details}) => {

  const {id, title, price, description, image, rating} = details;

  const Cart = useSelector((state) => {
    // console.log(state.Cart);
    return state.Cart;
  });

  const dispatch = useDispatch();
  

  function removeItem(){
    dispatch(remove(details));
  }

  function addItem(){
    dispatch(add(details));
  }

  return (
    <div className='flex flex-col items-center justify-center border-2 shadow-sm  gap-y-4 px-4 rounded-xl bg-white text-slate-700
                    hover:shadow-2xl hover:shadow-slate-500 hover:drop-shadow-2xl hover:scale-110 transition-all duration-500 '>

        <div className='px-9 flex flex-col items-center justify-center gap-y-4 my-2 relative'>
            <p className='w-full text-center font-semibold text-lg'>
                {title.substring(0,14)+'...'}
            </p>

            <p className='w-full text-[10px] text-slate-400'>
                {description.split(' ').slice(0,10).join(' ')+'...'}
            </p>

            <img src={image} alt='product' className=' h-44'/>

            <span className='flex items-center absolute bottom-0 right-0 text-yellow-500'>
                {rating.rate}
                <AiFillStar/>
            </span>
        </div>

        <div className='flex justify-between items-center w-full my-2'>
            <p className='text-green-600 font-semibold'>
                ${price}
            </p>

            {
                Cart.some((item) => (item.id===id)) ?
                (
                    <button onClick={removeItem} className='border-2 border-slate-700 rounded-full uppercase
                                                        text-xs font-semibold px-3 py-[5px] hover:bg-slate-700
                                                        hover:text-white transition-all duration-300 '>
                        Remove Item
                    </button>
                )
                :
                (
                    <button onClick={addItem} className='border-2 border-slate-700 rounded-full uppercase
                                                        text-xs font-semibold px-3 py-[5px] hover:bg-slate-700
                                                        hover:text-white transition-all duration-300 '>
                        Add to cart
                    </button>
                )
            }
        </div>
    </div>
  )
}

export default Item