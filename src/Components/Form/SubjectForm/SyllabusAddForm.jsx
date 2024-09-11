import styles from './Subject.module.css'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../../../Config/Firebase'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { Bounce, toast } from "react-toastify";

const SyllabusAddForm = ({ Reg_Name }) => {
    const [Class, setClass] = useState('')
    const [Subjects, setSubject] = useState('')
    const [file, setFile] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const obj = {
            Subjects: Subjects,
            class: Class,
            file: file  // Adjust according to how you want to handle file uploads
        }
        // console.log(obj)
        try {
            const docRef = await addDoc(collection(database, `${Reg_Name}`), obj)
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
            })
            navigate(`/Dashboard/${Reg_Name}/${Reg_Name}-List`)
        } 
        catch (e) {
            alert("Error: " + e.message)
        }
        setSubject('')
        setClass('')
        setFile(null)
    }
    const handleFileChange = (e) => {
        const fileurl=(e.target.files[0])
        const filewithUrl=URL.createObjectURL(fileurl)
        setFile(filewithUrl)
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Center_div}>
                <h1 className={styles.Form_heading}>{Reg_Name} Add</h1>
                <form className={styles.Inputs_div} onSubmit={handleSubmit}>
                    <div className={styles.Other_inputs}>
                        <span>
                            <label htmlFor="Subject">Subject:</label><br />
                            <input type="text" id="Subject" value={Subjects} required placeholder="Subject" onChange={(e) => setSubject(e.target.value)} /><br />
                        </span>
                        <span>
                            <label htmlFor="Class">Class:</label><br />
                            <input type="text" maxLength="2" id="Class" value={Class} required placeholder="Enter Class" onChange={(e) => setClass(e.target.value)} />
                        </span>
                        {/* <span>
                            <label htmlFor="ClassStart">Class Time Start:</label><br />
                            <input type="time" id="ClassStart" value={ClassStart} required placeholder="Class Time" onChange={(e) => setClassStart(e.target.value)} />
                        </span> */}
                        <span>
                            <Button
                                type="button" 
                                variant='contained'
                                className={styles.file} 
                                onClick={() => document.getElementById('fileInput').click()}
                            >
                                Add PDF
                            </Button>
                            <input 
                                type="file" 
                                id="fileInput" 
                                className={styles.hidden_input} 
                                onChange={handleFileChange}
                            />
                        </span>
                        <button className={styles.submit_btn} type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SyllabusAddForm
