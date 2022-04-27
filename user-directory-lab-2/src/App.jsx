import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import ButtonBar from './components/ButtonBar';
import data from './data';


function App() {
  const [numCards, setNumCards] = useState(data.length);
  const [info, setInfo]=useState([...data]);
  const [current, setCurrent] = useState(0);
  function decrementCurrent(){
    if(current === 0){
        setCurrent(numCards - 1)
    }
    else{
        setCurrent(current - 1)
    }
}
function incrementCurrent(){
    if(current === numCards - 1){
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
    <Card numCards={numCards} current={current} data={info}/>
    <ButtonBar incrementCurrent={incrementCurrent} decrementCurrent={decrementCurrent} data={info} setInfo={setInfo} setCurrent={setCurrent} current={current} setNumCards={setNumCards}/>
    </div>
    </>
  );
}

export default App;
