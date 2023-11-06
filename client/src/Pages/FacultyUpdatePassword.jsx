import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import FacultyHomeHelper from '../Components/FacultyHomeHelper'
import { facultyUpdatePassword } from '../redux/action/facultyAction'
import styled from 'styled-components'



const FacultyUpdatePassword = () => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})

    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])
    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(facultyUpdatePassword({ registrationNumber: store.faculty.faculty.faculty.registrationNumber, oldPassword, newPassword, confirmNewPassword }))
    }
    useEffect(() => {
        
    }, [store.faculty])
    return (
        <Container>
        <div>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                <div className="container m-5">
                      <img src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7966.jpg?w=2000" alt="asda" />
                    <div className="row m-5">
                        <div className="col-md-6 m-auto">
                            <form noValidate onSubmit={formHandler} className='formclass'>
                                <div className="form-group">
                                    <input placeholder='Old Password' onChange={(e) => setOldPassword(e.target.value)} type="password" value={oldPassword} className={classnames("form-control",
                                        {
                                            'is-invalid': error.oldPassword

                                        })} id="emailId" />
                                    {error.oldPassword && (<div classNameName="invalid-feedback">{error.oldPassword}</div>)}
                                </div>
                                <div className="form-group">
                                    <input placeholder='New Password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className={classnames("form-control", {
                                        "is-invalid": error.newPassword
                                    })}  type="password" id="passwordId" />
                                    {error.newPassword && (<div classNameName="invalid-feedback">{error.newPassword}</div>)}
                                </div>
                                <div className="form-group">
                                    <input placeholder='Confirm New Password' onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} className={classnames("form-control", {
                                        "is-invalid": error.confirmNewPassword
                                    })} type="password" id="passwordCId" />
                                    {error.confirmNewPassword && (<div classNameName="invalid-feedback">{error.confirmNewPassword}</div>)}
                                </div>
                                <button type="submit" className="btn btn-info btn-block ">Update Password</button>
                            </form>
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
position: relative;
.container{
    width: 980px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background:lightgreen;
    border-radius: 10px;
    box-shadow: 10px 14px 22px -8px black;
    display: flex;
    overflow: hidden;
}
.formclass{ 
        height:61vh;
        margin-top:-2rem;
        padding:0px;   
        border-radius:15px;
        margin-left:-15rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin-right:18rem;
        }
        img{
            margin-left:-1rem;
            border-top-right-radius:50%;
        }
`;
export default FacultyUpdatePassword
