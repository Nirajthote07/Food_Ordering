import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const MenuCard = () => {


    const handelCheckBoxChange = () => {
        console.log("value")
    };

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
              src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg"
              alt=""
              className="w-[7rem] h-[7rem] object-cover"
            />
          </div>

          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-xl">Burger</p>
            <p> ₹499</p>
            <p className="text-gray-400">Nice Food</p>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {
                ingredients.map((item) => 
                <div>
                    <p>{item.category}</p>
                    <FormGroup>
                        {item.ingredient.map((item) => <FormControlLabel control={<Checkbox onChange={()=>handelCheckBoxChange(item)} />} label={item}/>)}
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
