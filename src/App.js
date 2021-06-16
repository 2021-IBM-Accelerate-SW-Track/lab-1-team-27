//import Header from "./component/header"
import React from 'react';
import './App.css';

const lists = [];

class ToDoList extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e)
  {
    this.setState({value: e.target.value});
  }

  handleSubmit(e)
  {
    lists.push(this.state.value);
    console.log(lists);
    e.preventDefault();
    printItems();
  }



  render()
  {
    //const listItems = lists.map((item)=> <li key={item}>{item}</li>);
    //console.log(listItems);

    return(
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add Item" />
        </form>
       <ul>{printItems()}</ul>

      </div>
    );
  }

}

function printItems()
{
  const listItems = lists.map((item)=> <li key={item}>{item}</li>);
  //console.log(listItems);
  return(<ul>{listItems}</ul>);
}

function App() {
  //const arrayItems = ["Hello",2,3];
  //const listItems0 = arrayItems.map((item)=> <li key={item}>{item}</li>);
  //const listItems1 = lists.map((item)=> <li key={item}>{item}</li>);
  //console.log(listItems);
  //console.log(listItems1);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList />
    </div>
  );
}


export default App;