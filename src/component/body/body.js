import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';



export default function BasicTextFields() {
  
  const [value, setValue] = useState("");
  const [listEdit, setListEdit] = useState([]);
  const [dupList, setDupList] = useState([]);

  function handleDelete(item) {
    const newList =  myList.filter(value => value !== item);
  //  const newerList = dupList.filter(value => value !== item);
    setMyList(newList);
//    setDupList(newerList);
  }

  function handleEdit(item) {
   setListEdit(item)
  }
  
  function handleUpdate(item){
    const dateTime = new Date();
    const cleanTime = "Time Added: " + dateTime.getMonth() + "/" + dateTime.getDate() + "/" + dateTime.getFullYear() + "-" + 
    dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()+ ":"+ dateTime.getMilliseconds();
    const changedList = myList

    let i = myList.indexOf(item)
    let inputItem = (document.getElementById('update_input').value + " " + cleanTime)

    changedList.splice(i, 1, inputItem);
    setMyList(changedList);
    setListEdit([]);   
  }

  const handleSubmit = (i) => { 
   i.preventDefault()
   const dateTime = new Date();
   
   const cleanTime = "Time Added: " + dateTime.getMonth() + "/" + dateTime.getDate() + "/" + dateTime.getFullYear() + "-" + 
        dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()+ ":"+ dateTime.getMilliseconds();
   if(value){ 
        setMyList(myList.concat([value+ " " + cleanTime]));   
        setDupList(dupList.concat([value])); 
        for(let j = 0; j < dupList.length; j++){
            if(dupList[j] === value){
              alert("one or more of your todos are the same!");
              handleDelete(j);
            } 
            
        }
    } 
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
  
  const[myList, setMyList] = useState([]); 
  const listItems = myList.map((item)=> //using map function to print the list
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
      rowsMax={2}/>
      
      
      <Button
        type="submit"
        variant="outlined"
        size = "large"
        >Add Item</Button>

      <div >{listItems} 
      </div>  
      
    </form>
  );
}

