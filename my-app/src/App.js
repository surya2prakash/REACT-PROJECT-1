
import { useState } from 'react';
import './App.css';

import Card from './Component/Card';
import Main from './Component/MainPage';



function App() {

  

  let response =[
    {
      itemName:"Samsang S25 Ultra",
      itemPrice:"96,999"
    },
    {
      itemName:"Apple 16 Pro MAX",
      itemPrice:"149,999"
    },
    {
      itemName:" Samsung S25+ ",
      itemPrice:" 79,999 "
    },
    {
      itemName:" Apple 16 Pro ",
      itemPrice:" 79,999 "
    },
    {
      itemName:" Samsang S25",
      itemPrice :"49,999"
    },
    {
      itemName:" Apple 16",
      itemPrice:"49,999"
    },

 
  ]
const [item ,setItem] = useState(response);
  function  printProduct(data){
      setItem((response)=>[...response,data])
       
       console.log(response);
  }
  
  return (
    <div className="App">
        <Main sendProduct={printProduct}></Main>
         <Card   response={item}>  </Card>
             
    </div>
  );
}

export default App;

