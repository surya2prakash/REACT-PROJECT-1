

function Items(props){
    let itemName =props.itemName
   return (

    
    <div>
        <p className="item">{itemName}</p>
        {props.children}
    </div>
   )
};

export default Items;