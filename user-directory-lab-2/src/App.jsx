import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import ButtonBar from './components/ButtonBar';
import data from './data';
function App() {
  let numCards = data.length;
  const [current, setCurrent] = useState(0);
  function decrementCurrent(){
    if(current === 0){
        setCurrent(data.length - 1)
    }
    else{
        setCurrent(current - 1)
    }
}
function incrementCurrent(){
    if(current === data.length - 1){
        setCurrent(0)
    }
    else {
        setCurrent(current + 1)
    }
}

  return (
    <>
    <Header/>
    <div className='blackSection'>
    <Card numCards={numCards} current={current} data={data}/>
    <ButtonBar incrementCurrent={incrementCurrent} decrementCurrent={decrementCurrent} />
    </div>
    </>
  );
}

export default App;
