
import './Items.css'
function Items (props){
    return(
        <div className="items">
                <p>{props.itemName}</p>
                {props.children}
        </div>
    )
}

export default  Items;