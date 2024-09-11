import { Box, Button, Container, Paper } from "@mui/material";
import './Signup.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../Config/Firebase";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { doc, setDoc } from "firebase/firestore";
import profileImg from './profile.png'
const Signup = () => {
    const [Name, setName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ShowPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!Name || !UserName || !Email || !Password) {
            toast.error('Please fill all the fields.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
            const user = userCredential.user;
            // Saving user data to Firestore
            await setDoc(doc(database, "NewUsers", user.uid), {
                id: user.uid,
                name: Name,
                username: UserName,
                email: Email,
                photoUrl:profileImg
            });

            toast.success('Successfully signed up!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            navigate('/');
        } catch (error) {
            console.error("Error signing up: ", error);
            toast.error('Credential error. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

        // Clear form fields
        setName('');
        setUserName('');
        setEmail('');
        setPassword('');
    }

    return (
        <Box className='Signup-main'>
            <Container className="Signup-container">
                <Paper className="Signup">
                    <h1 className="Signup_heading">Signup</h1>
                    <form onSubmit={handleSubmit} className="Signup_Field">
                        <input
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                            required
                            className="Input_Field"
                        /><br />
                        <input
                            type="text"
                            value={UserName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="User Name"
                            required
                            className="Input_Field"
                        /><br />
                        <input
                            type="email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="Input_Field"
                        /><br />
                        <input
                            type={ShowPassword ? "text" : "password"}
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="Input_Field"
                        /><br />
                        <div className="showpasswordcheck">
                            <input
                                type="checkbox"
                                checked={ShowPassword}
                                onChange={() => setShowPassword(!ShowPassword)}
                                className="checkBox"
                            />
                            <span className="Show_password">Show Password</span><br />
                        </div><br />
                        <Button type="submit" className="btn">Signup</Button>
                    </form>
                    <Button className="newAccount" onClick={() => navigate("/")}>
                        Already have an Account
                    </Button><br />
                </Paper>
            </Container>
        </Box>
    )
}

export default Signup;
