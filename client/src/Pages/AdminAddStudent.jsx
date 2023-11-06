import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddStudent } from '../redux/action/adminAction'
import AdminHomeHelper from '../Components/AdminHomeHelper'
import styled from 'styled-components'
import stnt from "./images/stnt.jpg"
import { ToastContainer,toast } from 'react-toastify'

const AdminAddStudent = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [section, setSection] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [studentMobileNumber, setContactNumber] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [fatherMobileNumber, setFatherContactNumber] = useState('')
    const [aadharCard, setAadharCard] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
   
     const toastOption = {
        position:"bottom-center",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
      }
      const handleSubmit3 =()=>{
        const {setName}=name;
        const {setEmail}= email;
        const {setYear} = year;
        const {setAadharCard}= aadharCard;
        const {stDepartment}= department;
        const {setDob}=dob;
        const {setFatherContactNumber}=fatherMobileNumber;
        const {setFatherName}=fatherName;
        const {setContactNumber}=studentMobileNumber;
        const {setGender}=gender;
        if(name===""){
        toast.error('please Enter StudentName',toastOption)
        return false;
        }else if(email===""){
            toast.error('please Enter email',toastOption)
            return false;
        }
        else if(year===""){
            toast.error('please Enter year',toastOption)
            return false;
        }
         else if(aadharCard===""){
            toast.error('please Enter aadharCard',toastOption)
            return false;
        }
        else if(department===""){
            toast.error('please Enter department',toastOption)
            return false;
        }
         else if(dob===""){
            toast.error('please Enter year',toastOption)
            return false;
        }
         else if(fatherMobileNumber===""){
            toast.error('please Enter fatherMobileNumber',toastOption)
            return false;
        }
        else if(fatherName===""){
            toast.error('please Enter fatherName',toastOption)
            return false;
        }
         else if(studentMobileNumber===""){
            toast.error('please Enter studentMobileNumber',toastOption)
            return false;
        }
        else if(gender===""){
            toast.error('please Enter gender',toastOption)
            return false;
        }
         return true;
      }
    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])
    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
       
        dispatch(adminAddStudent({
            name,
            email,
            year,
            department,
            fatherName,
            aadharCard,
            gender,
            section: section.toUpperCase(),
            dob: dob.split("-").reverse().join("-"),
            studentMobileNumber,
            fatherMobileNumber
        }))
    } 
  
    useEffect(() => {
        if (store.admin.adminAddStudentFlag) {
            setError({})
        }
    }, [store.admin.adminAddStudentFlag])

    useEffect(() => {
        if (store.error || store.admin.adminAddStudentFlag) {
            setIsLoading(false)
        }
    }, [store.error, store.admin.adminAddStudentFlag]);
   
    return (
        <Container>
        <div>
            {store.admin.isAuthenticated ? <><AdminHomeHelper />
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col list">
                            <form noValidate onSubmit={formHandler}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input placeholder='StudentName' onChange={(e) => setName(e.target.value)} type="text" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.name
                                                })} id="nameId" />
                                        </div>
                                        <div className="form-group">
                                            <input placeholder='Enter student Email' onChange={(e) => setEmail(e.target.value)} type="email" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.email
                                                })} id="emailId" />
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
                                        
                                        <div className="form-group">
                                         
                                            <input placeholder='Enter class section' onChange={(e) => setSection(e.target.value)} type="text" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.section
                                                })} id="sectionId" />
                                        </div>
                                        <div class="form-group">
                                           
                                            <input placeholder='Enter DOB' onChange={(e) => setDob(e.target.value)} type="date" className={classnames("form-control dop",
                                                {
                                                    'is-invalid': error.dob
                                                })} id="dobId" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        
                                        <div className="form-group">
                                           
                                            <select onChange={(e) => setGender(e.target.value)} class="form-control" id="genderId">
                                                <option>Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input placeholder='Enter MobileNumber' onChange={(e) => setContactNumber(e.target.value)} required type="number" class="form-control" id="numberId" />
                                        </div>
                                        <div className="form-group">

                                            <input placeholder='Enter FatherName' onChange={(e) => setFatherName(e.target.value)} type="text" class="form-control" id="fatherId" />
                                        </div>
                                        <div className="form-group">
                                           
                                            <input placeholder='Father Contact Number' onChange={(e) => setFatherContactNumber(e.target.value)} type="number" className="form-control" id="fathercnId" />
                                        </div>
                                        <div className="form-group">
                                         
                                            <input placeholder='AdharNumber' onChange={(e) => setAadharCard(e.target.value)} type="number" className="form-control" id="aadharId" />
                                        </div>
                                        {!isLoading && <button type="submit" onClick={handleSubmit3} className="btn btn-info button ">Add Student</button>}
                                    </div>
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
                           <img src={stnt} alt="sss" />
                    </div>
                </div></>:(history.push('/adminlogin'))}
           
            </div>

            <ToastContainer/>
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
.list{
    padding:25px 45px;
    margin-right:6rem;
}
input{
    width:12rem;
    background:radial-gradient(aqua, aqua);
    gap:2rem;
}
select{
    width:12rem;
    background:radial-gradient(black, black);
    gap:2rem;
       color:white;
    font-size:11px;
}
img{
    margin-top:1.9rem;
    margin-left:32rem;
    width:45vw;
    position:fixed;
}
.button{
    margin-left:2rem;
    margin-top:2rem;
}
input::placeholder{
    color:black;
    font-size:11px;
}
option{
    color:aqua;
    font-size:11px;
    background-color:red;
}
.dop{
color:black;
font-size:11px;
}
`;
export default AdminAddStudent
