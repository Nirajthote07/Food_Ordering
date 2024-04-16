import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
             sx={{height:345}} 
             image='https://cdn.pixabay.com/photo/2023/04/11/10/44/chai-7916889_1280.jpg'/>

             <CardContent>
                <Typography variant='h5' >
                    Indian Fast Food
                </Typography>
                <Typography variant='body2' >
                    50% off on your first order
                </Typography>

                <div className='py-2 space-y-2 '>
                    <p>{"Nagpur"}</p>
                    <p className='text-sm text-blue-500'>February 14,2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>February 28,2024 12:00 AM</p>

                </div>
             </CardContent>

            { true &&
                 <CardActions>
                 <IconButton>
                     <DeleteIcon />
                 </IconButton>
              </CardActions>
            }
        </Card>
    </div>
  )
}

export default EventCard