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
  const classes = useStyles();
  const [value, setValue] = useState("");
  const handleSubmit = (i) => { 
   i.preventDefault()
   let count = 0;
   if(value != ""){ //I think this is where you can validate duplicate entries 
     console.log(value)
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
    </form>
  );
}