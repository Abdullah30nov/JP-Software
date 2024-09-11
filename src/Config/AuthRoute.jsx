import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  return (
    !localStorage.getItem("userId")
    ? <Outlet /> : 
    <Navigate to={"/Dashboard"} />
  )
}

export default AuthRoute