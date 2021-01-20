import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const List = ({todos, updateAPI}) => {

    const checkBoxHandler = (completed, id) => {
        // const status = !completed;
        updateAPI({completed: completed}, id);
    }

    return (
        <div>
        <Link to={"/new"}>Create todo</Link>
        {
            todos.map((todo, idx) =>
                <section key={idx}>
                    <ul>
                        <li>todo: <Link to={`/show/${todo._id}`}>{todo.title}</Link></li>
                        <li>desc: {todo.desc}</li>
                        <li>id: {todo._id}</li>
                        <li>status: <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={e => checkBoxHandler(e.target.checked, todo._id)}>
                        </input></li>
                    </ul>
                </section>
            )
        }
        </div>
    )
}

export default List