import { useState } from 'react'
import Header from '../../../BasicComponent/Header/Header'
import styles from './Teacherform.module.css'
import '../../../index.css'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../../../Config/Firebase'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from "react-toastify";
const TeacherForm = ({Reg_Name}) => {
    const [Firstname, setFirstname] = useState()
    const [Lastname, setLastname] = useState()
    const [Fathername, setfathername] = useState()
    const [Age, setAge] = useState()
    const [Experience, setExperience] = useState()
    const [Qualification, setQualification] = useState()
    const [Gender, setGender] = useState()
    const navigate=useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const obj = {
            FirstName: Firstname,
            LastName: Lastname,
            fathername: Fathername,
            age: Age,
            Experience:Experience,
            Qualification:Qualification,
            gender: Gender
        }
        try {
            const docRef = await addDoc(collection(database, `${Reg_Name}`),obj);
            toast.success(`Successfully ${Reg_Name} Add!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            }),navigate(`/Dashboard/${Reg_Name}/All-${Reg_Name}`);
            
          } catch (e) {
            alert("Error is here" ,e)
          }
        setFirstname('')
        setLastname('')
        setfathername('')
        setExperience('')
        setQualification('')
        setAge('')
        setGender('')
    }
    return (
        <>
            <Header />
            <div className={styles.Container}>
                <div className={styles.Center_div}>
                    <h1 className={styles.Form_heading}>{Reg_Name} Registration</h1>
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
                                <input type="text" maxLength="2" id="Age" value={Age} required placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="Experience">Experience:</label><br />
                                <input type="text" maxLength="2" id="Experience" value={Experience} required placeholder="year" onChange={(e) => setExperience(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="Qualification">Qualification:</label><br />
                                <input type="text" id="Qualification" placeholder="Qualification" value={Qualification} required onChange={(e) => setQualification(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="Gender">Gender:</label><br />
                                <input type="text" id="Gender" placeholder="Gender" value={Gender} required onChange={(e) => setGender(e.target.value)} />
                            </span>
                            <button className={styles.submit_btn} type='submit' >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default TeacherForm