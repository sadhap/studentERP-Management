import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { adminGetAllSubject } from '../../redux/action/adminAction'
import AdminHomeHelper from '../../Components/AdminHomeHelper'
import classnames from 'classnames'
import styled from 'styled-components'
const AdminGetAllSubjects = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()


    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminGetAllSubject({ department, year }))

    }
    useEffect(() => {
        if (store.admin.allSubject.length !== 0) {
            setIsLoading(false)
        }

    }, [store.admin.allSubject.length])
    return (
        <Container>
        <div>
            <div>
                {store.admin.isAuthenticated ? <>
                    <AdminHomeHelper />
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <form noValidate onSubmit={formHandler} className='formclass'>
                                    <div className="form-group">
                                       
                                        <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                            {
                                                'is-invalid': error.department
                                            })} id="departmentId">
                                            <option>Department</option>
                                            <option value="B.sc(CS)">B.sc(CS)</option>
                                                <option value="B.sc(IT)">Tamil</option>
                                                <option value="B.COM">B.COM</option>
                                                <option value="I.T">I.T</option>
                                                <option value="B.CA">B.CA</option>
                                                <option value="Maths">Maths</option>
                                                <option value="Maths">English</option>
                                        </select>
                                        {error.department && (<div className="invalid-feedback">{error.department}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <select onChange={(e) => setYear(e.target.value)} className={classnames("form-control",
                                            {
                                                'is-invalid': error.year
                                            })} id="yearId">
                                            <option>Year</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        {error.year && (<div className="invalid-feedback">{error.year}</div>)}
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-1">
                                            {
                                                isLoading && <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {!isLoading && <button type="submit" className="btn btn-info btn-block  ">Search</button>}
                                   
                                </form>


                            </div>
                            <div className="col-md-8 result">

                                {store.admin.allSubject.length !== 0 && <table className="table border mt-5 tableContent">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Subject Code</th>
                                            <th scope="col">Subject Name</th>
                                            <th scope="col">Total Lectures</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            store.admin.allSubject.map((res, index) =>
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{res.subjectCode}</td>
                                                    <td>{res.subjectName}</td>
                                                    <td>{res.totalLectures}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>}

                            </div>
                        </div>
                    </div>
                </> : (history.push('/'))}
            </div>
            
        </div>
        </Container>
    )
}
const Container = styled.div`
height: 550px;
width: 100%;
background: radial-gradient(#653d84, #332042);
position: relative;
.container{
width: 980px;
height: 400px;
position: absolute;
top: 55%;
left: 50%;
transform: translate(-50%,-50%);
background: #fff;
border-radius: 10px;
box-shadow: 1px 4px 22px -8px #0004;
display: flex;
overflow: hidden;
}
.formclass{ 
background: radial-gradient(#653d84, #332042);
height:40vh;
padding:10px;
border-radius:15px;
}
.result{
  background-image:url('https://static.tnn.in/thumb/msid-90732393,imgsize-100,width-1280,height-720,resizemode-75/90732393.jpg');
  margin-top:-3rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.tableContent{
    background-color:white;
    padding:20px;
    font-weight:600;
    font-size:14px;
}
`;
export default AdminGetAllSubjects
