import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../Config/Firebase';
import CustomizedProgressBars from '../../Config/Spinner';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import './IDCard.scss';
import '../../index.css';

const IDCard = () => {
  const navigate=useNavigate()
  const { id, name } = useParams();
  const [principle, setPrinciple] = useState(null);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, name));
      const principles = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      const selectedPrinciple = principles.find(prin => prin.id === id);
      setPrinciple(selectedPrinciple);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadCardInfo = () => {
    if (principle) {
      const doc = new jsPDF('p', 'mm', 'a4');
      
      // Add title
      doc.setFontSize(20);
      doc.setTextColor(40, 60, 100);
      doc.text('Principle Information', 20, 20);

      // Add an image
      const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NigVp_k0UnK_3Z11PhQsWot0B9ocoqHHFw&s'; // Replace with dynamic image URL if needed
      doc.addImage(img, 'JPEG', 20, 30, 50, 50); // x, y, width, height

      // Add content
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text(`Name: ${principle.FirstName} ${principle.LastName}`, 20, 90);
      doc.text(`Father's Name: ${principle.fathername}`, 20, 100);
      doc.text(`Age: ${principle.age}`, 20, 110);
      doc.text(`Experience: ${principle.Experience} Years`, 20, 120);
      doc.text(`Qualification: ${principle.Qualification}`, 20, 130);
      doc.text(`Gender: ${principle.gender}`, 20, 140);

      // Add a table with custom styling
      doc.autoTable({
        startY: 150,
        head: [['Field', 'Value']],
        body: [
          ['Name', `${principle.FirstName} ${principle.LastName}`],
          ['Father\'s Name', principle.fathername],
          ['Age', principle.age],
          ['Experience', `${principle.Experience} Years`],
          ['Qualification', principle.Qualification],
          ['Gender', principle.gender]
        ],
        theme: 'striped',
        styles: {
          fontSize: 12,
          cellPadding: 4,
          lineColor: [44, 62, 80],
          lineWidth: 0.75
        }
      });

      // Save the PDF
      doc.save(`${principle.FirstName}_${principle.LastName}_Info.pdf`);
    }
  };

  if (!principle) return <Typography className='loading'><CustomizedProgressBars/></Typography>;
  return (
    <Box className='card-contain'>
      <Card className='card-main'>
        <CardMedia
          component="img"
          alt="Principle Image"
          className='img'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NigVp_k0UnK_3Z11PhQsWot0B9ocoqHHFw&s' // You might want to update this to a dynamic image if available
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {principle.FirstName} {principle.LastName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Father Name: {principle.fathername}<br />
            Age: {principle.age}<br />
            Experience: {principle.Experience} Years<br />
            Qualification: {principle.Qualification}<br />
            Gender: {principle.gender}
          </Typography>
          <CardActions>
            <Button size="small" className='btn' variant='contained' onClick={downloadCardInfo}>
              Download
            </Button>
            <Button size="small" className='btn' variant='contained' onClick={()=>{navigate('/Dashboard')}}>Go Back</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IDCard;

