import './AllSubject.scss';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../../Config/Firebase';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../../BasicComponent/Header/Header';
import {  Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
const AllSubject = () => {
  const [subject, setSubject] = useState([]);
  const {name}=useParams()
  console.log(name)
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, name));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id.slice(0,11),
        Class:doc.data().class,
        ClassEnd:doc.data().ClassEnd +' am',
        ClassStart:doc.data().ClassStart +' am',
        Subject:doc.data().Subjects,
        Day:doc.data().Day,
      }
      ));
setSubject(data);
    } catch (error) {
  console.log(error);
}
  };
const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'Subject', headerName: 'Subjects', width: 130 },
  { field: 'Class', headerName: 'Class', width: 130 },
  { field: 'Day', headerName: 'Day', width: 130 },
  { field: 'ClassStart', headerName: 'Class Start', width: 130 },
  { field: 'ClassEnd', headerName: 'Class End', width: 130 },
];
const AddSub = () => {
  navigate(`/Dashboard/${name}/Add-Subject`);
};
return (
  <>
    <Header />
    <Box className='main'>
      <h1 className='Form_heading'>
        {name} List
        <Button variant='contained' className='btn' onClick={AddSub}>Add {name}</Button>
      </h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={subject}
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
export default AllSubject;
