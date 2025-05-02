import Greeting from '../Greeting/Greeting.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import OrderStatus from '../OrderStatus/OrderStatus.jsx';
import './App.css';

function App() {
 
  const shoppingItems = ['Хлеб', 'Молоко', 'Яйца'];
  const orders = [
    { orderId: 101, status: 'в пути' },
    { orderId: 102, status: 'доставлен' },
    { orderId: 103, status: 'обработан' }
  ];

  return (
    <div className="app-container">
      <Greeting name="Лена" />
      <ShoppingList items={shoppingItems} />
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;