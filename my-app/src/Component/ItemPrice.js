import './ItemPrice.css'

function ItemPrice(props){
  return(
      <div>
        <p>
          {props.itemPrice}
        </p>
        {props.children}
      </div>
  )
};

export default ItemPrice;