import SingleCard from "./SingleCard"

import "./Card.css"


function Card (props){
    return (
        <div className="mainCard">
              {/* <SingleCard  itemName={props.response[0].itemName} itemPrice={props.response[0].itemPrice}> </SingleCard>
              <SingleCard  itemName={props.response[1].itemName} itemPrice={props.response[1].itemPrice}> </SingleCard>
              <SingleCard  itemName={props.response[2].itemName} itemPrice={props.response[2].itemPrice}> </SingleCard>
               <SingleCard  itemName={props.response[3].itemName} itemPrice={props.response[3].itemPrice}> </SingleCard>
              <SingleCard  itemName={props.response[4].itemName} itemPrice={props.response[4].itemPrice}> </SingleCard>
             <SingleCard  itemName={props.response[5].itemName} itemPrice={props.response[5].itemPrice}> </SingleCard> */}
             {
                props.response.map((item,i)=>(
                   <SingleCard key={i} itemName={item.itemName} itemPrice={item.itemPrice}></SingleCard>
                ))
             }
        
        </div>
    )
};

export default Card;