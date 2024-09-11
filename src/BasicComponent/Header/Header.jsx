import './Header.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import '../../index.css'
import { NavItem } from 'react-bootstrap';
function Header() {
    const navigate=useNavigate()
  return (
    <>
    <Navbar expand="lg" className="navbar mb-5" fixed='top'>
      <Container className='container'>
        <Navbar.Brand className='color' onClick={()=>{navigate("/Dashboard")}}>School-Managment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Students" id="basic-nav-dropdown" >
              <NavDropdown.Item onClick={()=>{navigate('/Dashboard/Student/All-Student')}}>All Students</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate('/Dashboard/Students/Student-Registration')}}>Student Registration</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Teachers" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{navigate('/Dashboard/Teacher/All-Teacher')}}>All Teachers</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate('/Dashboard/Teachers/Teacher-Registration')}}>Teachers Registration</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Principle" id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={()=>{navigate('/Dashboard/Principle/All-Principle')}}>All Principle</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{navigate('/Dashboard/Principle/Principle-Registration')}}>Principle Registration</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Subject" id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={()=>{navigate('/Dashboard/Subject/Subject-List')}}>Subject List</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{navigate('/Dashboard/Subject/Add-Subject')}}>Add Suject</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Syllabus" id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={()=>{navigate('/Dashboard/Syllabus/Syllabus-List')}}>Syllabus List</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{navigate('/Dashboard/Syllabus/Add-Syllabus')}}>Add Syllabus</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fee" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{navigate('/Dashboard/Fee/Fee-Structure')}} >Fee Structure</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate('/Dashboard/Fee/Fee-Submittion')}}>Fee Submittion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </>
  );
}

export default Header