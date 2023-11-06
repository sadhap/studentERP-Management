import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddFaculty } from '../redux/action/adminAction'
import AdminHomeHelper from '../Components/AdminHomeHelper'
import styled from 'styled-components'
import faculty from "./images/faculty.jpg"
import { ToastContainer,toast } from 'react-toastify'
const AdminAddFaculty = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [designation, setDesignation] = useState('')
    const [facultyMobileNUmber, setFacultyMobileNumber] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [aadharCard, setAadharCard] = useState('')
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
        dispatch(adminAddFaculty({
            name,
            email,
            designation,
            facultyMobileNUmber,
            department,
            aadharCard,
            gender,
            dob: dob.split("-").reverse().join("-")}))
    }
    const toastOption = {
    position:"top-center",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
    const submitHandleEvent =()=>{

        const {setName} = name;
        const {setEmail}=  email;
        const {setDesignation} = designation;
        const {setFacultyMobileNumber} = facultyMobileNUmber;
        const {setDepartment} = department;
        const {setAadharCard}= aadharCard;
        const {setGender}=gender;
        const {setDob}=dob;
        if(name === ""){
  toast.error('Please enter username',toastOption)
  return false;
        }else if(email === "") {
            toast.error('Please enter email',toastOption)
            return false;
        }else if(designation === ""){
            toast.error('Please enter designation',toastOption)
              return false;
        }else if(facultyMobileNUmber === ""){
            toast.error('Please enter facultyMobileNUmber',toastOption)
              return false;
        }else if(department===""){
            toast.error('Please enter department',toastOption)
            return false;
        }else if(aadharCard===""){
            toast.error('Please enter aadharCard',toastOption)  
            return false;
        }else if(gender===""){
            toast.error('Please enter gender',toastOption)  
              return false;
        }else if(dob===""){
            toast.error('Please enter gender',toastOption)  
            return false;
        }
        return true;
    }
    useEffect(() => {
        if (store.admin.adminAddFacultyFlag) {
            setError({})
        }
    }, [store.admin.adminAddFacultyFlag])

    useEffect(() => {
        if (store.error || store.admin.adminAddFacultyFlag) {
            setIsLoading(false)
        }
        else {
            setIsLoading(true)
        }
    },[store.error,store.admin.adminAddFacultyFlag])
    return (
       <Container>
        <div>
            {store.admin.isAuthenticated ? ( <> <AdminHomeHelper/>
                <div className="container mt-5">
                            <form noValidate onSubmit={formHandler}>
                                            <div className="list">                      
                             <input placeholder='UserName' onChange={(e) => setName(e.target.value)} type="text" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.name
                                                })} id="nameId" />
                                          
                             <input placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} type="email" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.email
                                                })} id="emailId" />
                                           
                                            <select name="role" onChange={(e) => setDesignation(e.target.value)} className={classnames("form-control",
                                                {
                                                    'is-invalid': error.designation
                                                })} id="designationId">
                                                <option>Roll</option>
                                                <option value="Assistant Professor">Assistant Professor</option>
                                                <option value="Senior Professer">Senior Professer</option>
                                            </select>
                                            
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
                                          
                                            <input  onChange={(e) => setDob(e.target.value)} type="date" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.dob
                                                })} id="dobId" />
                                           
    
                                            <select onChange={(e) => setGender(e.target.value)} className="form-control" id="genderId">
                                                <option style={{color:"white"}}>Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                         <input placeholder='Enter MobileNumber' onChange={(e) => setFacultyMobileNumber(e.target.value)} type="number" className="form-control" id="numberId" />
                                         <input placeholder='Enter AdharNumber' onChange={(e) => setAadharCard(e.target.value)} type="number" className="form-control" id="aadharId" />
                                        {
                                            isLoading && <div class="spinner-border text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        }
                                {!isLoading && <button type="submit" onClick={submitHandleEvent} className="btn-submit button">Add Faculty</button>}
                                </div> 
                                
                            </form>
                            <img src={faculty} alt="sads" />
                               
                    </div></> ):(history.push('/adminlogin'))}
             
        </div>
        <ToastContainer/>
        </Container>

    )
}
const Container= styled.div`
height: 550px;
width: 100%;
background: radial-gradient(#653d84, #332042);
position: relative;
input::placeholder{
    color:white;
    font-weight:500;
    font-size:14px;
}
.list{
    background:grey;
    height:100vh;
    width:25vw;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    flex-wrap:wrap;
    padding:19px 25px;
}
.container{
    width: 900px;
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
input{
    background: radial-gradient(#653d84, #332042);
    height:35px;
    padding:5px 12px;
}
img{
    height:50vh;
    width:50vw;
    margin-top:7rem;
    justify-content:center;
    display:flex;
}
.button{
    background:white;
    color:blue;
    justify-content:center;
    display:flex;
    font-size:8px
    height:40px;
    width:105px;
    align-item:center;
    margin-left:5rem;
    border-radius:5px;
}
.invalid-feedback{
    font-size:5px;
}
`;export default AdminAddFaculty
