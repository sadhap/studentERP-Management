import React from 'react'
import styled from "styled-components";
import "../Style/block.css"
import Checkboc from './Checkboc';
import { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast } from "react-toastify";
import { loginRoute } from "../utills/APIRoutes";
import { useHistory } from "react-router-dom";
import { registerRoute } from "../utills/APIRoutes";
const Loginandregister = () => {

 const [isActive, setIsActive] = useState(false);
 const history = useHistory();
 const [values, setValues] = useState({ username: "", password: "" });
 const toastOptions = {
   position: "top-center",
   autoClose: 5000,
   pauseOnHover: true,
   draggable: true,
   theme: "dark",
 };
 useEffect(() => {
   if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
     history.push('/')
   }
 }, [history]);

 const handleChange = (event) => {
   setValues({ ...values, [event.target.name]: event.target.value });
 };

 const validateForm = () => {
   const { username, password } = values;
   if (username === "") {
     toast.error("UserName is required.", toastOptions);
     return false;
   } else if (password === "") {
     toast.error("Password is required.", toastOptions);
     return false;
   }
   toast.success('User login Successfully',toastOptions);
   return true;
 };

 const handleSubmit = async (event) => {
   event.preventDefault();
   if (validateForm()) {
     const { username, password } = values;
     const { data } = await axios.post(loginRoute, {
       username,
       password,
     });
     if (data.status === false) {
       toast.error(data.msg, toastOptions);
     }
     if (data.status === true) {
       localStorage.setItem(
         process.env.REACT_APP_LOCALHOST_KEY,
         JSON.stringify(data.user)
       );

       history.push('facultyStudentLoginPags')
     }
   }
 };
  const handleClick = () => {
    setIsActive(current => !current);
  };
  //register container ......
  const [values1,setValues1] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  });
  const toastOption = {
    position:"top-center",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
  const handleSubmit2 =async (event)=>{
    event.preventDefault();
    if(handleValidation()){
    const {password,username,email}= values1;
    const {data} = await axios.post(registerRoute,{
      username,
      password,
      email
    });
    if(data.status === false){
      toast.error(data.msg,toastOption)
    }
    if(data.status === true){
    localStorage.setItem('free-chat-app',JSON.stringify(data.user));
    history.push('/')
    }

    }
  }
  const handleChange2 = (event)=>{
 setValues1({...values1,[event.target.name]:event.target.value});
  }
  const handleValidation=()=>{
    const {password,confirmPassword,username,email}= values1;
    if(email === '' || password === ""){
      toast.error('Please fill the details first',toastOption);
      return false;
    }
    else if(password !== confirmPassword){
      toast.error("Password and confirmPassword should be same",toastOption);
      return false;
    }else if(username.length<3){
      toast.error("Username should be greater than 3 characters",toastOption);
      return false;
    }else if(username.length>8){
      toast.error("Username should be less than 8 characters",toastOption);
      return false;
    }
    else if(password.length < 8){
      toast.error('Password should be greater than 8 characters',toastOption);
      return false;
    }else if(email ===""){
   toast.error("Email is required",toastOption);
   return false;
    }
    toast.success('User Register Successfully',toastOptions);
    return true;
 
  }

  return (
    
    <Container>
<div className="hero">
        <div className="form-box">
            <div className="button-box">
                <div id="btn" style= {{ left: isActive ? '110px':'0px' }}></div>
                <button type="button" className="toggle-btn" onClick={handleClick}>Login</button>
                <button type="button" className="toggle-btn" onClick={handleClick}>Register</button>
            </div>
            <form id="login"action="" onSubmit={(event) => handleSubmit(event)} className="input-group"  style= {{ left: isActive ? '400px':'50px' }}>
                <input  className="input-field"  type="text"placeholder="Username" name="username"onChange={(e) => handleChange(e)} min="3" />
                <input type="password" className="input-field" placeholder="Enter Password"  name="password" onChange={(e) => handleChange(e)} />
                <label className="material-checkbox">
        <input type="checkbox"/>
        <span className="checkmark"></span>
        Show Password
      </label>
                <button type="submit" className="submit-btn submit">Login</button>
            </form>

            <form id="register" onSubmit={(event) => handleSubmit2(event)}className="input-group formclass" style= {{ left: isActive ? '50px':' 450px' }} >
                <input  type='text'
      name='username'
      placeholder='Enter your name' className="input-field" onChange={(e) => handleChange2(e)}/>
                 <input type="email" name='email' className="input-field" placeholder="Email ID" onChange={(e) => handleChange2(e)}/>
                 <input type="password" name='password'className="input-field" placeholder="Enter Password"  onChange={(e) => handleChange2(e)} />
                <input type="password" name='confirmPassword' className="input-field" placeholder="Confirm password" onChange={(e) => handleChange2(e)} />
             <Checkboc/>
                <button type="submit" className="submit-btn submit">Register</button>
            </form>
        </div>
    </div>
    <ToastContainer />
    </Container>
  )
}
const Container = styled.div`
.formclass{
  margin-top:-1.8rem;
  padding:0px;
}
.material-checkbox {
    display: flex;
    margin-top:20px;
    align-items: center;
    font-size: 16px;
    color: #777777;
    cursor: pointer;
  }
  
  .material-checkbox input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .checkmark {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 12px;
    border: 2px solid #454B00;
    border-radius: 4px;
    transition: all 0.3s;
  }
  
  .material-checkbox input[type="checkbox"]:checked ~ .checkmark {
    background-color: #2F3300;
    border-color: #454B00;
  }
  
  .material-checkbox input[type="checkbox"]:checked ~ .checkmark:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 6px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  
  .material-checkbox input[type="checkbox"]:focus ~ .checkmark {
    box-shadow: 0 0 0 2px #dfec5065;
  }
  
  .material-checkbox:hover input[type="checkbox"] ~ .checkmark {
    border-color: #C3CF34;
  }
  
  .material-checkbox input[type="checkbox"]:disabled ~ .checkmark {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .material-checkbox input[type="checkbox"]:disabled ~ .checkmark:hover {
    border-color: #4d4d4d;
  }
  
.form-box{
    width: 380px;
    height: 480px;
    position: relative;
    background:rgb(226, 226, 226) ;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 3px;
}
.button-box{
    width: 220px;
    margin: 35px auto;
    position: relative;
    box-shadow: 0 0 20px 9px #ff61241f;
    border-radius: 30px;
}

.toggle-btn{
    padding: 10px 30px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
}

#btn{
    top: 0;
    left: 0;
    position: absolute;
    width: 110px;
    height: 100%;
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    border-radius: 50px;
    transition: .5s;
}
.social-icons img{
    width: 35px;
    margin: 0 12px;
    box-shadow: 0 0 20px 0 #7f7f7f3d;
    cursor: pointer;
    border-radius: 50%;
}

.input-group{
    top: 120px;
    position: absolute;
    width: 280px;
    transition: 0.5s;
}

.input-field{
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #999;
    outline: none;
    background: transparent;
}



.submit-btn{
    width: 85%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin-top:2rem;
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    border: 0;
    outline: none;
   
}
#register {
    left: 450px;
} 

`;
export default Loginandregister