//import Header from "./component/header"
import './App.css';
//import { Button } from '@material-ui/core';
/*
function App() {
  return (
    <div className="App">
    <Header/>
    <Button color="primary">New Task</Button>
    
    </div>
    
  );
}
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function list() {
  /*
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    */
    var f = parseInt(document.getElementsByName('input1')[0].value);
    document.getElementsByName('display')[0].value= f;
    var TaskList=new Array();
    var match = 0;
      for (var i; i <TaskList.length; i++){
        Tasklist[i] != f;
        match = 1;
      }
      if (match != 1) {
        TaskList.push(f);
        match = 0;
      }
      
    setChecked(newChecked);
  }


  return (
    
    <List dense className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <button onClick="list()">Add Task to List</button>
            <ListItemText id={labelId} primary={`${value + 1}`+TaskList[value]} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
