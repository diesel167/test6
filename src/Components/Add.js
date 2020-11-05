import React, { useEffect, useState } from "react";

const Add = ({setNewEmp}) => {
  let [isOpen, setIsOpen] = useState(false);
  let [text, setText] = useState('Add new');
  useEffect(()=>{
    if(isOpen){
      setText('Ok')
    }
    else{
      setText('Add new')
    }
  },[isOpen])
  let [newName, setNewName] = useState('');
  return (
      <div className='add'>
        {isOpen===true && <div className="new-name"><input type="text" onChange={(e)=>{
          setNewName(e.target.value);
        }}/></div>}
        <button onClick={() => {
          if(isOpen){
            setNewEmp(newName);
            console.log(isOpen);
            setIsOpen(false);
          }
          else{
            setIsOpen(true);
          }
        }}>{text}</button>
      </div>
  );
};

export default Add;