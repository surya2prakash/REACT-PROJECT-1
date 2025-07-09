import Items from "./Items"
import ItemPrice from "./ItemPrice"
import './SingleCard.css'

function SingleCard (props){
    return(
      <div className="singleCard">
             <Items  itemName={props.itemName}></Items>
                  <ItemPrice  itemPrice={props.itemPrice}></ItemPrice>
          </div>
                  )}


export  default SingleCard;