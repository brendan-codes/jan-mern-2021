import React, {useEffect} from 'react';


const ShowOneAuthor = (props) => {

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <div>
            <h3>Hello I am ShowOneAuthor</h3>
        </div>
    )
}

export default ShowOneAuthor;