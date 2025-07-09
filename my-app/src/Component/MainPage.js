import AddItems from "./AddItems";

import './MainPage.css'

function Main(props){

    function saveProduct(newProduct){
        props.sendProduct(newProduct)
        console.log("Main me hun:",newProduct);
    }
    return(
      <div>
         <AddItems onSaveProduct={saveProduct}></AddItems>
      </div>
    )
};

export default Main;