import logo from './logo.svg';
import './App.css';
import react, {useState} from 'react';
import NewTodo from './components/NewTodo';
import TodosList from './components/TodosList';

function App() {

  const [todos, setTodos] = useState([
    {
      body: "Create todo list",
      completed: false
    },
    {
      body: "Laundry",
      completed: true
    },
    {
      body: "Buy more garlic",
      completed: false
    },
  ])


  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const updateTodo = (idx) => {
    const copyTodos = [...todos];
    copyTodos[idx].completed = !copyTodos[idx].completed;
    setTodos(copyTodos);
  }

  const deleteTodo = (deletedIdx) => {
    // const copyTodos = todos.filter((todo, idx) => {
    //   if(idx !== deletedIdx){
    //     return true;
    //   }
    //   return false;
    // });

    // setTodos(copyTodos);
    setTodos(todos.filter((todo, i) => i !== deletedIdx ? true : false));
  }


  return (
    <div className="App">
      <h1>App</h1>
      <NewTodo createTodo={createTodo}/>
      <TodosList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
