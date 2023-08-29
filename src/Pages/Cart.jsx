import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from '../Components/CartItem'

const Cart = () => {

  const Cart = useSelector((state) => {
    // console.log(state.Cart);
    return state.Cart;
  });

  const navigate = useNavigate();

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    let amount = 0;
    Cart.forEach(item => {
      // console.log(item)
      amount += parseFloat(item.price)
    });
    setTotalAmount(amount);
    // console.log('Cart',Cart)
    // eslint-disable-next-line
  },[Cart])

  return (
  
    <div className="flex items-center justify-center min-h-[80vh] w-11/12 max-w-[1200px] mx-auto py-6">
      {
        Cart.length===0 ?
        (
          <div className="flex flex-col items-center justify-center gap-y-7">
            <p className="font-semibold text-xl">
              Your cart is empty!
            </p>

            <button onClick={()=>{navigate('/')}}
                    className="px-10 py-3 bg-green-600 text-white uppercase font-semibold rounded-md text-[17px] border-green-600 border-2
                    hover:bg-white hover:text-green-600 ">
              Shop Now
            </button>
          </div>
        )
        :
        (
          <div className="flex gap-10 xl:flex-row    flex-col  ">
            {/* cart item list */}
            <div className=" xl:w-[60%] flex flex-col gap-8    w-full max-w-[900px] mx-auto">
              {
                Cart.map((item) => (
                  <CartItem key={item.id} details={item} />
                ))
              }
            </div>

            {/* cart summary and checout */}
            <div className="xl:w-[40%] flex flex-col justify-between py-16 pb-14 px-2    w-full max-w-[900px] mx-auto">
              {/* cart summary */}
              <div className="flex flex-col sm:gap-5">
                <div className="flex flex-col my-2 sm:gap-4 ">
                  <p className="sm:text-xl text-green-800 font-semibold uppercase    ">
                    Your Cart
                  </p>
                  <p className="sm:text-[50px] text-green-700 font-semibold uppercase sm:-mt-3    text-3xl">
                    Summary
                  </p>
                </div>

                <p className="font-semibold sm:text-xl text-slate-700">
                  Total Items: {Cart.length}
                </p>
              </div>
              
              {/* checkout */}
              <div className="flex flex-col gap-5">
                <p className="font-semibold sm:text-xl text-slate-700">
                  Total Amount: <span className="font-bold"> ${totalAmount} </span>
                </p>

                <button className="w-full sm:py-3 bg-green-700 text-white uppercase font-bold rounded-md text-[17px]
                                   border-green-700 border-2 hover:bg-white hover:text-green-700 
                                    py-1">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div>

  );
};

export default Cart;
