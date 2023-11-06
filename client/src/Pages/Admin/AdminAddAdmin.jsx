import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddAdmin } from '../../redux/action/adminAction'
import AdminHomeHelper from '../../Components/AdminHomeHelper'
import styled from 'styled-components'


const AdminAddAdmin = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [dob, setDob] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
        else {
            setError({})
        }
    }, [store.error])
    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminAddAdmin({
            name,
            email,
            department,
            contactNumber,
            dob: dob.split("-").reverse().join("-")
        }))
    }

    useEffect(() => {
        if (store.admin.adminAddAdminFlag) {
            setError({})
        }
    }, [store.admin.adminAddAdminFlag])

    useEffect(() => {
        if (store.error || store.admin.adminAddAdminFlag) {
            setIsLoading(false)
        }
        else {
            setIsLoading(true)
        }
    }, [store.error, store.admin.adminAddAdminFlag])

    return (
    <Container>
        <div>
            {store.admin.isAuthenticated ? (<> 
                <AdminHomeHelper />
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col">
                            <form noValidate onSubmit={formHandler} className='form'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input placeholder='Admin Name' onChange={(e) => setName(e.target.value)} type="text" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.name
                                                })} id="nameId" />
                                            {error.name && (<div className="invalid-feedback">{error.name}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} type="email" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.email
                                                })} id="emailId" />
                                            {error.email && (<div className="invalid-feedback">{error.email}</div>)}
                                        </div>

                                        <div className="form-group department">
                    
                                            <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                                {
                                                    'is-invalid': error.department
                                                })} id="departmentId">
                                                <option>department</option>
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
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input placeholder='DOB' onChange={(e) => setDob(e.target.value)} type="date" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.dob
                                                })} id="dobId" />
                                            {error.dob && (<div className="invalid-feedback">{error.dob}</div>)}
                                        </div>
                                        <div className="form-group">                                   
                                            <input placeholder='Contact Number' onChange={(e) => setContactNumber(e.target.value)} type="number" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.contactNumber
                                                })} id="numberId" />
                                            {error.contactNumber && (<div className="invalid-feedback">{error.contactNumber}</div>)}
                                        </div>
                                    </div>
                                    {!isLoading && <button type="submit" className="btn btn-info button ">Add Admin</button>}
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
                                 
                            </form>
                        </div>
                    </div>
                </div></>) : (history.push('/'))}

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
width: 500px;
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
padding:35px;
}
.department{
    margin-left:8rem;
    width:100%;
    margin-top:2rem;
}
.form{
    height:55vh;
    padding:15px;
    background: radial-gradient(#653d84, #332042);
    border-bottom-left-radius:55%;
}
.button{
    margin-top:2rem;
    margin-left:2rem;
    width:50%;
}
`;
export default AdminAddAdmin

