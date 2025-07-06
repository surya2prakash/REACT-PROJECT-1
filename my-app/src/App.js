
import './App.css';

import Card from './Component/Card';

import Items from './Component/Items';

import ItemPrice from './Component/ItemPrice';




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
    }
  ]


  return (
    <div className="App">
          <Card>
              <Items itemName={response[0].itemName}></Items>
              <ItemPrice itemPrice={response[0].itemPrice}></ItemPrice>
              <Items itemName={response[1].itemName}></Items>
              <ItemPrice itemPrice={response[1].itemPrice}></ItemPrice>
              <Items itemName={response[2].itemName}></Items>
              <ItemPrice itemPrice={response[2].itemPrice}></ItemPrice>
              <Items itemName={response[3].itemName}></Items>
              <ItemPrice itemPrice={response[3].itemPrice}></ItemPrice>
              <Items itemName={response[4].itemName}></Items>
              <ItemPrice itemPrice={response[4].itemPrice}></ItemPrice>
              <Items itemName={response[5].itemName}></Items>
              <ItemPrice itemPrice={response[5].itemPrice}></ItemPrice>
          </Card>
    </div>
  );
}

export default App;
