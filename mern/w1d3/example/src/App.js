import './App.css';
import Counter from './components/Counter';
import Name from './components/Name';
import Other from './components/Other';


// count = count + 1;
//                        thing,  unicorns
//                        ["", function(newThing){..??}]
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");


// const [boxes, setBoxes] = useState([{color: "red"}, {color: "green"}])

// setBoxes([...boxes, {color: "orange"}])

// const editBox = (idx, newColor) => {
//   const newBoxes = [...boxes];
//   newBoxes[idx].color = newColor;
//   setBoxes(newBoxes);
// }

// [{color: "red", color: "orange"}]

// const x = useState("");
// const thing = x[0];
// const setThing = x[1];

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Counter />
    </div>
  );
}

export default App;
