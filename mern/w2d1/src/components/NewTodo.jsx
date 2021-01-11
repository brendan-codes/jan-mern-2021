import React, {useState} from 'react';

const NewTodo = ({createTodo}) => {

    const [todoText, setTodoText] = useState("");
    const submitTodo = (event) => {
        event.preventDefault();

        createTodo({
            'body': todoText,
            'completed': false
        });

        setTodoText("");
    }

    return (
        <div>
            {todoText}
            <form onSubmit={submitTodo}>
                Todo? <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)}/>
                <input type="submit" value="Create a new todo!"/>
            </form>
        </div>
    )
}

export default NewTodo;