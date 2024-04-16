import { Button } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>

            <img className='h-16 w-16' src="https://cdn.pixabay.com/photo/2015/08/11/10/34/camel-meat-883772_1280.jpg" alt="" />
            <div>
                <p>Biryani</p>
                <p>₹399</p>
            </div>

        </div>
        <div>
            <Button  className='cursor-not-allowed'>completed</Button>
        </div>

    </div>
  )
}

export default OrderCard