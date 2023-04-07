import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../Components/Spinner";
import Item from "../Components/Item";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchData(){
    setLoading(true);
    
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data);
      setItems(data);
    }
    catch(error){
      console.log('Error aa gya');
      setItems([]);
    }
    
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex items-center justify-center">
      {
        loading ? 
        (<Spinner/>)
        :
        (
          <div className="  grid xl:grid-cols-4 w-11/12 xl:max-w-[1111px] gap-x-4 gap-y-14 my-12
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[800px] sm:max-w-[600px] max-w-[300px]">
            {
              items.length===0 ?
              ('No Data Found')
              :
              (
                items.map((item)=>(
                  <Item key={item.id} details={item}/>
                ))
              )
            }
          </div>
        )
      }
    </div>
  );
};

export default Home;
