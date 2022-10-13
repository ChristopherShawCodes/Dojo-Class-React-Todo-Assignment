import './App.css';
import {useState} from 'react'
import Form from './Components/Form';
import List from './Components/List';



function App() {
  const [list, setList] = useState([])

  return (
    <div className="App">
    <Form list={list} setList={setList}/>
    <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
