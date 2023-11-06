import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { adminLogin } from '../redux/action/adminAction'
import classnames from 'classnames';
import styled from 'styled-components';
import pkrlogo from "./images/pkrlogo.jpg"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const LoginPage = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch( )
    const [registrationNumber, setRegistrationNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    useEffect(() => {
        if (store.admin.isAuthenticated) {
            history.push('/admin')
        }
    }, [store.admin.isAuthenticated])
    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    const fromHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminLogin({registrationNumber, password}))
       
    }

    useEffect(() => {
        if (store.error ||
            store.admin.isAuthenticated) {
            setIsLoading(false)
        }
        
        else {
            setIsLoading(true)
        }
    }, [store.error, store.admin.isAuthenticated])

    
    return (
        <Container>
                  <header>
    <img src={pkrlogo} alt="logo" className='logo'/>
    <h1>PKR COLLEGE OF ARTS AND SCIENCE FOR WOMENS</h1>
    <ul>
      <li className='active'><span data-hover="Home"><Link to='/'>Home</Link></span></li>
      <li><span data-hover="About">About</span></li>
      <li><span data-hover="Contact">Contact</span></li>
      <li><span data-hover="Gallery">Gallery</span></li>
      <li><span data-hover="Notes">Notes</span></li>
    </ul>
  </header>
  <section className="login">
        <div className="Container">
                        <div className='input-box'>
                            <h1>ADMIN</h1>
                            <form noValidate onSubmit={fromHandler}>
                                    <input placeholder='Enter username' onChange={(e) => setRegistrationNumber(e.target.value)} type="text" value={registrationNumber} className={classnames("form-control form-control-lg",
                                        {'is-invalid' : error.registrationNumber
                                        
                                        })} id="emailId" />
                                    {error.registrationNumber && (<div className="invalid-feedback">{error.registrationNumber}</div>)}
                        
                                    <input placeholder='Enter user Password' onChange={(e) => setPassword(e.target.value)} value={password} className={classnames("form-control form-control-lg", {
                                        "is-invalid": error.password
                                    })} type="password" id="passwordId" />
                                    {error.password && (<div className="invalid-feedback">{error.password}</div>)}
                           
                                        {
                                            isLoading && <div class="spinner-border text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        }
                                {!isLoading && <button type="submit" className="btn btn-info btn-block">Login</button>}
                            </form>
                        </div>
                    </div>
 </section>
            <footer>
  <p>Created with <i className="fa fa-heart"></i> by 
  <a href="https://florin-pop.com">sadha</a></p>
   </footer>
            </Container>
    )
}
const Container = styled.div`
background-color:white;
input{
    margin-top:1rem;
    margin-bottom:3rem;
}
.input-box{
    padding: 15px 75px;
    width: 500px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 4px 22px -8px #0004;
    display: flex;
    overflow: hidden;
    flex-direction:column;
    gap:0.5rem;
}
h1{
    display:flex;
    justify-content:center;
}
.login {
    height: 500px;
    width: 100%;
    background: radial-gradient(#653d84, #332042);
    position: relative;
}
header{
    display:flex;
    justify-content:left;
    gap:10px;
   
  }
  header > h1{
    display:flex;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     font-weight:900;
    font-size:22px;
    margin-top:10px;
    color:black;
     height:10px;
  }
  header>ul>li {
   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   color:red;
   list-style:none;
   display:inline-block;
   font-size:22px;
   margin-top:10px;
   justify-content:right;
   display:flex;
  
  }
  header>ul>li.active{
    background: radial-gradient(#653d84, #332042);
    border-radius:3px;
    width:6rem;
    display:flex;
    justify-content:center;
    color:white;
  }
  header>ul>li:hover span,li:focus span{
    cursor:pointer;
    border-radius:3px;
    background: radial-gradient(#653d84, #332042);
    border-radius:3px;
    display:flex;
    justify-content:center;
    color:white;
    overflow:hidden;
    border:none;
    outline:none;
  }
  li span:before {
    border:none;
      position: absolute;
    border-radius:3px;
    padding: 3px 15px 0;
      background: #fff;
      color: #2f4351;
      content: attr(data-hover);
      -webkit-transform: rotateX(270deg);
      -moz-transform: rotateX(270deg);
      transform: rotateX(270deg);
      -webkit-transition: -webkit-transform 0.6s;
      -moz-transition: -moz-transform 0.6s;
      transition: transform 0.6s;
      -webkit-transform-origin: 0 0;
      -moz-transform-origin: 0 0;
      transform-origin: 0 0;
      pointer-events: none;
  }
  
  li:hover span:before, li:focus span:before {
      -webkit-transform: rotateX(10deg);
      -moz-transform: rotateX(10deg);
      transform: rotateX(10deg);
  }
  header ul{
    margin-left:8rem;
    justify-content:right;
    display:flex;
  }
  li{
    margin-left:25px;
  }
  .logo{
    height:50px;
    border-radius:50%;
  }
  
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    letter-spacing: 1px;
    border-top-left-radius:40%;
    height:60px;
  }
  
  footer i {
  
    color: red;
    
  }
  footer p{
    margin-top:5px;
    padding:10px 20px;
    color:green;
  } 
  footer a {
    color: #3C97BF;
    text-decoration: none;
  }
`;
export default LoginPage
