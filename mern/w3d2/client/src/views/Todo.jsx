import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Todo = ({id}) => {

    const [todo, setTodo] = useState({
        completed: false,
        createdAt: Date.now(),
        desc: "",
        title: "",
        updatedAt: Date.now()
    });

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
            <p><input type="checkbox" value={todo.completed}></input></p>
            <p><Link to={"/"}>back</Link></p>
        </div>
    )
}

export default Todo