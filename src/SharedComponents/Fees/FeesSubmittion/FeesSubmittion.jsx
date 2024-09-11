import { useParams } from 'react-router-dom'
import './FeesSubmittion.scss'
import Header from '../../../BasicComponent/Header/Header'
const FeesSubmittion = () => {
  const {name}=useParams()
  console.log(name)
  return (
    <>
    <Header/><br /><br /><br /><br /><br />
    <h1 style={{textAlign:'center'}}>Fee Voucher</h1>
    </>
  )
}

export default FeesSubmittion