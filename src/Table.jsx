import React from 'react'
import { useState } from 'react'
function Table() {
  const [editflag,seteditflag]=React.useState(true)
  const[key,setkey]=React.useState(false)
  const [task,setTask]=React.useState([""])
  var [students, setstudents] = React.useState([
    {
      name: "mohan",
      age: "22",
      gender: "male",
      edu: "B.tech",
      salary: 22000,
      city:"hyd"
    },
    {
      name: "sriharan",
      age: "23",
      gender: "male",
      edu: "B.tech",
      salary: 22000,
      city:"hyd"
    },
    {
      name: "venkat",
      age: " 24",
      gender: "male",
      edu: "degree",
      salary: 22000,
      city:"hyd"
    },
    {
      name: "gopi",
      age: "26",
      gender: "male",
      edu: "B.tech",
      salary: 22000,
      city:"hyd"
    },
    {
      name: "manasa",
      age: "23",
      gender: "female",
      edu: "B.tech",
      salary: 22000,
      city:"hyd"
    },
    {
      name: "srilashmi",
      age: "23",
      gender: "female",
      edu: "B.tech",
      salary: 22000,
      city:"hyd"
    },
  
  ])
  function handle(e){
    setTask(e.target.value)
    console.log(task)
  }
  function update(i){
    setstudents([...students[i].city=[task]])
  }

    
    
    function zxc(){
      setkey(!key)
    }
  return (
    <div>
      
      <table className='table table-responsive'>
  <thead>
    <th>S.no</th>
    <th>name</th>
    <th>age</th>
    <th>gender</th>
    <th>education</th>
    <th>salary</th>
    <th>city</th>
  </thead>
  <tbody>
  {
        students.map((v, i) => {       
            return <tr onClick={zxc}>
            <td>{i+1}</td>
            <td>{v.name}</td>
            <td>{v.age}</td>
            <td>{v.gender}</td>
            <td>{v.edu}</td>
            <td>{v.salary}</td>
            {
              editflag?<td>{v.city}</td>:<td><input type="text" placeholder={v.city} onChange={handle}/>
  
              </td>
            }{
  
           key? <button className='btn' onClick={()=>{ seteditflag(!editflag)(i)}} >edit</button>:""
            }{
              editflag==false?<button onClick={()=>{update(i)}}>update</button>:""
            }
          </tr>
        })
      }
  </tbody>
</table>
    
        </div>
  )
}

export default Table