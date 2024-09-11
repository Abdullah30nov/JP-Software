import { useParams } from 'react-router-dom'
import SubjectForm from '../../../Components/Form/SubjectForm/SubjectForm'
import './SubjectAdd.scss'

const AddSubject = () => {
  const {name}=useParams()
  console.log(name)
  return (
    <>
    <SubjectForm Reg_Name={name}/>
    </>
  )
}

export default AddSubject