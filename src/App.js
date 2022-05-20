
import { useState } from 'react';
import './style.css';

function App() {
  const [data, setData] = useState({
    userName: "",
    dept: "",
    rate: "",
  })
  const [collect,collectData]= useState([])
  // const { userName, dept, rate } = data
  const userHandler = (u) => {
    const name = u.target.name;
    const value = u.target.value;
    console.log(name, value);
    setData({ ...data, [name]: value })
    // setData({ ...data, [user.target.name]: [user.target.value] })
  }
  const submitHandler = (us) => {
    us.preventDefault()
    // console.log(data);
    const newRecord = { ...data, id: new Date().getTime().toString() }
    console.log(newRecord)
    collectData([...collect, newRecord])
    console.log(collect)
    setData({ userName: " ", dept: " ", rate: " " })
  }
  return (
    <div>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form action="" onSubmit={submitHandler}>
        <br /><br />
        <label>Name : </label>
        <input type="text" name="userName" value={data.userName} onChange={userHandler} /><br /><br />
        <label>Department : </label>
        <input type="text" name="dept" value={data.dept} onChange={userHandler} /><br /><br />
        <label>Rating : </label>
        <input type="text" name="rate"  value={data.rate} onChange={userHandler} /><br /><br /><br />
        <input className="submit" type="submit" />
      </form><br /><br /><br /><br /><br />
      <div className="box">
        {
        collect.map((ele) => {
          let { id, userName, dept, rate } = ele
          return (
            <div className="subbox"key={id}>
              Name:{userName}| Department :{dept} | Rating :{rate}
            </div>
          )
        })
      }
        
      </div>
    </div>
  );
}

export default App;
