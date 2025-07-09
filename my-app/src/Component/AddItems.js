import { useState } from "react";

import "./Additem.css"

function AddItems(props){

    //useState --->

    const[newItem,setNewItem]= useState("");
    const[newItemPrice,setNewPrice] = useState("");

    function itemNameHandler(event)
    {
       setNewItem(event.target.value);
    };

    function itemPriceHandler(event)
   {
       setNewPrice(event.target.value);
    };

    function submitHandler(event){
        event.preventDefault();

        const newProduct ={
            itemName:newItem,
            itemPrice:newItemPrice
        }
           console.log(newProduct);
          props.onSaveProduct(newProduct);

        setNewItem('');
        setNewPrice('');
    }
    return(
      <div>
            <form onSubmit={submitHandler}>
                <label>Item Name:</label>
                <input type="text" placeholder="enter Item Name" onChange={itemNameHandler} value={newItem}></input>
                <label>Item Price</label>
                <input type="text" placeholder="enter Item Price" onChange={itemPriceHandler} value={newItemPrice}></input>
                <button type="submit">Submit</button>
            </form>
      </div>
    )
};

export default AddItems;