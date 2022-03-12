import { useState } from 'react';

export default function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  };
  
  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder='Write your to do...'>
        </input>
        <button>Add To Do</button>
      </form>
      <hr/>
      {toDos.map((item, index)=> (
        <li key={index}>{item}</li>))}
    </div>
  ); 
}