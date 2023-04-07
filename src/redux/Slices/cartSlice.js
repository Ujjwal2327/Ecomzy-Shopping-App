import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const CartSlice = createSlice({
    name : 'Cart',
    initialState : [],
    reducers : {
        add : (state,item) => {
            // console.log('hello')
            // console.log('state', state);
            // console.log('id',id);
            state.push(item.payload);
            toast.success('item added to cart!')
        },
        remove : (state, item) => {
            // console.log('hii')
            // console.log('state', state);
            // console.log('id',id);
            toast.error('item removed from cart!');
            return state.filter((element) => (element.id !== item.payload.id))
        }
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;