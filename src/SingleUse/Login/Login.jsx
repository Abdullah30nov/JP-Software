import { Box, Button, Container, Paper } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Login.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../../Config/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import '../../index.css'
import { Bounce, toast } from "react-toastify";
import { doc, getDoc, setDoc } from "firebase/firestore";
export default function Login() {
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [ShowPassword, setShowPassword] = useState(true)
    const navigate = useNavigate()

    //Login With Email Start
    function handleSubmit(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, Email, Password)
            .then(async (userCredential) => {
                localStorage.setItem("userId", userCredential.user.uid);
                const getData = await getDoc(
                    doc(database, "NewUsers", userCredential.user.uid)
                );
                localStorage.setItem("userData", JSON.stringify(getData.data()));
                toast.success('Successfully Login', {
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
                navigate('/Dashboard')
            })
            .catch((error) => {
                toast.error('Try Again', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            });
        setEmail('')
        setPassword('')
    }
    //Login With Email End

    //Login With Google Start
    function LoginWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async(result) => {
                console.log(result.user)
                await setDoc(doc(database, "NewUsers", result.user.uid), {
                    id: result.user.uid,
                    name: result.user.displayName,
                    username: result.user.displayName,
                    email: result.user.email,
                    photoUrl:result.user.photoURL
                });
                localStorage.setItem('userId', result.user.uid)
                const getData = await getDoc(
                    doc(database, "NewUsers", result.user.uid)
                );
                localStorage.setItem("userData", JSON.stringify(getData.data()));
                toast.success('Successfully Login', {
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
                navigate("/Dashboard")
            }).catch((error) => {
                toast.error('Try Again', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            });
    }
    //Login With Google End

    //Login With Github Start
    function LoginWithGithub() {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then(async(result) => {
                console.log(result.user)
                await setDoc(doc(database, "NewUsers", result.user.uid), {
                    id: result.user.uid,
                    name: result.user.displayName,
                    username: result.user.reloadUserInfo.screenName,
                    email: result.user.email,
                    photoUrl:result.user.photoURL
                });
                localStorage.setItem('userId', result.user.uid)
                const getData = await getDoc(
                    doc(database, "NewUsers", result.user.uid)
                );
                localStorage.setItem("userData", JSON.stringify(getData.data()));
                toast.success('Successfully Login', {
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
                navigate("/Dashboard")
            }).catch((error) => {
                toast.error('Try Again', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            });

    }
    //Login With Github End
    return (
        <>
            <Box className='login-main'>
                <Container className="login-container">
                    <Paper className="login">
                        <h1 className="login-heading">Login</h1>
                        <form action="" onSubmit={handleSubmit} className="Login_Field">
                            <input type="Email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                className="Input_Field" /><br />
                            {
                                ShowPassword ? <>
                                    <input
                                        type="Password"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        required
                                        className="Input_Field" />
                                </> :
                                    <>
                                        <input
                                            type="text"
                                            value={Password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                            required
                                            className="Input_Field" />
                                    </>
                            }
                            <br />
                            <div className="showpasswordcheck">
                                <input type="checkbox" onClick={() => { setShowPassword(!ShowPassword) }} className="checkBox" />
                                <span className="Show_password">
                                    Show Password</span><br />
                            </div><br />
                            <Button type="Submit" className="btn">Login</Button>
                            <Box className="Link">
                                <GoogleIcon className="icon" onClick={LoginWithGoogle} />
                                <GitHubIcon className="icon" onClick={LoginWithGithub} />
                            </Box>
                            <Button className="newAccount" onClick={() => navigate('/Signup')}>
                                Create new Account
                            </Button><br />
                        </form>
                    </Paper>
                </Container>
            </Box>
        </>
    )
}