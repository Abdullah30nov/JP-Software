import { Box, Button } from "@mui/material";
import  Header  from "../../BasicComponent/Header/Header";
import './Dashboard.scss'
import '../../index.css'
import { useNavigate } from "react-router-dom";
import SimpleBottomNavigation from "../../Config/Bottomnav";
export default function Dashboard(){
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.clear()
        navigate('/')
    }
    return(
        <>
        <Header/>
        <Box className='main'>
            <Box className="containe">
            <h1>School Managment Software</h1><br />
            <Box className='btn_group'>
                <Button  onClick={()=>{navigate('/Dashboard/Student/All-Student')}} className="btn">Student list</Button>
                <Button className="btn" onClick={logout}>Logout</Button>
            </Box>
            </Box>
            <SimpleBottomNavigation/>
        </Box>
        </>
    )
}