import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';

const styleProductCard = {
 "list-style": "none",
 "flex": "0 0 30.333333%",
 "margin-bottom": "5px"
};

const ProductCard =({id, name, src, tagline, abv, description, food_pairing, addToCart}) => {
  const [open, setOpen] = React.useState(false);
   
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
   
  };

  const [expandedDescription, setExpandedDescription] = useState(false);
  const handleDescriptionExpandClick = () => {
    setExpandedDescription(!expandedDescription);
  };

  const [expandedFood, setExpandedFood] = useState(false);
  const handleFoodExpandClick = () => {
    setExpandedFood(!expandedFood);
  };

  const handleAddToCart = (id) => {
    addToCart(id);
    setOpen(false);
  };

  return(
    <div style={styleProductCard}>
      <div style={{textAlign: 'center', border: 'solid 1px grey', borderRadius: '15%'}}>
        <img alt='' src={src} style={{height: 80}} onClick={handleClickOpen} />
        <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
          <div style={{height: '200px', width: '300px', padding: '15px'}}>
          <strong>{name}</strong> <br/>
          <div>{tagline}</div>
            <div>Price: £{abv}</div>

          <div onClick={handleDescriptionExpandClick}>expand/collapse [description]</div>
          <Collapse in={expandedDescription}>
            {description}
          </Collapse>

          <div onClick={handleFoodExpandClick}>expand/collapse [food]</div>
          <Collapse in={expandedFood}>
            {food_pairing.map((item, index) => (
                <div>{item}</div>
            ))}
          </Collapse>
          <br/>
          <br/>
          <div onClick={() => handleAddToCart(id)}>Add to Cart</div>
        </div>
       </Dialog>
      </div>
      <div style={{textAlign: 'center'}}>
        <div>{name}</div>
      </div>
    </div>
  )
};

  export default ProductCard;
  