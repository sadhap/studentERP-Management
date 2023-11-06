import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'
import styled from 'styled-components'
const Home = () => {
    const store = useSelector((store) => store)
    const history = useHistory()

    return (
        <Container>
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container">
                <div className="row mt-2">
                        <div className="col-1">
                        </div>
                        <div className="col-11">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card box " style={{ width: "18rem",GAP:'2rem',right:'2rem',widthtop:'2rem',background:"aqua",color:'white',border:'none'}} >
                                        <img className="card-img-top imag" src={store.student.student.student.avatar} alt="Card img cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.student.student.student.name}</h5>
                                            <h5 className="card-title">{store.student.student.student.registrationNumber}</h5>
                                            <Link to='/student/updateProfile'>UPDATE PROFILE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5   tableContent result">
                                    <table className='tabledata'>
                                        <tbody className="text-white">
                                            <tr>
                                                <td>Name</td>
                                                <td className='td'>{store.student.student.student.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td className='td'>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td className='td'>{store.student.student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td className='td'>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td className='td'>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td className='td'>{store.student.student.student.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Section</td>
                                                <td className='td'>{store.student.student.student.section}</td>
                                            </tr>
                                            <tr>
                                                <td>Batch</td>
                                                <td className='td'>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td className='td'>{store.student.student.student.gender ? store.student.student.student.gender : 
                                                
                                                   "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td className='td'>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <td>Aadhar Card</td>
                                                <td className='td'>{store.student.student.student.aadharCard ? store.student.student.student.aadharCard : "NA"} </td>
                                            </tr>
                                            <tr>
                                                <td>Father Name</td>
                                                <td className='td'>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "NA" }</td>
                                            </tr>
                                            <tr>
                                                <td>Father Contact Number</td>
                                                <td className='td'>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-">
                        </div>

                    </div>
                </div>

            </> : (history.push('/facultyStudentLoginPags'))}
        </div>
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
`;
export default Home
