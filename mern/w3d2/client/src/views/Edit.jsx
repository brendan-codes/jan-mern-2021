import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Edit = ({id, updateAPI}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8888/todos/${id}`)
            .then(res => {
                // console.log(res);
                setTitle(res.data.title);
                setDesc(res.data.desc);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const formHandler = (e) => {
        e.preventDefault();

        const updatedTodo = {
            title: title,
            desc: desc
        }

        updateAPI(updatedTodo, id);
        navigate("/");
    }

    return (
        <div>This is Edit!
            <form onSubmit={formHandler}>
                <p>Title!</p>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <p>Desc!</p>
                <input
                    type="text"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                />
                <p></p>
                <input type="submit" value="edit todo!"></input>
            </form>
            <Link to={`/show/${id}`}>back</Link>
        </div>
    )
}

export default Edit