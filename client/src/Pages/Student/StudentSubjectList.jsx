import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubjects } from '../../redux/action/studentAction'
import HomeHelper from '../../Components/HomeHelper'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
const StudentSubjectList = () => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getAllSubjects())
    },[])
    return (
        <> 
        <Container>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <table className="table border tableclass">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Subject Code</th>
                                        <th scope="col">Subject Name</th>
                                        <th scope="col">Year</th>
                                        <th scope="col">Total Lectures</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.student.allSubjects.map((res, index) =>
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{res.subjectCode}</td>
                                                <td>{res.subjectName}</td>
                                                <td>{res.year}</td>
                                                <td>{res.totalLectures}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div></> : (history.push('/'))}
                </Container>
            </>
    )
}
const  Container = styled.div`
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
    margin-top:1em;
    margin-left:-7em;
    width:55vw;;
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
export default StudentSubjectList
