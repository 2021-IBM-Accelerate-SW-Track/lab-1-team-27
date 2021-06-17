import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  
}));

export default function BasicTextFields() {
  
  const[myList, setMyList] = useState(['apple', 'banana']); //trying out the map function
  const listItems = myList.map((item)=> 
  <li>{item} <button type="button" onClick={function(){handleDelete(item)}}>Delete</button></li>
  );

  const divStyle = {color: 'blue', font: 'Courier New'};  
  const classes = useStyles();
  const [value, setValue] = useState("");

  function handleDelete(item) {
    const newList =  myList.filter(value => value!= item);
    console.log(newList); 
    setMyList(newList);
  }

  const handleSubmit = (i) => { 
   i.preventDefault()
   if(value){ //I think this is where you can validate duplicate entries 
        console.log(myList)
        setMyList(myList.concat([value]));
    }
   
   
 }
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
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

      <div style = {divStyle}>{listItems}</div>  
    </form>
  );
}