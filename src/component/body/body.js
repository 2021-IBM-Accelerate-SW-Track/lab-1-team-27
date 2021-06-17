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

  const[myList, setMyList] = useState([]); //trying out the map function
  let setS = useState([]);
  const listItems = myList.map((item)=> 
  <li>{item} <button type="button" onClick={handleDelete(item)}>Delete Item</button></li>
  );
  function handleDelete(item) {
    console.log("abc");
    //const newList =  myList.filter(val => val !== item);
   // setMyList(newList) 
  }

  const divStyle = {color: 'blue', font: 'Courier New', textalign: 'left'};  
  const classes = useStyles();
  const [value, setValue] = useState("");


  const handleSubmit = (i) => { 
   i.preventDefault()
   if(value){ //I think this is where you can validate duplicate entries 
        let x = []
        x.push.apply(x, myList)
        setMyList(x);
        console.log("123");
        console.log(myList)
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