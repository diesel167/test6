import React, { useEffect, useState } from 'react';
import Add from './Add.js'

const Employees = () => {
  let names = [];
  let [onlyNames, setOnlyNames] = useState([]);
  let [employees, setEmployees] = useState([]);
  let [forDelete, setForDelete] = useState('');
  let setNewEmp = (newEmp) =>{
    let only = onlyNames.slice();
    only.push([newEmp,'']);
    setEmployees(names);
    setOnlyNames(only)
  };


  //load list from api
  useEffect(() => {
    function makeRequest(method, url) {
      return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response);
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };
        xhr.onerror = function () {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        xhr.send();
      });
    }
    makeRequest('GET', 'https://reqres.in/api/users?per_page=12').then((e)=>{
      let tempNames = [];
      JSON.parse(e).data.forEach((name,i) => {
        tempNames.push([name.first_name+' '+name.last_name,'']);
      });
      setOnlyNames(tempNames);
    });
  },[]);


  //when deleting
  useEffect(()=>{
    let temp = [];
    onlyNames.forEach(name => {
      if(name[1]!==forDelete[1]){
        temp.push(name);
      }
    });
    setOnlyNames(temp);
  },[forDelete]);



  //when should rerender after adding or deleting
  useEffect(()=>{
    let temp = [];
    //for unique 'key' identification of names
    let tempfonames =onlyNames.slice();
    onlyNames.forEach((name,i) => {
      let key = Symbol(i).toString();
      temp.push(<div key={key}>
        <p>{name[0]}</p>
        <button onClick={() =>{
          setForDelete([name[0], key]);
        }}>Delete</button>
      </div>);
      tempfonames[i][1] = key;
    });
    setEmployees(temp);
  },[onlyNames]);


  return (
      <>
        <div className='employees'>
          {employees}
        </div>
        <Add setNewEmp={setNewEmp}/>
      </>
  );
};

export default Employees;