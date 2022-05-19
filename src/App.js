import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import store from './redux/Store';
import Posts from './Posts';

function App() {
const[input,setInput]=useState('')

const changeState=(e)=>{
  setInput(e.target.value)
}



  const addInput=()=>{
    store.dispatch({
      type:'ADD_TO_POSTS',
      payload:{
        post:input
      }
    })
  }
  return (
    <div>
      <header>
        <input type='text' onChange={changeState}/>
        <button type='text' onClick={addInput}>Add</button>
      </header>
      <Posts/>
    </div>
  );
}

export default App;
