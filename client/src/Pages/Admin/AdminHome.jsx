import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import AdminHomeHelper from '../../Components/AdminHomeHelper'
import styled from 'styled-components';

const AdminHome = () => {
    const store = useSelector((store) => store)

    const history = useHistory()
    return (
        <Container>
        <div> 
            { store.admin.isAuthenticated ? <>
                <AdminHomeHelper />
              
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-1">
                        </div>
                        <div className="col-11">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card box" style={{ width: "18rem",height:"9rem;",right:'1rem',background:"red",color:'white'}}>
                                        <img className="card-img-top" src={store.admin.admin.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.admin.admin.name}</h5>

                                            <h5 className="card-title">{store.admin.admin.registrationNumber}</h5>
                                            <Link to='/faculty/updateProfile' className="link-to">UPDATE PROFILE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 tableContent result">
                                    <table style={{ width: "25rem",gap:'2rem',right:'1rem',top:'4rem',background:"black",color:'white',border:'none'}}>
                                        <tbody className="text-white">
                                            <tr>
                                                <td>Name:</td>
                                                <td className='td'>{store.admin.admin.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td className='td'>{store.admin.admin.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number:</td>
                                                <td className='td'>{store.admin.admin.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Joining Year:</td>
                                                <td className='td'>{store.admin.admin.joiningYear}</td>
                                            </tr>
                                            <tr>
                                                <td>Department:</td>
                                                <td className='td'>{store.admin.admin.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number:</td>
                                                <td className='td'>{store.admin.admin.contactNumber ?
                                                    store.admin.admin.contactNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                        </div>
                    </div>
                </div>
                </> : (history.push('/'))}
                
        </div>
        </Container>
    )
}
const Container =  styled.div`
height: 550px;
width: 100%;
background: radial-gradient(#653d84, #332042);
position: relative;
.imag{
    height:30vh;
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
color:white;
}
.td{
    color:black;
    font-weight:600;
    height:15px;
    color:white;
    font-size:11px;
}
.link-to{
    color:red;
    text-decoration:none;
    font-weight:500
    
}
.container{
    width: 900px;
    height: 440px;
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
  `
export default AdminHome
