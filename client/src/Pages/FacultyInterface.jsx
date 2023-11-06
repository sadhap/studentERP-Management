import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'


import FacultyHomeHelper from '../Components/FacultyHomeHelper'
import styled from 'styled-components';

const FacultyInterface = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    return (
        <Container>
        <>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                <div className="container">
                <div className="row mt-2">
                        <div className="col-1">
                        </div>
                        <div className="col-11">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card box" style={{ width: "18rem" }}>
                                        <img className="card-img-top imag" src={store.faculty.faculty.faculty.avatar} alt="Card ima cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.faculty.faculty.faculty.name}</h5>
                                            <h5 className="card-title">{store.faculty.faculty.faculty.registrationNumber}</h5>
                                            <Link to='/faculty/updateProfile'>UPDATE PROFILE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5   tableContent result">
                                    <table className='tabledata'>
                                        <tbody className="text-white">
                                            <tr>
                                                <td>Name</td>
                                                <td className='td'>{store.faculty.faculty.faculty.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td className='td'>{store.faculty.faculty.faculty.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td className='td'>{store.faculty.faculty.faculty.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td className='td'>{store.faculty.faculty.faculty.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Designation</td>
                                                <td className='td'>{store.faculty.faculty.faculty.designation}</td>
                                            </tr>
                                            <tr>
                                                <td>Joining Year</td>
                                                <td className='td'>{store.faculty.faculty.faculty.joiningYear}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td className='td'>{store.faculty.faculty.faculty.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td className='td'>{store.faculty.faculty.faculty.gender ? store.faculty.faculty.faculty.gender :

                                                    "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td className='td'>{store.faculty.faculty.faculty.facultyMobileNumber ?
                                                    store.faculty.faculty.faculty.facultyMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">

                        </div>

                    </div>
                </div>

            </> : (history.push('/facultyStudentLoginPags'))}
           
        </>
        </Container>
    )
}
const Container = styled.div`
height: 550px;
width: 100%;
background: radial-gradient(#653d84, #332042);
position: relative;
.imag{
    height:40vh;
}
.result{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.box{
 
    font-size:14px;
  
}
table tr td {
padding:6.5px 18px;   
color:black;
font-weight:600; 
}
.td{
    color:black;
    font-weight:600;
    height:15px;
    font-size:11px;
}
.link-to{
    color:red;
    text-decoration:none;
    font-weight:500
    
}
.container{
    width: 900px;
    height: 400px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #464444;
    border-radius: 10px;
    box-shadow: 10px 14px 22px -8px black;
    display: flex;
    overflow: hidden;
}
.tableContent {
   font-size:11px;
  }
  .tabledata{
    background-color:pink;
    width:30vw;
  }
`;
export default FacultyInterface
