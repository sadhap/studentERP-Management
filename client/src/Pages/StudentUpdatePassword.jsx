import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import classnames from 'classnames'
import HomeHelper from '../Components/HomeHelper'
import { studentUpdatePassword } from '../redux/action/studentAction'
import styled from 'styled-components'



const StudentUpdatePassword = () => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [error, setError] = useState({})

    useEffect(() => {
        if (store.errorHelper) {
            setError(store.errorHelper)
            console.log(store.errorHelper)
        }
    }, [store.errorHelper])
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(studentUpdatePassword({ registrationNumber: store.student.student.student.registrationNumber, oldPassword, newPassword, confirmNewPassword }))
    }
    return (
        <Container>
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container m-5">
                    <img src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7966.jpg?w=2000" alt="asda" />
                    <div className="row ">
                        <div className="col-md-5 m-auto">
                            <form noValidate onSubmit={formHandler} className='formclass'>
                                <div className="form-group">
                                    <input placeholder='Old Password' onChange={(e) => setOldPassword(e.target.value)} type="password" value={oldPassword} className={classnames("form-control",
                                        {
                                            'is-invalid': error.oldPassword

                                        })} id="emailId" />
                                    {error.oldPassword && (<div className="invalid-feedback">{error.oldPassword}</div>)}
                                </div>
                                <div className="form-group">
                                    <input placeholder='New Password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className={classnames("form-control", {
                                        "is-invalid": error.newPassword
                                    })}   id="passwordId" />
                                    {error.newPassword && (<div className="invalid-feedback">{error.newPassword}</div>)}
                                </div>
                                <div className="form-group">
                                    <input placeholder='Confirm New Password' onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} className={classnames("form-control", {
                                        "is-invalid": error.confirmNewPassword
                                    })} type ="password" id="passwordCId" />
                                    {error.confirmNewPassword && (<div className="invalid-feedback">{error.confirmNewPassword}</div>)}
                                </div>
                                <button type="submit" class="btn btn-info btn-block ">Update Password</button>
                            </form>
                        </div>
                    </div>
                </div></> : (history.push('/'))}

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
        padding:10px;   
        border-radius:15px;
        margin-left:-10rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin-right:8rem;
        }
        img{
            margin-left:-1rem;
            border-top-right-radius:50%;
        }
`
;
export default StudentUpdatePassword
