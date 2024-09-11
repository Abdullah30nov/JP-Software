import { useParams } from 'react-router-dom'
import Header from '../../../BasicComponent/Header/Header'
import './FeesStructure.scss'
import { Box, Container} from '@mui/material'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeeCard from '../../../Components/Form/FeeCard/FeeCard';
const FeesStructure = () => {
  // const {name,type}=useParams()
  // console.log(name,type.slice(4))
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <Header/>
    <Box className='fee_main'>
      <Container className='fee_container'>
        {/* <h1>dxwke ke kew ke kjew k ec e</h1> */}
        <Carousel responsive={responsive} className='slider'>
  <div><FeeCard Class='I-III' monthlyfee='1500' LabVal='Exam Charges' LabC='400'/></div>
  <div><FeeCard Class='IV-V' monthlyfee='2300' LabVal='Exam Charges' LabC='600'/></div>
  <div><FeeCard Class='VI-VIII' monthlyfee='3500' LabVal='Exam Charges' LabC='1000'/></div>
  <div><FeeCard Class='IX-X' monthlyfee='5000' LabVal='Lab Charges' LabC='2500'/></div>
</Carousel>;
      </Container>
    </Box>
    </>
  )
}

export default FeesStructure