import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import { useState } from 'react';

function App() {

  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);
  return (
    <div>
      <Form info = {info} setInfo = {setInfo} setState = {setState}/>
      <Info info = {info} state ={state}/>
    </div>
  );
}

export default App;
