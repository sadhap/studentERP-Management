import React, {useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../redux/action/facultyAction'
import styled from 'styled-components'


const Home = () => {
    const store = useSelector((store)=>store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history.push('/FacultyStudentLoginPags')
    }
    return (
        <Container>
        <div className="container-fluid">
           
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <h4 className="navbar-brand mt-1 title" href="">PKR</h4>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <button type="button" className="btn"><Link to="/faculty"  className='link-to'><li>{name.toUpperCase()}</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/updateProfile"  className='link-to'><li>UPDATE PROFILE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/attendenceFaculty"  className='link-to'><li>MARK ATTENDANCE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/uploadMarks"  className='link-to'><li>UPLOAD MARKS</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/updatePassword" className='link-to'><li>UPDATE PASSWORD</li></Link></button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button style={{listStyle:"None"}} onClick={logoutHandler} type="button" className="btn logout">Logout</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </Container>
    )
}
const Container = styled.div`
background-color:white;
.navbar-brand{
    color:white;
}
.title{
    color:black;
}
nav{
    background-color:black;
    border-radius:1.5px;
    color:white;
}
ul li{
    display:flex;
    justify-content:center;
    color:green;
    text-decoration:none;
    color:white;
}
.btn{
    text-decoration: none;
    font-size:12px;
    color:white;
}
.btn:hover{
    background-color:red;
}
.collapse{
    background-color:grey;
    color:white;
    display:flex;
    justify-content:center;
    margin-left:5rem;
    margin-right:10rem;
    border-top-right-radius:50px;
    border-bottom-left-radius:50px;
}
.btn :before {
    content: "";
    width: 0;
    height:5px;
    background-color: #00bcd4;
    position: absolute;
    top: 120%;
    left: 0;
    transition: all 0.5s;
  }
  
  .btn :after {
    content: "";
    width: 0;
    height: 5px;
    background-color: #f0f;
    position: absolute;
    top: 120%;
    right: 0;
    transition: all 0.5s;
  }
  
  .btn :hover:before {
    width: 50%;
    transform: translateX(100%);
  }
  
 .btn:hover:after {
    width: 50%;
    transform: translateX(-100%);
  }
  .link-to{
    text-decoration:none;
  }
  .logout{
    background-color:red;
  }
  .logout:hover{
    background-color:blue;
  }



  @media screen and (min-width: 320px) and (max-width: 900px){
    background-color:white;
    .navbar-brand{
        color:white;
    }
    .title{
        color:black;
    }
    nav{
        background-color:black;
        border-radius:1.5px;
        color:white;
        display:flex;
        flex-direction:row;
        height:101px
    }
    ul li{
        justify-content:left;
        color:green;
        text-decoration:none;
        color:white;
        display:flex;
    }
    .btn{
        text-decoration: none;
        font-size:12px;
        color:white;
    }
    .btn:hover{
        background-color:red;
    }
    .collapse{
        background-color:grey;
        color:white;
        display:flex;
        justify-content:center;
        margin-left:0rem;
        margin-right:10rem;
        border-top-right-radius:0px;
        border-bottom-left-radius:0px;
    }
    .btn :before {
        content: "";
        width: 0;
        height:5px;
        background-color: #00bcd4;
        position: absolute;
        top: 120%;
        left: 0;
        transition: all 0.5s;
      }
      
      .btn :after {
        content: "";
        width: 0;
        height: 5px;
        background-color: #f0f;
        position: absolute;
        top: 120%;
        right: 0;
        transition: all 0.5s;
      }
      
      .btn :hover:before {
        width: 50%;
        transform: translateX(100%);
      }
      
     .btn:hover:after {
        width: 50%;
        transform: translateX(-100%);
      }
      .link-to{
        text-decoration:none;
      }
      .logout{
        background-color:red;
      }
      .logout:hover{
        background-color:blue;
      }

  }
`;
export default Home
