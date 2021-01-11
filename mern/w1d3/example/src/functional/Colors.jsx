import React, {useState} from 'react';

const Colors = (props) => {

    const [colors, setColors] = useState([{color: "red"}, {color: "green"}, {color: "blue"}]);
                                   //  ["", function(i){}]
    const [inputColor, setInputColor] = useState("");

    const [err, setErr] = useState("");

    const inputColorHandler = (e) => {
        setInputColor(e.target.value);
    }

    const createColor = (event) => {
        event.preventDefault();

        if(inputColor !== "white"){
            setColors([...colors, {color: inputColor}]);
            setErr("");
        }else{
            setErr("You messed up!!")
        }
    }

    return (
        <div>
            <h3>This is colors component!</h3>
            {inputColor}
            <form onSubmit={createColor}>
                <input
                    type="text"
                    value={inputColor}
                    onChange={inputColorHandler}
                    placeholder="add a color here!!"
                />
                <input type="submit" value="Add a color!"/>
            </form>
            {
                colors.map((val, idx) =>
                    <p key={idx} style={ {'color': val.color} }>This color is {val.color}</p>
                )
            }
        </div>
    )
}

export default Colors;