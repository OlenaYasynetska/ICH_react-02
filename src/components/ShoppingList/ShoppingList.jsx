function ShoppingList({ items = [] }) {
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

// const ShoppingList({ items = [] }) => {
//   const elements = items.map(text => <li key={text}>{text}</li>);

//   if (items.length === 0) {
//     return <p>Список покупок пуст</p>;
//   }

//   return (
//     <ul>
//       {elements}
//     </ul>
//   );
// }

// export default ShoppingList;