import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import React, {useState} from 'react';

function App() {
  // state variables
  const [tabs, setTabs] = useState([
      {title: "Tab 1", content: "This is Tab 1"},
      {title: "Tab 2", content: "This is Tab 2"},
      {title: "Tab 3", content: "This is Tab 3"},
      {title: "Tab 4", content: "This is Tab 4"}
  ]);

  const [selected, setSelected] = useState(0);


  // functions and handlers
  const tabHandler = (idx) => {
      setSelected(idx);
  }

  const addNewTabUnicorns = (tab) => {
    setTabs([...tabs, tab]);
  }

  const addNewTabTester = (e) => {
    addNewTabUnicorns({title: "Tab 5", content: "This is whatever!"})
  }


  // return some html as jsx
  return (
    <div className="App">
      <h1 onClick={addNewTabTester}>Hello world!</h1>
      <Tabs 
        tabs={tabs} 
        tabHandler={tabHandler} 
        selected={selected}
      />
    </div>
  );
}

export default App;
