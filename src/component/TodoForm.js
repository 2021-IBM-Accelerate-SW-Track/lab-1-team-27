import React, {useState} from 'react'; 

function TodoForm(props) {
    const[input, setInput] = useState('');

    const change = e => {
        setInput(e.target.value);//set input to what is entered
    };

    const submit = e => {
      e.preventDefault();

     props.onSubmit({
        
     id: Math.floor(Math.random() * 10000),//creates an id for each entry by creating a random number, but with a lower chance of there being similar ids

     text:input,
     
     value: input,

     

     })

     setInput('');
    };

  return (
    
      <form className="todo-form" onSubmit={submit}>


  
   <input type="text" placeholder='Add a todo item' value={input} name='text' className='todo-input' onChange={change} />
  <button className="todo-btn">Add to list</button>
  
</form>
    
  )
}

export default TodoForm