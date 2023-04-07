import logo from '../logo.png'
import shortLogo from '../short logo.png'
import {NavLink} from 'react-router-dom';
import {BsFillCartFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';

const Navbar = () => {

  const Cart = useSelector((state) => 
    (state.Cart)
  )

  return (
    <div className=" bg-slate-900 py-3 text-white">
      <div className="flex justify-between items-center w-11/12 max-w-[1111px] mx-auto">
        <NavLink to='/'>
          <img src={logo} alt='logo' className=' h-14 hidden sm:block'/>
          <img src={shortLogo} alt='logo' className=' h-14 block sm:hidden'/>
        </NavLink>
        
        <div className='flex gap-6'>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/cart' className='relative'>
            <BsFillCartFill fontSize={'1.5rem'}/>
            <p className={`bg-green-600 px-[3px] py-[1px] flex justify-center items-center rounded-md text-xs font-bold
                            absolute -top-2 left-4 min-w-[20px] animate-bounce
                            ${Cart.length===0 && ' hidden'} `}>
              <span>
                {Cart.length}
              </span>
            </p>
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
