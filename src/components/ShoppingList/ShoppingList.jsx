function ShoppingList({ items = [] } = {}){
    if (items.length === 0) {
      return <p>Список покупок пуст</p>;
    }
  
    return (
      <ul>
        {items.map((item, text) => (
          <li key={text}>{item}</li>
        ))}
      </ul>
    );
  }
  
  export default ShoppingList;
