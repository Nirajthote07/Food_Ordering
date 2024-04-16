import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import MenuCard from './MenuCard';


const categories = [
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "fried rice",
    "pasta",
    "seafood"
]

const foodTypes = [
    {label:"All", value:"all"},
    {label:"Vegetarian Only", value:"vegetarian"},
    {label:"Non-Vegetarina", value:"non_vegetarian"},
    {label:"Seasonal", value:"seasonal"}
]

const menu = [1,1,1,1,1,1]

const RestaurantDetails = () => {   


    const [foodType,setFoodType] =useState("all");

    const handleFilter = (e) =>{
        console.log( e.target.value, e.target.name);
    }



  return (
    <div className='px-5 lg:px-20'>

        <section>
            <h3 className='py-2 text-gray-500 mt-10'>Home/India/Indian Fast Food/3</h3>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} >

                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg' alt='' />

                    </Grid>
                    <Grid item xs={12} lg={6}>

                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg' alt='' />

                    </Grid>
                    <Grid item xs={12} lg={6}>

                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2020/06/30/15/03/table-5356682_1280.jpg' alt='' />

                    </Grid>

                </Grid>
            </div>

            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus natus sint laborum quos maiores, ab quo harum eligendi saepe molestiae cupiditate amet adipisci, cum provident rerum? Debitis repudiandae libero asperiores!
                </p>
               
               <div className='space-y-3 mt-3'>
                         <p className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span>
                                Mumbai,Maharastra .
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <TodayIcon />
                            <span>
                            Mon-Sun : 9:00 AM - 9:00 PM (Today)
                            </span>
                        </p>
               </div>

            </div>

        </section>

        <Divider />

        <section className='pt-[2rem] lg:flex relative'>

            <div className='space-y-10 lg:w-[20%] filter'>
                
                <div className='box space-y-5 lg:sticky top-28'>
                   
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType} >
                                {foodTypes.map(foodType =>
                                <FormControlLabel
                                key={foodType.value} 
                                value={foodType.value} 
                                control={<Radio />} 
                                label={foodType.label} />)}   
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <Divider />

                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Categories
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType} >
                                {categories.map(foodCategory =>
                                <FormControlLabel
                                key={foodCategory} 
                                value={foodCategory} 
                                control={<Radio />} 
                                label={foodCategory} />)}   
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>


            </div>

            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map(item => <MenuCard />)}
            </div>

        </section>
        
    </div>
  )
}

export default RestaurantDetails