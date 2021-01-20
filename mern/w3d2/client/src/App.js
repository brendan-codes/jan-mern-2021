import { Router } from '@reach/router';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { set } from 'mongoose';
import List from './views/List';
import Create from './views/Create';
import Edit from './views/Edit';
import Todo from './views/Todo';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8888/todos")
      .then(res => {
        console.log(res);
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <Router>
        <List path="/" todos={todos}/>
        <Create path="/new" addTodo={addTodo} />
        <Edit path="/edit/:id"/>
        <Todo path="/show/:id"/>
      </Router>
    </div>
  );
}

export default App;
