import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats} from '../redux/action/studentAction'
import styled from 'styled-components'

const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
        history.push('/facultyStudentLoginPags')
    }
    return (
        <Container>
        <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light  bg-light">
                        <h4 className="navbar-brand mt-1 title" href="">PKR</h4>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <button type="button" className="btn"><Link to="/home"  className="link-to"><li>{name.toUpperCase()}</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/student/updateProfile"  className="link-to"><li>UPDATE PROFILE</li></Link></button>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ACADEMIC </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item link-to" to="/student/testPerformance">Test Performance</Link>
                                        <Link className="dropdown-item link-to" to="/student/attendence">Attendance</Link>
                                        <Link className="dropdown-item link-to" to="/student/getAllSubjects">Student Subject List</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/student/updatePassword" className="link-to"><li>UPDATE PASSWORD</li></Link></button>
                                </li>
                               
                            </ul>
                           
                        </div>
                        <div>
                             <button style={{listStyle:"none"}} onClick={logoutHandler} type="button" className="btn logout">Logout</button>
                        </div>
                    </nav>
             
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
    margin-left:0.3rem;
    margin-right:2rem;
    border-top-right-radius:50px;
    border-bottom-left-radius:50px;
}
.btn :before {
    content: "";
    width: 0;
    height: 5px;
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
 .btn  ul li{

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
`;
export default Home
