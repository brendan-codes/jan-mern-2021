import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const List = ({todos}) => {


    return (
        <div>
        <Link to={"/new"}>Create todo</Link>
        {
            todos.map((todo, idx) =>
                <section key={idx}>
                    <ul>
                        <li>todo: <Link to={`/show/${todo._id}`}>{todo.title}</Link></li>
                        <li>desc: {todo.desc}</li>
                        <li>status: <input type="checkbox" value={todo.completed}></input></li>
                    </ul>
                </section>
            )
        }
        </div>
    )
}

export default List