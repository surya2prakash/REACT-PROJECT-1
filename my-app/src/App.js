
import './App.css';

import Card from './Component/Card';



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


  return (
    <div className="App">
      
         <Card   response={response}>  </Card>
             
    </div>
  );
}

export default App;

