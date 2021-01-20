import { Router } from '@reach/router';
import { useState, useEffect} from 'react';
import axios from 'axios';
import List from './views/List';
import Create from './views/Create';
import Edit from './views/Edit';
import Todo from './views/Todo';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8888/todos")
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const updateTodo = (changedTodo, id) => {
    setTodos(todos.map(todo => {
      if(todo._id === id){
        return changedTodo;
      }
      return todo;
    }));
  }

  const updateAPI = (data, id) => {
    axios.put(`http://localhost:8888/todos/${id}`, data)
      .then(res => {
        console.log(res);
        updateTodo(res.data, id);
      })
      .catch(err => {
        console.log(err);
      })
  }



  return (
    <div>
      <Router>
        <List path="/" todos={todos} updateAPI={updateAPI}/>
        <Create path="/new" addTodo={addTodo} />
        <Edit path="/edit/:id"/>
        <Todo path="/show/:id"/>
      </Router>
    </div>
  );
}

export default App;
