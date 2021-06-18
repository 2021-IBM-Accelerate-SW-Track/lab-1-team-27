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

export default function BasicTextFields(props) {
  
  const[myList, setMyList] = useState([]); //trying out the map function
  const listItems = myList.map((item)=> 
  <li key={item.toString()}>{item}</li>
  );

  const divStyle = {color: 'blue', font: 'Courier New'};  
  const classes = useStyles();
  const [value, setValue] = useState([]);

 

  


  const handleSubmit = (i) =>  {
   i.preventDefault()
    
   const uid = function(){
    return  Math.floor(Math.random() * 10000)
}

   if(listItems ){ //I think this is where you can validate duplicate entries 
        console.log(myList, uid(listItems))
        
       
        setMyList(myList.concat([value]));
   }

 
   function checkIfDuplicateExists(w){
    return new Set(w).size !== w.length 
}

console.log(
  checkIfDuplicateExists(myList)
// true
);

if(checkIfDuplicateExists(myList)){
  alert("Two or more of your todos are the same!");
}
    

   //let SearchForDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
   //console.log(SearchForDuplicates(myList));
   //console.log([...new Set(SearchForDuplicates(myList))]); // Unique duplicates

 

   
        
          
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
  )
  }

