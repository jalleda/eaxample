import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
// import Pagination from './Pagination';




function App() {
  var [data, setdata] = useState([''])
  var [key, setKey] = useState('')
  var [sort,setsort]= useState(true)
  var [name,setname]= useState(true)
  var [mail,setmail]= useState(true)
  const item=data.length
  console.log(item)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setdata(json))
  }, [])
  function handle(e) {
    setKey(e.target.value)

    console.log(key)
  }
  // search
  function sea() {
    var temp4 = [...data]
    const x = temp4.filter((k, l) => {
      if (k.name.toLowerCase().includes(key.toLowerCase())) {
        return true

      } else {
        return false

      }
    })
    setdata(x)
    
  }

  function up() {

    var temp = [...data]
    temp.sort((n, m) => {
      if (n.name.toLowerCase() > m.name.toLowerCase()) {
        return 1
      } else {
        return -1
      }
    })
    setdata(temp)
    setsort(!sort)
  }
  function down() {

    var temp = [...data]
    temp.sort((n, m) => {
      if (n.name.toLowerCase() < m.name.toLowerCase()) {
        return 1
      } else {
        return -1
      }
    })
    setdata(temp)
    setsort(!sort)
  }
  function nam() {
    var temp1 = [...data]
    temp1.sort((n, m) => {
      if (n.username.toLowerCase() < m.username.toLowerCase()) {
        return 1
      } else {
        return -1
      }
    })
    setdata(temp1)
    setname(!name)
  }
  function man() {
    var temp1 = [...data]
    temp1.sort((n, m) => {
      if (n.username.toLowerCase() > m.username.toLowerCase()) {
        return 1
      } else {
        return -1
      }
    })
    setdata(temp1)
    setname(!name)
  }
  function ema() {
    var temp2 = [...data]
    temp2.sort((n, m) => {
      if (n.email.toLowerCase() < m.email.toLowerCase()) {
        return 1
      } else {
        return -1
      }
    })
    setdata(temp2)
    setmail(!mail)
  }
  function em() {
    var temp2 = [...data]
    temp2.sort((n, m) => {
      if (n.email.toLowerCase() > m.email.toLowerCase()) {
        return 1
      } else {
        return -1
      }
    })
    setdata(temp2)
    setmail(!mail)
  }
  function one() {
    var r = [...data]
    const z = r.slice(0, 5)
    setdata(z)
  }
  function two() {
    var w = [...data]
    const q = w.slice(5, 7)
    setdata(q)
    console.log(q)
  }

  return (
    <div  >

      <label htmlFor="">search</label>
      <input type="search" onChange={handle} value={key} />
      <button className='btn' onClick={sea}>search</button>
      <table className='table table-responsive mt-3 '>
        <thead className='border border-2'>
          <th >S.no</th>
          <th  >name{sort?<button className='btn' onClick={up}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
</svg>    </button>:<button className='btn' onClick={down}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>    </button>} </th>
<th  >username{name?<button className='btn' onClick={nam}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
</svg>    </button>:<button className='btn' onClick={man}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>    </button>} </th>
<th  >email{mail?<button className='btn' onClick={ema}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
</svg>    </button>:<button className='btn' onClick={em}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>    </button>} </th>
          <th>street</th>
          <th>suite</th>
          <th>zipcode</th>
          <th>lat</th>
          <th>lag</th>


        </thead>
        <tbody>
          {
            data && data.map((v, i) => {
              return <tr >
                <td >{i + 1}</td>
                <td>{v.name}</td>
                <td>{v.username}</td>
                <td>{v.email}</td>
                <td>{v?.address?.street}</td>
                <td>{v?.address?.suite}</td>
                <td>{v?.address?.zipcode}</td>
                <td>{v?.address?.geo?.lat}</td>
                <td>{v?.address?.geo?.lng}</td>


              </tr>
            })
          }
        </tbody>
      </table>

     {/* <Pagination itemsperpage={5}></Pagination> */}



    </div>
  );
}

export default App;
