import React from 'react'
import { useState } from 'react';
import Card from './Card';
  export  const AddItems = () => {
    
    const [model,setModel] = useState("");
    const [price,setPrice] =useState("");

    const [submittedItem, setSubmittedItem] = useState(null);

    function changeModelHandler(event){
        setModel(event.target.value);
    };
     function changePriceHandler(event){
      setPrice(event.target.value);
       
    }

function submitHandler(event) {
    event.preventDefault();

    
    setSubmittedItem({
      itemName: model,
      itemPrice: price
    });

   
    setModel("");
    setPrice("");
  }

  return (
    <div>
        <form onSubmit={submitHandler} >
            <label>Enter Mobile Brand With Model:</label>
        <input type='text' placeholder='Enter Model Name'onChange={changeModelHandler}
              value={model}></input>
        <label>Enter Price:</label>
        <input type='text' placeholder='enter price of model' onChange={changePriceHandler}
         value={price}></input>
        <button type='submit'> Submit</button>
        </form>
        {submittedItem && (
        <Card
          itemName={submittedItem.itemName}
          itemPrice={submittedItem.itemPrice}
        />
      )}
    </div>
  )
}

 