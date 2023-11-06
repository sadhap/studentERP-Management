import React from 'react'
import pkrlogo from "./images/pkrlogo.jpg"
import styled from "styled-components";
import "../Style/block.css";
import Titlecart from './titlecart';
import Watch from "./watch"
import Loginandregister from './Loginandregister';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Block = () => {

  return (
    <Container>
         <header>
        < img src={pkrlogo} alt="logo" className='logo'/>
    <h1>PKR ARTS COLLEGE FOR WOMENS</h1>
    <ul>
      <li className='active'><span data-hover="Home"><Link to='/'>Home</Link></span></li>
      <li><span data-hover="About">About</span></li>
      <li><span data-hover="Contact">Contact</span></li>
      <li><span data-hover="Gallery">Gallery</span></li>
      <li><span data-hover="Notes"><Link to='/adminlogin'>Admin</Link></span></li>
    </ul>
  </header>
  <section className="login">
		<div className="login_box">
			<div className="left">
				<div className="top_link"></div>
				<div className="contact">
					{/* <form action="">
						<h3>SIGN IN</h3>
						<input type="text" placeholder="USERNAME"/>
						<input type="text" placeholder="PASSWORD"/>
						<button className="submit">LET'S GO</button>
					</form> */}
          {/* <ToastContainer/>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
        <h3>Sign in</h3>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <span>
            Don't have an account ? <Link to="/register" className="Link">Create One.</Link>
          </span>
          <button type="submit" className='submit'>LET'S GO</button>
        </form> */}
        <Loginandregister/>
				</div>
			</div>
			<div className="right">
				<div className="right-text">
       <Watch/>
					<Titlecart/>
					<h5>Affiliated to Bharathiar University is an unaided Autonomous Arts and Science college.</h5>
				</div>
				<div className="right-inductor"></div>
			</div>
		</div>
	</section>
  <footer>
  <p>Created with <i className="fa fa-heart"></i> by 
  <a href="https://florin-pop.com">Sadha</a></p>
   </footer>
    </Container>
  )
}
const Container = styled.div`

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
  height:40px;
  margin-top:-0.5rem;
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
  height:80px;
}

footer i {

  color: red;
  
}
footer p{
  margin-top:5px;
  padding:10px 20px;
  color:white;
} 
footer a {
  color: #3C97BF;
  text-decoration: none;
}
@media screen and (min-width: 300px) and (max-width: 900px){
  background-repeat: no-repeat;
  background-attachment: fixed;
  width:100%;
  header{
    background-color:blue;
    padding:10px 25px;
    color:white;
    display:flex;
    gap:10px;
    flex-direction:column;
    opacity: 10.5;
    gap:40px;
  }
  h5{
    color:grey;
  }
  header > h1{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight:900;
    font-size:14px;
    opacity: 10.5;
    margin-top:-4.5rem;
    margin-left:4rem;
    color:white;
  
  }
  .logo{
    margin-top:1rem;
    height:50px;
    width:50px;
    border-radius:50%;
     opacity: 10.5;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    letter-spacing: 1px;
    background-color:red;
    border-top-left-radius:0%;
    height:40px;
    opacity: 10.5;
  }
  li{
    margin:0;
  }
  header>ul>li {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:grey;
    list-style:none;
    display:inline-block;
    font-size:25px;
    margin-top:10px;
    justify-content:center;
    display:flex;
    padding:5px 10px;
    transform: translate(-10%,50%);
   }
   header>ul>li.active{
     background: radial-gradient(#653d84, #332042);
     border-radius:3px;
     width:4rem;
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


`;

export default Block