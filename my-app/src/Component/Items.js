

function Items (props){
    return(
        <div>
                <p>{props.itemName}</p>
                {props.children}
        </div>
    )
}

export default  Items;