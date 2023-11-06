import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddSubject } from '../redux/action/adminAction'
import AdminHomeHelper from '../Components/AdminHomeHelper'
import styled from 'styled-components'
import subject from "./images/subject2.jpg"
const AdminAddSubject = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const history = useHistory()
    const [subjectName, setSubjectName] = useState('')
    const [subjectCode, setSubjectCode] = useState('')
    const [totalLectures, setTotalLectures] = useState('')
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])
    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminAddSubject({
            subjectCode,
            subjectName,
            totalLectures,
            department,
            year
        }))
    }

    useEffect(() => {
        if (store.admin.adminAddSubjectFlag) {
            setError({})
        }
    }, [store.admin.adminAddSubjectFlag])

    useEffect(() => {
        if (store.error || store.admin.adminAddSubjectFlag) {
            setIsLoading(false)
        }
    }, [store.error, store.admin.adminAddSubjectFlag])

    return (
        <Container>
        <div>
            {store.admin.isAuthenticated ? <>  <AdminHomeHelper />
                <div className="container mt-5">
                <img src={subject} alt="ss" />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-flex  vh-50 vw-100 ">
                                <form noValidate onSubmit={formHandler} className='form-list'>
                                    <div className="form-group ">
                                        <input placeholder='Subject Name' onChange={(e) => setSubjectName(e.target.value)} type="text" className={classnames("form-control",
                                            {
                                                'is-invalid': error.subjectName
                                            })} id="snameId" />                                    
                                    </div>
                                    <div className="form-group">
                                        <input placeholder='Subject Code' onChange={(e) => setSubjectCode(e.target.value)} type="text" className={classnames("form-control",
                                            {
                                                'is-invalid': error.subjectCode
                                            })} id="scodeId" />                                      
                                    </div>
                                    <div className="form-group">                                
                                        <input placeholder='Total Lectures' onChange={(e) => setTotalLectures(e.target.value)} type="number" className={classnames("form-control",
                                            {
                                                'is-invalid': error.totalLectures
                                            })} id="totalLectures" />                                 
                                    </div>
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
                                    </div>
                                    {!isLoading && <button type="submit" className="btn btn-info button  ">Add Subject</button>}
                                    <div class="row justify-content-center">
                                        <div class="col-md-1">
                                            {
                                                isLoading && <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                 
                                </form>
                            </div>
                        </div>
                    </div>
                </div></>: (history.push('/adminlogin'))}
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
top: 45%;
left: 50%;
transform: translate(-50%,-50%);
background: #fff;
border-radius: 10px;
box-shadow: 1px 4px 22px -8px #0004;
display: flex;
overflow: hidden;
}
.form-list{
padding:55px 15px;
display:flex;
flex-direction:column;
gap:35px;
margin-left:-20rem;
margin-top:-1rem;
background: radial-gradient(#653d84, #332042);
width:30%;
border-bottom-right-radius:45%;

}
input{
    margin-top:-2em;
}
select{
    margin-top:-2em;
}
img{
    height:45vh;
    margin-left:3rem;
    margin-top:4rem;
    width:45vw;
}
.button{
    margin-top:-2rem;
    width:8rem;
    align-item:center;
    display:flex;
    justify-content:center;
    margin-left:6rem;
}
`
;
export default AdminAddSubject
