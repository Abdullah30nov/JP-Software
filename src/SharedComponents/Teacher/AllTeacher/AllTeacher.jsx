// import './AllTeacher.scss'
// const AllTeacher = () => {
//   return (
//     <div>AllTeacher</div>
//   )
// }

// export default AllTeacher
import './AllTeacher.scss';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../../Config/Firebase';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../../BasicComponent/Header/Header';
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
const AllTeacher = () => {
  const [principle, setPrinciple] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [display,setDisplay]=useState('none')
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, "Teacher"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        firstName: doc.data().FirstName,
        lastName: doc.data().LastName,
        fatherName: doc.data().fathername,
        age: doc.data().age,
        experience: `${doc.data().Experience} Years`,
        qualification: doc.data().Qualification,
        gender: doc.data().gender
      }));

      setPrinciple(data);
      const optionsData = data.map(item => ({
        id: item.id,
        label: `${item.firstName} ${item.lastName}`
      }));
      setOptions(optionsData);

    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'fatherName', headerName: 'Father Name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 100 },
    { field: 'experience', headerName: 'Experience', type: 'number', width: 100 },
    { field: 'qualification', headerName: 'Qualification', width: 100 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    // { field: 'Button', headerName: 'GetCard', width: 100 },
  ];

  const AddStd = () => {
    navigate('/Dashboard/Teachers/Teacher-Registration');
  };

  const handleViewButtonClick = () => {
    // setDisplay('flex')
    if (selectedOption) {
      console.log('Selected Principle ID:', selectedOption.id);
      navigate(`/Dashboard/${'Teacher'}/Teacher-Details/${selectedOption.id}`)
    } else {
      console.log('No principle selected');
    }
  };

  return (
    <>
      <Header />
      <Box className='main'>
        <Box className='getPrin'>
        <Autocomplete
          disablePortal
          options={options}
          getOptionLabel={(option) => option.id}
          onChange={(event, newValue) => setSelectedOption(newValue)}
          renderInput={(params) => <TextField {...params} label="Teacher ID" />}
          sx={{ width: 300 }}
          />
        {/* <Button className='btn' variant='contained' onClick={handleViewButtonClick}>View</Button> */}
        <PersonSearchIcon className='btn' onClick={handleViewButtonClick}/>
          </Box>
        <h1 className='Form_heading'>
          Teacher List
          <Button variant='contained' className='btn' onClick={AddStd}>Add Teacher</Button>
        </h1>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={principle}
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
    </>
  );
};

export default AllTeacher;