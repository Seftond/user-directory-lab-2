import React, { useState } from 'react';
import EditData from './EditData';
import NewData from './NewData';

function ButtonBar({incrementCurrent, decrementCurrent, data, setInfo, setCurrent, current, setNumCards}) {
    const [editForm, setEditForm] = useState("Hide");
    const [newForm, setNewForm] = useState("Hide");
    function deleteFn(){
        let arrLast = data.length - 1;
        if(current === arrLast){
            setCurrent(current - 1)
            data.splice(arrLast, 1)
            
        } else {
            data.splice(current, 1)           
        }
        setNumCards(data.length)
        setInfo([...data])
    }

    function editFn(){
        setEditForm("Show");
    }

    function newFn(){
        setNewForm("Show");
    }

  return (
      <>
      <div className='allButtons'>
          <button className='changeBtn' onClick={decrementCurrent}>Previous</button>
          <div className='modifyBtn'>
            <button onCLick={editFn}>Edit</button>
            <button onClick={deleteFn}>Delete</button>
            <button onClick={newFn}>New</button>
          </div>
          <button className='changeBtn' onClick={incrementCurrent}>Next</button>
      </div>
      <div>
      <EditData editForm={editForm} setEditForm={setEditForm}/>
      <NewData newForm={newForm} setNewForm={setNewForm}/>
      </div>
      </>
  )
}

export default ButtonBar