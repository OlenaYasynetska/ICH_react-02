import React from "react";
import styles from "./ShoppingList.module.css";

function ShoppingList({ items }) {
    return (
        <div>
            {items.length > 0 ? (
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>Список покупок пуст</p>
            )}
        </div>
    );
}

export default ShoppingList;