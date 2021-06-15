//import Header from "./component/header"
import './App.css';

var lists = [];

function addToList (props)
{
  lists.push(props.item);
}

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <button>Add Item</button>
      <input></input>
      <ul>
        <li>First Item</li>
      </ul>
    </div>
  );
}

export default App;