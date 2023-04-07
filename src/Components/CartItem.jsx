import {MdDelete} from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { remove } from '../redux/Slices/cartSlice';

const CartItem = ({details}) => {

  const {title, description, price, image, id} = details;

  const Cart = useSelector((state) => {
    // console.log(state.Cart);
    return state.Cart;
  });

  const dispatch = useDispatch();
  
  const removeItemHandler = () => {
    dispatch(remove(details));
  }


  return (
    <div className={`flex justify-between items-center md:gap-14 md:px-9 md:py-6  border-black text-slate-600
                    ${ (id!==Cart[Cart.length-1].id) && ' border-b-2'}
                    gap-6 px-3 py-2 `}>
      <img src={image} alt='product' className="md:w-[165px] sm:w-[100px] w-[60px] transition-all duration-500"/>

      <div className="flex flex-col md:gap-5 w-full">
        <p className="font-semibold sm:text-xl">
          {title}
        </p>

        <p className=' md:text-base sm:text-[13px] text-[10px] '>
          {description.split(' ').slice(0,15).join(' ')+'...'}
        </p>

        <div className='flex justify-between items-center'>
          <p className='text-green-600 font-bold sm:text-lg    text-base'>
            ${price}
          </p>

          <button onClick={removeItemHandler}
                  className=' bg-neutral-300 flex items-center justify-center sm:p-3 rounded-full mr-2
                                p-1'>
            <MdDelete/>
          </button>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
