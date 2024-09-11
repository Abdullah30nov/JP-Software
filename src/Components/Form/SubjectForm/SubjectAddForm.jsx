import { Autocomplete, TextField } from '@mui/material'
import styles from './Subject.module.css'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../../../Config/Firebase'
import { useNavigate } from 'react-router-dom'
const SubjectAddForm = ({Reg_Name}) => {
    const [Day,setDay]=useState()
    const [Class,setClass]=useState()
    const [ClassEnd,setClassEnd]=useState()
    const [ClassStart,setClassStart]=useState()
    const [Subjects,setSubjects]=useState()
    const navigate=useNavigate()
    const top100Films = [
        { label: 'Monday'},
        { label: 'Tuesday' },
        { label: 'Wednesday' },
        { label: 'Thursday'},
        { label: 'Friday'},
        { label: 'Saturday'}
    ]
    const handleSubmit = async (e) => {
        e.preventDefault()
        const obj = {
            Subjects: Subjects,
            class: Class,
            ClassStart: ClassStart,
            ClassEnd: ClassEnd,
            Day: Day.label,
        }
        try {
            const docRef = await addDoc(collection(database, `${Reg_Name}`), obj);
            toast.success(`Successfully ${Reg_Name} Add!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,})
            , navigate(`/Dashboard/${Reg_Name}/${Reg_Name}-List`);

        } catch (e) {
            alert("Error is here", e)
        }
        setSubjects('')
        setClass('')
        setClassStart('')
        setClassEnd('')
        setDay('')
    }
  return (
    <>
    <div className={styles.Container}>
                <div className={styles.Center_div}>
                    <h1 className={styles.Form_heading}>{Reg_Name} Add</h1>
                    <form className={styles.Inputs_div} onSubmit={handleSubmit}>

                        <div className={styles.Other_inputs}>
                            <span>
                                <label htmlFor="Subject">Subject:</label><br />
                                <input type="text" id="Subject" value={Subjects} required placeholder="Subject" onChange={(e) => setSubjects(e.target.value)} /><br />
                            </span>
                            <span>
                                <label htmlFor="Class">Class:</label><br />
                                <input type="text" maxLength="2" id="Class" value={Class} required placeholder="Enter Class" onChange={(e) => setClass(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="ClassStart">Class Time Start:</label><br />
                                <input type="time" id="ClassStart" value={ClassStart} required placeholder="Class Time" onChange={(e) => setClassStart(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="ClassEnd">Class Time End:</label><br />
                                <input type="time" id="ClassEnd" value={ClassEnd} required placeholder="Class Time" onChange={(e) => setClassEnd(e.target.value)} />
                            </span>
                            <span>
                               <Autocomplete
                                    disablePortal
                                    options={top100Films}
                                    onChange={(event, newValue) => setDay(newValue)}
                                    renderInput={(params) => <TextField {...params} label="Day" />}
                                />
                            </span>
                            <button className={styles.submit_btn} type='submit' >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}

export default SubjectAddForm