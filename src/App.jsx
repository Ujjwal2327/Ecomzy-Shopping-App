import Navbar from './Components/Navbar'
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
};

export default App;
