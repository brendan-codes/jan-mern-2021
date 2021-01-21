import { Router } from '@reach/router';
import { useState, useEffect} from 'react';
import axios from 'axios';
import List from './views/List';
import Create from './views/Create';
import Edit from './views/Edit';
import Todo from './views/Todo';

function App() {

  // state variables
  const [todos, setTodos] = useState([]);

  // useEffect to run on load
  useEffect(() => {
    axios.get("http://localhost:8888/todos")
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  // local data handlers
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

  const deleteTodo = (id) => {
    const changedTodos = todos.filter((todo) => {
      if(todo._id === id){
        return false;
      }
      return true;
    })

    setTodos(changedTodos);
  }

  // API handlers
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

  const deleteAPI = (id) => {
    axios.delete(`http://localhost:8888/todos/${id}`)
      .then(res => {
        console.log(res);
        deleteTodo(id);
      })
      .catch(err => {
        console.log(err);
      })
  }


  // router
  return (
    <div>
      <Router>
        <List path="/"
          todos={todos}
          updateAPI={updateAPI}
          deleteAPI={deleteAPI}
        />
        <Create path="/new" addTodo={addTodo} />
        <Edit path="/edit/:id" updateAPI={updateAPI}/>
        <Todo path="/show/:id" updateAPI={updateAPI}/>
      </Router>
    </div>
  );
}

export default App;
