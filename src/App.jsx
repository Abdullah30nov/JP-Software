import { Route, Routes } from 'react-router-dom'
import Login from "./SingleUse/Login/Login"
import Signup from "./SingleUse/Signup/Signup"
import Dashboard from './SingleUse/DashBoard/Dashboard'
import AllStudent from './SharedComponents/Student/AllStudent/AllStudent'
import StudentRegistration from './SharedComponents/Student/StudentRegistration/StudentRegistration'
import AllTeacher from './SharedComponents/Teacher/AllTeacher/AllTeacher'
import AddTeacher from './SharedComponents/Teacher/AddTeacher/AddTeacher'
import AllSubject from './SharedComponents/Subjects/AllSubject/AllSubject'
import AddSubject from './SharedComponents/Subjects/SubjectAdd/SubjectAdd'
import AllPrinciple from './SharedComponents/Principle/AllPrinciple/AllPrinciple'
import PrincipleRegistration from './SharedComponents/Principle/PrincipleRegistration/PrincipleRegistration'
import FeesStructure from './SharedComponents/Fees/FeesStructure/FeesStructure'
// import FeesSubmittion from './SharedComponents/Fees/FeesSubmittion/FeesSubmittion'
import IDCard from './SingleUse/IDCard/IDCard'
import SyllabusList from './SharedComponents/Syllabus/SyllabusList/SyllabusList'
import SyllabusAdd from './SharedComponents/Syllabus/SyllabusAdd/SyllabusAdd'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthRoute from './Config/AuthRoute'
import ProtectedRoute from './Config/ProtectedRoute'
import "react-multi-carousel/lib/styles.css";
import FeesSubmittion from './SharedComponents/Fees/FeesSubmittion/FeesSubmittion'
import Profile from './SingleUse/Profile/Profile'
import Setting from './SingleUse/Settings/Setting'
function App() {

  return (
    <>
      <Routes>
        {/* <Route></Route> */}
        <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Route>
        <Route element={<ProtectedRoute />}>
        <Route index element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Dashboard/Student/All-Student' element={<AllStudent />} />
        <Route path='/Dashboard/Students/Student-Registration' element={<StudentRegistration />} />
        <Route path='/Dashboard/Teacher/All-Teacher' element={<AllTeacher />} />
        <Route path='/Dashboard/Teachers/Teacher-Registration' element={<AddTeacher />} />
        <Route path='/Dashboard/Principle/All-Principle' element={<AllPrinciple />} />
        <Route path='/Dashboard/Principle/Principle-Registration' element={<PrincipleRegistration />} />
        <Route path='/Dashboard/:name/Subject-List' element={<AllSubject />} />
        <Route path='/Dashboard/:name/Add-Subject' element={<AddSubject />} />
        <Route path='/Dashboard/:name/Syllabus-List' element={<SyllabusList />} />
        <Route path='/Dashboard/:name/Add-Syllabus' element={<SyllabusAdd />} />
        <Route path='/Dashboard/:name/Fee-Structure' element={<FeesStructure />} />
        <Route path='/Dashboard/:name/Fee-Submittion' element={<FeesSubmittion />} />
        <Route path='/Dashboard/Profile' element={<Profile />} />
        <Route path='/Dashboard/Setting' element={<Setting />} />
        <Route path='/Dashboard/:name/Principle-Details/:id' element={<IDCard />} />
        <Route path='/Dashboard/:name/Teacher-Details/:id' element={<IDCard />} />
        <Route path='/Dashboard/:name/Student-Details/:id' element={<IDCard />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
/>
      {/* Same as */}
      <ToastContainer />
    </>
  )
}
export default App