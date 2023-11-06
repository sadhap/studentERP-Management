import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchAttendence} from '../redux/action/studentAction'

import axios from 'axios'
import HomeHelper from '../Components/HomeHelper'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
const Home = () => {
    const store = useSelector(store => store)
    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(fetchAttendence())  
    },[])

    return (
        <Container>
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container">
                    <div className="row mt-5 content">
                        <div className="col-md-9  m-auto">
                            <table className="table border tableclass">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Subject Code</th>
                                        <th scope="col">Subject Name</th>
                                        <th scope="col">Maximum Hours</th>
                                        <th scope="col">Present Hours</th>
                                        <th scope="col">Absent Hours</th>
                                        <th scope="col">Total Hours</th>
                                        <th scope="col">Attendence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.student.attendence.map((res, index) =>
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{res.subjectCode}</td>
                                                <td>{res.subjectName}</td>
                                                <td>{res.maxHours}</td>
                                                <td>{res.lectureAttended}</td>
                                                <td>{res.absentHours}</td>
                                                <td>{res.totalLecturesByFaculty}</td>
                                                <td>{res.attendence}%</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </> : (history.push('/'))}
           
            
        </div>
        </Container>
    )
}
const Container = styled.div`
height: 550px;
width: 100%;
background: radial-gradient(#653d84, #332042);
.container{
    width: 900px;
    height: 420px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 10px;
    box-shadow: 10px 14px 22px -8px black;
    display: flex;
    overflow: hidden;
    justify-content:center;
}
    .tableclass{
        margin-top:-2em;
        margin-left:3em;
        width:15vw;;
        background: radial-gradient(#653d84, #332042);
        height:60vh;
       border-radius:15px;
    }
    thead tr th {
        color:white;
        font-size:11px;
        padding:15px;
    }
    tbody td{
        color:white;
        font-size:11px;
        padding:15px;
    }
    tbody tr{
        color:white;
        font-size:11px;
        padding:15px;
    }
`;
export default Home
