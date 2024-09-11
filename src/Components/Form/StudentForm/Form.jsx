import { useState } from 'react'
import Header from '../../../BasicComponent/Header/Header'
import styles from './Form.module.css'
import '../../../index.css'
import { addDoc, collection} from 'firebase/firestore'
import { database } from '../../../Config/Firebase'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from "react-toastify";

const Form = ({Reg_Name}) => {
    const navigate=useNavigate()
    const [Firstname, setFirstname] = useState()
    const [Lastname, setLastname] = useState()
    const [Fathername, setfathername] = useState()
    const [Age, setAge] = useState()
    const [Class, setClass] = useState()
    const [DOB, setDOB] = useState()
    const [Gender, setGender] = useState()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const obj = {
            FirstName: Firstname,
            LastName: Lastname,
            fathername: Fathername,
            age: Age,
            class: Class,
            DOB: DOB,
            gender: Gender
        }
        try {
            const docRef = await addDoc(collection(database, "Student"),obj);
            toast.success(`Successfully Student Add!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            }),navigate('/Dashboard/Student/All-Student');
            // setDATA(true)
            
          } catch (e) {
            alert("Error is here" ,e)
          }
        setFirstname('')
        setLastname('')
        setfathername('')
        setAge('')
        setClass('')
        setDOB('')
        setGender('')

    }
    return (
        <>
            <Header />
            <div className={styles.Container}>
                <div className={styles.Center_div}>
                    <h1 className={styles.Form_heading}>{Reg_Name}</h1>
                    <form className={styles.Inputs_div} onSubmit={handleSubmit}>

                        <div className={styles.Other_inputs}>
                            <span>
                                <label htmlFor="Name">First Name:</label><br />
                                <input type="name" id="Name" value={Firstname} required placeholder="John" onChange={(e)=>setFirstname(e.target.value)} /><br />
                            </span>
                            <span>
                                <label htmlFor="LName">Last Name:</label><br />
                                <input type="name" id="LName" value={Lastname} required placeholder="Doe" onChange={(e) => setLastname(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="fathername">Father Name:</label><br />
                                <input type="text" id="fathername" value={Fathername} required name='fathername' placeholder="D/F" onChange={(e) => setfathername(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="Age">Age:</label><br />
                                <input type="text" maxLength="2" id="Age" value={Age} required placeholder="Enter Student Age" onChange={(e) => setAge(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="Class">Class:</label><br />
                                <input type="text" maxLength="2" id="Class" value={Class} required placeholder="Enter Class" onChange={(e) => setClass(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="Date">DOB:</label><br />
                                <input type="date" id="Date" placeholder="Date" value={DOB} required onChange={(e) => setDOB(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="Gender">Gender:</label><br />
                                <input type="text" id="Gender" placeholder="Enter student Gender" value={Gender} required onChange={(e) => setGender(e.target.value)} />
                            </span>
                            <button className={styles.submit_btn} type='submit' >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Form