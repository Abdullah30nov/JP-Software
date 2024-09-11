import './FeeCard.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function FeeCard({Class,monthlyfee,LabC,LabVal}) {
    const navigate =useNavigate()
  return (
    <Card style={{ width: '90%',minWidth:'10rem',margin:'auto',textAlign:'center' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body className='card_item'>
        <Card.Text className='card_heading'>{Class}</Card.Text>
        <Card.Text>
          <span>Monthly: <span><b>{monthlyfee}</b> </span></span><br />
          <span>Annualy: <span><b>{monthlyfee*12}</b></span></span><br />
          <span>{LabVal} <span><b>{LabC}</b></span></span>
        </Card.Text> 
        <Button variant="primary" className='btn' onClick={()=>navigate('/Dashboard/Fee/Fee-Submittion')}>Get Paid</Button>
      </Card.Body>
    </Card>
  );
}

export default FeeCard;
