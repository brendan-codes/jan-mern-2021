import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import e from 'cors';

const Todo = ({id, updateAPI}) => {

    const [todo, setTodo] = useState({
        completed: false,
        createdAt: Date.now(),
        desc: "",
        title: "",
        updatedAt: Date.now()
    });

    const checkBoxHandler = (completed, id) => {
        const changedTodo = {...todo};
        changedTodo.completed = completed;
        setTodo(changedTodo);

        updateAPI({completed: completed}, id);
    }


    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8888/todos/${id}`)
            .then(res => {
                // console.log(res);
                setTodo(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])


    return (
        <div>
            <p>{todo.title}</p>
            <p>{todo.desc}</p>
            <p>{todo.createdAt}</p>
            <p>{todo._id}</p>
            <p><input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={e => checkBoxHandler(e.target.checked, todo._id)}>
                </input></p>
            <p><Link to={`/edit/${todo._id}`}>edit</Link></p>
            <p><Link to={"/"}>back</Link></p>
        </div>
    )
}

export default Todo