import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>External Users:</h3>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  const userStyle = {
    color: "lightcoral",
    border: "1px solid lightcoral",
    borderRadius: "10px",
    backgroundColor: "lightblue",
    margin: "10px",
    padding: "10px",
  };
  return (
    <div style={userStyle}>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
    </div>
  );
}

// counter that can handle increase and decrease
/* 
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
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
*/

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
