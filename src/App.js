
import './App.css';
import TodoList from './component/TodoList';
import Todo from './component/Todo';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';



function App() {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
  })

  return (
    <div className="todo-app">
      <TodoList /> 
       
    </div>
  );
}




export default App;
