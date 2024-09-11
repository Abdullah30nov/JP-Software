// import './SyllabusList.scss'
// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { database } from '../../../Config/Firebase';
// import { DataGrid } from '@mui/x-data-grid';
// import Header from '../../../BasicComponent/Header/Header';
// import { Box, Button } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';

// const SyllabusList = () => {
//   const [Syllabus, setSyllabus] = useState([]);
//   const { name } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(database, name));
//       const data = querySnapshot.docs.map(doc => ({
//         id: doc.id.slice(0, 3),
//         Class: doc.data().class,
//         Subject: doc.data().Subjects,
//         File: doc.data().file
//       }));
//       setSyllabus(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleButtonClick = (fileUrl) => {
//     window.open(fileUrl, '_blank');
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 60 },
//     { field: 'Subject', headerName: 'Subjects', width: 130 },
//     { field: 'Class', headerName: 'Class', width: 130 },
//     { field: 'File', headerName: 'PDF', width: 250 },
//     {
//       field: 'Button',
//       headerName: 'Download',
//       width: 150,
//       renderCell: (params) => (
//         <Button
//           variant="contained"
//           className='btn'
//           onClick={() => handleButtonClick(params.row.File)}
//         >
//           DownLoad PDF
//         </Button>
//       )
//     },
//   ];

//   const AddSub = () => {
//     navigate(`/Dashboard/${name}/Add-Syllabus`);
//   };

//   return (
//     <>
//       <Header />
//       <Box className='main'>
//         <h1 className='Form_heading'>
//           {name} List
//           <Button variant='contained' className='btn' onClick={AddSub}>Add {name}</Button>
//         </h1>
//         <div style={{ height: 400, width: '100%' }}>
//           <DataGrid
//             rows={Syllabus}
//             columns={columns}
//             initialState={{
//               pagination: {
//                 paginationModel: { page: 0, pageSize: 5 },
//               },
//             }}
//             pageSizeOptions={[5, 10]}
//             checkboxSelection
//             sx={{ overflow: 'clip' }}
//           />
//         </div>
//       </Box>
//     </>
//   );
// };

// export default SyllabusList;

// import './SyllabusList.scss';
// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { database } from '../../../Config/Firebase';
// import { DataGrid } from '@mui/x-data-grid';
// import Header from '../../../BasicComponent/Header/Header';
// import { Box, Button } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';
// import { saveAs } from 'file-saver'; // Import file-saver

// const SyllabusList = () => {
//   const [Syllabus, setSyllabus] = useState([]);
//   const { name } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(database, name));
//       const data = querySnapshot.docs.map(doc => ({
//         id: doc.id.slice(0, 3),
//         Class: doc.data().class,
//         Subject: doc.data().Subjects,
//         File: doc.data().file
//       }));
//       setSyllabus(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleButtonClick = async (fileUrl,e) => {
//     e.preventDefault()
//     try {
//       const response = await fetch(fileUrl, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/pdf',
//           'Accept': 'application/pdf'
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const blob = await response.blob();
//       const fileName = fileUrl.split('/').pop(); // Extract file name from URL
//       saveAs(blob, fileName); // Use file-saver to trigger download
//     } catch (error) {
//       console.error('Error fetching the file:', error); // Log error for debugging
//     }
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 60 },
//     { field: 'Subject', headerName: 'Subjects', width: 130 },
//     { field: 'Class', headerName: 'Class', width: 130 },
//     { field: 'File', headerName: 'PDF', width: 250 },
//     {
//       field: 'Button',
//       headerName: 'Download',
//       width: 150,
//       renderCell: (params) => (
//         <Button
//           variant="contained"
//           className='btn'
//           onClick={() => handleButtonClick(params.row.File)}
//         >
//           Download PDF
//         </Button>
//       )
//     },
//   ];

//   const AddSub = () => {
//     navigate(`/Dashboard/${name}/Add-Syllabus`);
//   };

//   return (
//     <>
//       <Header />
//       <Box className='main'>
//         <h1 className='Form_heading'>
//           {name} List
//           <Button variant='contained' className='btn' onClick={AddSub}>Add {name}</Button>
//         </h1>
//         <div style={{ height: 400, width: '100%' }}>
//           <DataGrid
//             rows={Syllabus}
//             columns={columns}
//             initialState={{
//               pagination: {
//                 paginationModel: { page: 0, pageSize: 5 },
//               },
//             }}
//             pageSizeOptions={[5, 10]}
//             checkboxSelection
//             sx={{ overflow: 'clip' }}
//           />
//         </div>
//       </Box>
//     </>
//   );
// };

// export default SyllabusList;

import './SyllabusList.scss';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../../Config/Firebase';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../../BasicComponent/Header/Header';
import { Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const SyllabusList = () => {
  const [Syllabus, setSyllabus] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, name));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id.slice(0, 3),
        Class: doc.data().class,
        Subject: doc.data().Subjects,
        File: doc.data().file
      }));
      setSyllabus(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = (file) => {
    alert('Not Found')
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'Subject', headerName: 'Subjects', width: 130 },
    { field: 'Class', headerName: 'Class', width: 130 },
    { field: 'File', headerName: 'PDF', width: 250 },
    {
      field: 'Button',
      headerName: 'Download',
      width: 150,
      renderCell: (data) => (
        <Button
          variant="contained"
          className='btn'
          onClick={() => handleButtonClick(data.File)}
        >
          View PDF
        </Button>
      )
    },
  ];

  const AddSub = () => {
    navigate(`/Dashboard/${name}/Add-Syllabus`);
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
            rows={Syllabus}
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

export default SyllabusList;

