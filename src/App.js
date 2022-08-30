import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    /* const newCount = count + 1; */
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count === 0) {
      return 0;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;

/* 
{products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
*/

/* 
 const products = [
    { name: "i-Phone 13 pro", price: 1200 },
    { name: "i-Phone 12 pro", price: 1100 },
    { name: "i-Phone 11 pro", price: 1000 },
    { name: "i-Phone 10s ", price: 900 },
  ];
*/

/* <div className="product">
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div> */
