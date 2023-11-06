import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogout } from '../redux/action/adminAction'
import styled from 'styled-components'


const Home = () => {
    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.admin.admin.name) {
            setName(store.admin.admin.name)
        }
    }, [store.admin.admin.name])
    const history = useHistory()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(adminLogout())
        history.push('/')
    }
    return (
        <Container>
        <div className="container-fluid">
          
            <nav className="navbar navbar-expand-lg navbar-light">
                <h4 className="navbar-brand mt-1" href="">PKR</h4>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <button type="button" className="btn"><Link to="/admin"className='btn'><li>{name.toUpperCase()}</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/addFaculty"className='btn'><li>ADD FACULTY</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/addStudent"className='btn'><li>ADD STUDENT</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/addSubject"className='btn'><li>ADD SUBJECT</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/addAdmin"className='btn'><li>ADD ADMIN</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/allFaculties"className='btn'><li>OUR FACULTIES</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/allStudents"className='btn'><li>OUR STUDENTS</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/allSubject" className='btn'><li>SUBJECTS</li></Link></button>
                        </li>

                    </ul>
                </div>
                <div>

                    <button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn"><li>LOGOUT</li></button>

                </div>
            </nav>
        </div>
        </Container>
    )
}
const Container = styled.div`
background-color:grey;
.navbar-brand{
    color:white;
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
    margin:auto;
    padding:1px;
}
.btn:hover{
    background-color:red;
}
.collapse{
    background-color:grey;
    color:white;
    display:flex;
    justify-content:center;
    border-top-right-radius:50px;
    border-bottom-left-radius:50px;
    width:16vw;
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
`;

export default Home
// https://codepen.io/yudizsolutions/pen/GRYMxmE