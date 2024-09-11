import Header from '../../../BasicComponent/Header/Header'
import '../../../index.css'
import SubjectAddForm from './SubjectAddForm'
import SyllabusAddForm from './SyllabusAddForm'
const SubjectForm = ({ Reg_Name }) => {
    if (Reg_Name === 'Subject') {
        return (
            <>
                <Header />
                <SubjectAddForm Reg_Name={Reg_Name} />
            </>
        )
    }
    if (Reg_Name === 'Syllabus') {
        return (
            <>
                <Header />
                <SyllabusAddForm Reg_Name={Reg_Name} />
            </>
        )
    }
    console.log(Reg_Name)

    return (
        <>
            <Header />
        </>
    )
}
export default SubjectForm