

function ItemPrice(props){
   let itemPrice =props.itemPrice
    return (
      <div>
           <p className="price">{itemPrice}</p>
           {props.children}
      </div>
    )
};

export default ItemPrice;