import Items from "./Items"
import ItemPrice from "./ItemPrice"

function SingleCard (props){
    return(
      <div>
             <Items  itemName={props.itemName}></Items>
                  <ItemPrice  itemPrice={props.itemPrice}></ItemPrice>
          </div>
                  )}


export  default SingleCard;