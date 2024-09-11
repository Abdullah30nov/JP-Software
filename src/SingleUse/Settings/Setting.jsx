// import { Container } from '@mui/material';
// import SimpleBottomNavigation from '../../Config/Bottomnav';
// import './Setting.scss';
// import { useState, useEffect } from 'react';
// import Tailwindform from '../../Config/Tailwindform';
// const defaultProfilePic = '/path/to/default/profile-pic.png';

// const Setting = () => {
//     const profileUrl = localStorage.getItem('userData');
//     const profilepicuser = profileUrl ? JSON.parse(profileUrl).photoUrl : defaultProfilePic;
//     const [img, setImg] = useState();
//     console.log(img)
//     const [displayImg, setDisplayImg] = useState(profilepicuser);

//     useEffect(() => {
//         if (typeof img === 'string') {
//             setDisplayImg(img);
//             console.log('milagaya setting me',img)
//         } else if (img instanceof File) {
//             const objectUrl = URL.createObjectURL(img);
//             setDisplayImg(objectUrl);
//             console.log('nhi mila setting me')
//             return () => URL.revokeObjectURL(objectUrl);
//         }
//     }, [img]);

//     return (
//         <>
//             <Container className='flex justify-center'>
//                 <div className='grid grid-cols-1 mx-auto lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 py-5'>
//                     <div className='text-center inline-block justify-center p-3'>
//                         <div className='w-[200px] h-[200px] overflow-hidden mx-auto  rounded-pill my-10'>
//                             <img src={displayImg} alt="no profile" className='rounded-pill mx-auto w-[100%] h-[100%]' />
//                         </div>
//                         <div>
//                             <label htmlFor="file-input" className='custom-file-upload'>
//                                 Change Avatar
//                             </label>
//                             <input
//                                 id="file-input"
//                                 type="file"
//                                 onChange={(e) => setImg(e.target.files[0])}
//                                 className='hidden-input'
//                             />
//                         </div>
//                     </div>
//                     <div className='px-3 py-3' style={{border:'1px solid black'}}>
//                         <Tailwindform/>
//                     </div>
//                 </div>
//             </Container>
//             <SimpleBottomNavigation profileprops={displayImg}/>
//         </>
//     );
// };

// export default Setting;

import { Container } from '@mui/material';
import SimpleBottomNavigation from '../../Config/Bottomnav';
import './Setting.scss';
import { useState, useEffect } from 'react';
import Tailwindform from '../../Config/Tailwindform';

const defaultProfilePic = '/path/to/default/profile-pic.png';

const Setting = () => {
    const profileUrl = localStorage.getItem('userData');
    const profilepicuser = profileUrl ? JSON.parse(profileUrl).photoUrl : defaultProfilePic;
    const [img, setImg] = useState();
    const [displayImg, setDisplayImg] = useState(profilepicuser);

    useEffect(() => {
        if (typeof img === 'string') {
            setDisplayImg(img);
            console.log('Mila nhi setting')
        } else if (img instanceof File) {
            const objectUrl = URL.createObjectURL(img);
            console.log('Mila he setting')
            setDisplayImg(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [img]);

    return (
        <>
            <Container className='flex justify-center'>
                <div className='grid grid-cols-1 mx-auto lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 py-5'>
                    <div className='text-center inline-block justify-center p-3'>
                        <div className='w-[200px] h-[200px] overflow-hidden mx-auto  rounded-pill my-10'>
                            <img src={displayImg} alt="no profile" className='rounded-pill mx-auto w-[100%] h-[100%]' />
                        </div>
                        <div>
                            <label htmlFor="file-input" className='custom-file-upload'>
                                Change Avatar
                            </label>
                            <input
                                id="file-input"
                                type="file"
                                onChange={(e) => setImg(e.target.files[0])}
                                className='hidden-input'
                            />
                        </div>
                    </div>
                    <div className='px-3 py-3' style={{border:'1px solid black'}}>
                        <Tailwindform  profileprops={displayImg} />
                    </div>
                </div>
            </Container>
            <SimpleBottomNavigation/>
        </>
    );
};

export default Setting;
