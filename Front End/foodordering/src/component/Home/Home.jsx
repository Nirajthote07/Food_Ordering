import React, { useEffect } from 'react';
import './Home.css';
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurantsAction } from '../State/Restaurant/Action';

const restaurants = [1,1,1,1,1,1,1,1,1]

const Home = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const {restaurant} = useSelector(store =>store)
    
    console.log("restaurant",restaurant);

    useEffect(()=>{
        dispatch(getAllRestaurantsAction(jwt))
    
    },[])


    
   
  return (
    <div className='pb-10'>

        <section className='banner -z-50 relative flex flex-col items-center justify-center'>

            <div className='w-[50vw] z-10 text-center'>

                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Sky Food</p>
                <p className='z-10 text-xl lg:text-4xl text-gray-300'>Taste The Convenience : Food, Fast and Delivered. </p>

            </div>

            <div className='cover absolute top-0 left-0 right-0'>

            </div>

            <div className='fadout'>

            </div>

        </section>

        <section className='p-10 lg:py-10 lg:px-20'>

            <p className='text-2xl font-semibold text-gray-400 py-4 pb-10'>Top Meels</p>

            <MultiItemCarousel /> 

        </section>

        <section className='px-5 lg:px-20 pt-10'>

            <h1 className='text-2xl font-semibold text-gray-400 pb-5 '>Order From Our Handpicked Favorites</h1>

            <div className='flex flex-wrap items-center justify-around gap-5'>
                {
                    restaurant.restaurants.map((item) => <RestaurantCard item={item} />)
                }


            </div>

        </section>

    </div>
  )
}

export default Home