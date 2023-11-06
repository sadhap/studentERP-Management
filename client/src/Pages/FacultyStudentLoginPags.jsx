import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { facultyLogin } from '../redux/action/facultyAction'
import { studentLogin } from '../redux/action/studentAction'
import classnames from 'classnames'
import '../Style/facultyStudentLogin.css'
import pkrlogo from "./images/pkrlogo.jpg"
import styled from 'styled-components'




const FacultyStudentLoginPags = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const [facultyRegNum, setFacultyRegNum] = useState('')
    const [facultyPassword, setFacultyPassword] = useState('')
    const [studentRegNum, setStudentRegNum] = useState('')
    const [studentPassword, setStudentPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [errorsHelper, setErrorsHelper] = useState({})
    const [isFacultyLoading, setIsFacultyLoading] = useState(false)
    const [isStudentLoading, setIsStudentLoading] = useState(false)
    

    const history = useHistory()

    useEffect(() => {
        if (store.faculty.isAuthenticated) {
            history.push('/faculty')
        }
    }, [store.faculty.isAuthenticated])

    useEffect(() => {
        if (store.error) {
            setErrors(store.error)
        }
    }, [store.error])
    useEffect(() => {
        if (store.student.isAuthenticated) {
            history.push('/home')
        }
    }, [store.student.isAuthenticated])

    useEffect(() => {
        if (store.errorHelper) {
            setErrorsHelper(store.errorHelper)
        }
    }, [store.errorHelper])






    const facultyFormHandler = (e) => {
        e.preventDefault()
        let registrationNumber;
        let password;
        setIsFacultyLoading(true)
        dispatch(facultyLogin({ registrationNumber: facultyRegNum, password: facultyPassword }))
    }

    useEffect(() => {
        if (store.error || store.faculty.isAuthenticated) {
            setIsFacultyLoading(false)
        }
        else {
            setIsFacultyLoading(true)
        }
    }, [store.error, store.faculty.isAuthenticated])

    const studentFormHandler = (e) => {
        e.preventDefault()
        let registrationNumber;
        let password;
        setIsStudentLoading(true)
        dispatch(studentLogin({ registrationNumber: studentRegNum, password: studentPassword }))
    }

    useEffect(() => {
        if (store.errorHelper ||
            store.student.isAuthenticated) {
            setIsStudentLoading(false)
        }
        else {
            setIsStudentLoading(false)
        }

    }, [store.errorHelper, store.student.isAuthenticated])

    return (
        <>
              <header className='header'>
    <img src={pkrlogo} alt="logo" className='logo'/>
    <h1>PKR ARTS COLLEGE FOR WOMENS</h1>
    <ul>
      <li className='active'><span data-hover="Home"><Link to='/'>Home</Link></span></li>
      <li><span data-hover="About">About</span></li>
      <li><span data-hover="Contact">Contact</span></li>
      <li><span data-hover="Gallery">Gallery</span></li>
      <li><span data-hover="Notes"><Link to='/adminlogin'>Admin</Link></span></li>
    </ul>
  </header>
  <Container>        <div className="container-fluid container">
            <div className="row" id="trail">
                <div className="col-md-0">
                <div className="col-md-0">
                    <div className="row m-5">
                        <div className="col-md-25 m-auto border" style={{ backgroundColor: "grey", borderRadius: "1.2rem", padding: "1rem 1rem 0rem 1rem" }}>
                            <div>
                                <h3 className="text-center "style={{ color: "white"}}>FACULTY</h3>
                                <form noValidate onSubmit={facultyFormHandler}>
                                    <div className="form-group">
                                        
                                        <input placeholder='Registration Number' onChange={(e) => setFacultyRegNum(e.target.value)} type="text" value={facultyRegNum} className={classnames('form-control', {
                                            'is-invalid': errors.registrationNumber
                                        })}
                                            id="facRegId" />
                                        {errors.registrationNumber && (
                                            <div className="invalid-feedback">{errors.registrationNumber}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                      
                                        <input placeholder='Password' onChange={(e) => setFacultyPassword(e.target.value)} value={facultyPassword} className={classnames("form-control", {
                                            'is-invalid': errors.password
                                        })}
                                            type="password" id="passwordFacId" />
                                        {errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )}
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-1">
                                            {
                                                isFacultyLoading && <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    {!isFacultyLoading && <button type="submit" className="btn btn-info btn-block"style={{background:'orange'}}>Login</button>}
                                </form>
                                <p className="text-center mt-2 "><Link className="text-center" to="/forgotPassword/faculty">Forgot Password</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-md-25 m-auto border" style={{ backgroundColor: "grey", borderRadius: "1.2rem", padding: "1rem 1rem 0rem 1rem" }}>
                            <div>
                                <h3 className="text-center" style={{ color: "white"}}>STUDENT</h3>
                                <form noValidate onSubmit={studentFormHandler}>
                                    <div className="form-group">
                                   
                                        <input placeholder='student register number' onChange={(e) => setStudentRegNum(e.target.value)} type="text" value={studentRegNum} className={classnames('form-control', {
                                            'is-invalid': errorsHelper.registrationNumber
                                        })}
                                            id="studentId" />
                                        {errorsHelper.registrationNumber && (
                                            <div className="invalid-feedback">{errorsHelper.registrationNumber}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                     
                                        <input placeholder='Password' onChange={(e) => setStudentPassword(e.target.value)} value={studentPassword} className={classnames("form-control", {
                                            'is-invalid': errorsHelper.password
                                        })}
                                            type="password" id="passwordId" />
                                        {errorsHelper.password && (
                                            <div className="invalid-feedback">{errorsHelper.password}</div>
                                        )}
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-1">
                                            {
                                                isStudentLoading && <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {!isStudentLoading && <button type="submit" className="btn btn-info btn-block " style={{background:'rgb(192, 7, 78)',border:'none'}}>Login</button>}

                                </form>
                                <p className="text-center"><Link className="text-center" to="/forgotPassword/student">Forgot Password</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Container>

        <footer>
  <p>Created with <i className="fa fa-heart"></i> by 
  <a href="https://florin-pop.com">sadha</a></p>
   </footer>
        </>
    )
}
const Container = styled.div`
height: 550px;
width: 100%;
background: radial-gradient(#653d84, #332042);
position: relative;
input::placeholder{
    color:bla;
    font-weight:500;
    font-size:14px;
}
.container{
    width: 700px;
    height: 420px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 4px 22px -8px #0004;
    display: flex;
    overflow: hidden;
    flex-direction:row;
}
@media screen and (min-width: 320px) and (max-width: 900px){

height:95vh;
width: 100%;
background: radial-gradient(white, white);
position: relative;
input::placeholder{
    color:black;
    font-weight:500;
    font-size:14px;
}
.container{
    width: 900px;
    height: 700px;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%,-50%);
    background:pink;
    border-radius: 10px;
    box-shadow: 1px 4px 22px -8px #0004;
    display: flex;
    overflow: hidden;
    flex-direction:row;
}
}
`;
export default FacultyStudentLoginPags
