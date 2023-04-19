import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
// import {isLoginatom} from './component/myatom';
// import {useRecoilState} from 'recoil'


export default function Login() {
  const [userName , setUserName] = useState('');
  const [userPass , setUserPass] = useState('');
  const [userList , setUserList] = useState([]);

  // const setisLogin=useRecoilState(isLoginatom);


  // //for validation
  // const [userNameisValid, setNameisValid] = useState(true);
  // const [userPassisValid, setPassisValid] = useState(true);

  const nav=useNavigate();

  useEffect(() => {
      let data = JSON.parse(localStorage.getItem('user'));
      setUserList(data);
    
    },[])

    console.log(userList)

  function handleUserName(e) {
    setUserName(e.target.value);
    // console.log(userName);
  
  }
  function handleUserPass(e) {
    setUserPass(e.target.value);
    // console.log(userPass);
  
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setisLogin(true);
    if(userList.find((i)=>i.name === userName && i.Password === userPass)){
      alert('Succssfully Registered')
      nav('/') 
    }
    else{
      alert("Don't have account")
      nav("/Register")
    
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>User Id</p>
          <input
            type="text"
            placeholder="Enter UserName"
            onChange={handleUserName}
            value={userName}
          />
          <p>Password</p>
          <input
            type="text"
            placeholder="Enter Password"
            onChange={handleUserPass}
            value={userPass}
          />
          <div>
            <h4>Don't have an account?</h4>
            <div />
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
