import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  const takeInput = i => {
    console.log('Input:' + i.target.value);
    setValue(i.target.value);
  }
 
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField value = {value} id="outlined-basic" label="Add To-do Item" variant="outlined" onChange={takeInput} multiline rowsMax={4}/>
    </form>
  );
}