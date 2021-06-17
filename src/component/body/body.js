import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  
}));

export default function BasicTextFields() {
  
  const divStyle = {color: 'blue', font: 'Courier New'};  
  const classes = useStyles();
  const [value, setValue] = useState("");
  function handleDelete(item) {
    const newList =  myList.filter(value => value != item);
    console.log(newList); 
    setMyList(newList);
  }
  const handleSubmit = (i) => { 
   i.preventDefault()
   const dateTime = new Date();
   // 06/17/21-15:32:45:779 
   const cleanTime = "Time Added: " + dateTime.getMonth() + "/" + dateTime.getDate() + "/" + dateTime.getFullYear() + "-" + 
        dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()+ ":"+ dateTime.getMilliseconds();
   if(value){ //I think this is where you can validate duplicate entries 
        console.log(myList)
       
        setMyList(myList.concat([value+ " " + cleanTime]));    
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

  const[myList, setMyList] = useState([]); //trying out the map function
  const listItems = myList.map((item)=> 
  <div>
  <Checkbox 
      edge="start"
      onChange={handleToggle(item)}
      checked={checked.indexOf(item) !== -1}
      inputProps={{ 'aria-labelledby': myList.id }}
      
  />{" "+item} 
  <br/><button type="button" onClick={function(){handleDelete(item)}}>Delete</button>
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

