import { Container, Typography } from '@mui/material';
import SimpleBottomNavigation from '../../Config/Bottomnav';
import './Profile.scss';
import { useState, useEffect } from 'react';
import defaultProfilePic from '../../assets/profile.png';

const Profile = () => {
    const [displayImg, setDisplayImg] = useState();
    const getUserData = localStorage.getItem('userData');
    const profilepicuser = JSON.parse(getUserData);

    useEffect(() => {
        if (profilepicuser && profilepicuser.photoUrl) {
            setDisplayImg(profilepicuser.photoUrl);
            console.log('Mila profile')
        } else {
            setDisplayImg(defaultProfilePic);
            console.log('Mila nhi profile')
        }
    }, []);

    return (
        <>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-5'>
                    <div className='text-center inline-block justify-center p-3'>
                        <div className='w-[250px] h-[250px] mx-auto rounded-pill my-10 overflow-hidden'>
                            <img 
                                src={displayImg}
                                alt="Profile Picture" 
                                className='w-full h-full object-cover rounded-pill img' 
                            />
                        </div>
                    </div>
                    <div className='px-3 py-3'>
                    <div className="border-b border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>           
        </div>
        <div className="border-b border-gray-900/10 ">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-5">
          <div className="sm:col-span-4">
          <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                ID : <b>{profilepicuser.id}</b>
              </label>
          </div>
            <div className="sm:col-span-6">
              <label htmlFor="Name" className="text-sm font-medium leading-6 text-gray-900">
                Name
                <h3 className="w-full text-gray-900   sm:leading-6">{profilepicuser.name}</h3>
              </label>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="User Name" className="text-sm font-medium leading-6 text-gray-900">
                User Name:
                <h3 className="w-full text-gray-900   sm:leading-6">{profilepicuser.username}</h3>
              </label>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="Email" className="text-sm font-medium leading-6 text-gray-900">
                Email:
                <h3 className="w-full text-gray-900   sm:leading-6">{profilepicuser.email}</h3>
              </label>
            </div>
            {/* </div> */}
          </div>
        </div>
                    </div>
                </div>
            </Container>
            <SimpleBottomNavigation />
        </>
    );
};

export default Profile;
