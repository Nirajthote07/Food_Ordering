import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { categorizeIngredients } from "../util/categrizeIngredients";

const ingredients = [
  {
    category: "Nuts & Seeds",
    ingredient: ["Cashews"],
  },
  {
    category: "Protein",
    ingredient: ["Chicken", "Bacon strips"],
  }
];

const MenuCard = ({item}) => {


    const handelCheckBoxChange = () => {
        console.log("value")
    };

    const handleAddItemToCart =()=>{
      const reqData = {
        token:localStorage.getItem("jwt"),
        cartItem:{
          menuItemId:item.id,
          quantity:1
        }

      }
    }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between gap-5">
          <div className="lg:flex items-center lg:gap-5">
            <img
              src={item.images[0]}
              alt=""
              className="w-[7rem] h-[7rem] object-cover"
            />
          </div>

          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-xl">{item.name}</p>
            <p> ₹{item.price}</p>
            <p className="text-gray-400">{item.description}</p>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {
                Object.keys(categorizeIngredients(item.ingredients)).map((category) => 
                <div>
                    <p>{category}</p>
                    <FormGroup>
                        {categorizeIngredients(item.ingredients)[category].map((item) => <FormControlLabel key={item.name}  control={<Checkbox onChange={()=>handelCheckBoxChange(item)} />} label={item.name}/>)}
                    </FormGroup>
                </div>
          
                 )
            }
          </div>

          <div className="pt-5">
            <Button type="submit" variant="contained" disabled={false}>
                {true ? "Add to Cart":"Out of stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
