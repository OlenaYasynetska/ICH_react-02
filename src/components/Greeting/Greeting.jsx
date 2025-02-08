import React from "react";
import styles from "./components/Greeting";

function Greeting({ name }) {
    return <h1 className={styles.greeting}>Привет, {name}!</h1>;
}

export default Greeting;