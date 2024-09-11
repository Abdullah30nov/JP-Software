import './AllStudent.scss';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../../Config/Firebase';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../../BasicComponent/Header/Header';
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SimpleBottomNavigation from '../../../Config/Bottomnav';

const AllStudent = () => {
  const [students, setStudents] = useState([]);
  const navigate=useNavigate()
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, "Student"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        firstName: doc.data().FirstName,
        lastName: doc.data().LastName,
        fatherName: doc.data().fathername,
        age: doc.data().age,
        class: doc.data().class,
        gender: doc.data().gender,
      }));
      setStudents(data);
      const optionsData = data.map(item => ({
        id: item.id,
        label: `${item.firstName} ${item.lastName}`
      }));
      setOptions(optionsData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(students)

  const columns = [
    { field: 'id', headerName: 'RollNo', width: 200 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'fatherName', headerName: 'Father Name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 100 },
    { field: 'class', headerName: 'Class', type: 'number', width: 100 },
    { field: 'gender', headerName: 'Gender', width: 100 },
  ];
const AddStd=()=>{
  navigate('/Dashboard/Students/Student-Registration')
}
const handleViewButtonClick = () => {
  if (selectedOption) {
    console.log('Selected Student ID:', selectedOption.id);
    navigate(`/Dashboard/Student/Student-Details/${selectedOption.id}`)
  } else {
    alert('No Student selected');
  }
};
  return (
    <>
    <Header/>
    <Box className='main'>
    <Box className='getPrin'>
        <Autocomplete
          disablePortal
          options={options}
          getOptionLabel={(option) => option.id}
          onChange={(event, newValue) => setSelectedOption(newValue)}
          renderInput={(params) => <TextField {...params} label="Student ID" />}
          sx={{ width: 300 }}
          />
        <PersonSearchIcon className='btn' onClick={handleViewButtonClick}/>
          </Box>
    <h1 className='Form_heading'>Student List <Button variant='contained' className='btn' onClick={AddStd}>Add Student</Button></h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={students}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ overflow: 'clip' }}
          />
      </div>
          </Box>
          <SimpleBottomNavigation/>
    </>
  );
};

export default AllStudent;
