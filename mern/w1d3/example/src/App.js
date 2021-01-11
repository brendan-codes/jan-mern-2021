import './App.css';
import Counter from './components/Counter';
import Name from './components/Name';
import Other from './components/Other';
import Colors from './functional/Colors';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Colors />

      {/* <Counter /> */}
    </div>
  );
}

export default App;
