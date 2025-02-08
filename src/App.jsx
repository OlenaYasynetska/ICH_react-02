import Greeting from './components/Greeting/Greeting';
import OrderStatus from './components/OrderStatus/OrderStatus';
import ShoppingList from './components/ShoppingList/ShoppingList';


function App() {
  return (
  <div className="App">
    <Greeting />
    <OrderStatus />
    <ShoppingList />
  </div>
  );
}

export default App