import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';



export default function BasicTextFields() {
  
  const [index, setIndex] = useState();
  const [value, setValue] = useState("");
  function handleDelete(item) {
    const newList =  myList.filter(value => value !== item);
    console.log(newList); 
    setMyList(newList);
  }
  const [listEdit, setListEdit] = useState([]);
  const [valueEdit, setValueEdit] = useState([]);

  function handleEdit(item) {
    //console.log(item.key)
    
    //console.log(getIndex(item))
   // valueEdit[index] = 
    setListEdit(item)
  }
  function handleUpdate(item){
    const dateTime = new Date()
    const cleanTime = "Time Added: " + dateTime.getMonth() + "/" + dateTime.getDate() + "/" + dateTime.getFullYear() + "-" + 
        dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()+ ":"+ dateTime.getMilliseconds();
      let i = myList.indexOf(item)
      let inputItem = (document.getElementById('update_input').value + cleanTime)
      console.log(inputItem)
      const changedList = myList
      changedList.splice(i, 1, inputItem);
      console.log(changedList);
      setMyList(changedList);
      setListEdit([])
      
  }

  function getIndex(item){
      return myList.findIndex(x => x.value === item.value);
  }
  const handleSubmit = (i) => { 
   i.preventDefault()
   for(let i = 0; i < myList.length; i++){
    if(myList[i].value == value){
    alert("one or more of your todos are the same!")
    handleDelete(i)
    }
  }
   const dateTime = new Date();
   // 06/17/21-15:32:45:779 
   const cleanTime = "Time Added: " + dateTime.getMonth() + "/" + dateTime.getDate() + "/" + dateTime.getFullYear() + "-" + 
        dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()+ ":"+ dateTime.getMilliseconds();
   //if(value){ //I think this is where you can validate duplicate entries 
     //   console.log(myList)
        setMyList(myList.concat([value+ " " + cleanTime]));    
    //} 

  }


  // checkbox functionaity
  const [checked, setChecked] = React.useState([1]);
  const handleToggle = (value) => () => {
  const currentIndex = checked.indexOf(value);
  const newChecked = [...checked];
  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  setChecked(newChecked);
  }
  
  const[myList, setMyList] = useState([]); //trying out the map function
  const listItems = myList.map((item)=> 
  <div>
    <Checkbox 
      edge="start"
      onChange={handleToggle(item)}
      checked={checked.indexOf(item) !== -1}
      inputProps={{ 'aria-labelledby': myList.id }} 
    /> {listEdit === item ? ( <input type="text" id = "update_input"/> ):(<div>{item}</div>)}
    {/*{" "+item} */}
  <br/><button type="button" onClick={function(){handleDelete(item)}}>Delete</button><button type ="button" onClick={function(){handleEdit(item)}}>Edit</button><button type = "button" onClick={function(){handleUpdate(item)}}>Update</button>
  </div>
  );

  return (
    
    <form  noValidate autoComplete="off" onSubmit={handleSubmit}>
     <TextField 
      value = {value}
      id="outlined-basic"
      label="Add To-do Item"
      variant="outlined"
      onChange={(i) => setValue(i.target.value)}
      multiline
      rowsMax={2}
      data-testid="new-item-input"/>
      
      
      <Button
        type="submit"
        variant="outlined"
        size = "large"
        data-testid="new-item-button"
        >Add Item</Button>

      <div >{listItems} 
      </div>  
      
    </form>
  );
}

