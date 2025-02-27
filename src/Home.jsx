import React from 'react'
import Page from './Component/Home/Page'
import Collection from './Component/Home/Collection'
import { useLocation } from 'react-router-dom';
import SliderFrame from './Component/Home/SliderFrame';
import Carousle from './Component/Home/Carousle';
import ProductService from './Component/Home/ProductService';


const useScrollToTop = () => {
  const location = useLocation();
  React.useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);
};


const Home = () => {
  useScrollToTop();
  
  return (
 <>
    <Page />
    <Collection />
    <SliderFrame />
  <Carousle />
  <ProductService />
 </>
  )
}

export default Home