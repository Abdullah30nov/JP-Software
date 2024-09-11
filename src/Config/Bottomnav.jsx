import HomeIcon from '@mui/icons-material/Home';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Userimg from '../assets/profile.png'
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [UserProfile,setUserProfile]=React.useState()
  const navigate = useNavigate();
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#ffff', 
        dark: '#ffff',
        light: 'yellowgreen',
      },
    },
  });

  const profilePictureUrl = localStorage.getItem('userData');
const profilepicuser=(JSON.parse(profilePictureUrl).photoUrl)
React.useEffect(()=>{
  if(profilepicuser){
    setUserProfile(profilepicuser)
    console.log('mila he nav me',profilepicuser)
  }
  else{
    setUserProfile(Userimg)
    console.log('nhi mila bhai')
  }
},[])
  return (
    <ThemeProvider theme={customTheme}>
      <br /><br /><br />
      <Box sx={{ width: '100%', position: 'fixed', bottom: '2px' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ display: 'flex', justifyContent: 'space-evenly', background: '#005e57' }}
        >
          <BottomNavigationAction
            // label="Profile"
            disableRipple
            onClick={() => { navigate('/Dashboard/Profile'); }}
            icon={<img src={UserProfile} alt="Profile"  className='w-[50px] h-[50px] rounded-pill'/>}
            sx={{
              '&.Mui-selected': { color: customTheme.palette.primary.main },
              '&:hover': { color: customTheme.palette.primary.dark },
              '&:focus': { color: customTheme.palette.primary.light },
              color: 'white'
            }}
          />
         
          <BottomNavigationAction
            label="Home"
            onClick={() => { navigate('/Dashboard')}} 
            disableRipple
            icon={<HomeIcon onClick={() => { navigate('/Dashboard')}}/>}
            sx={{
              '&.Mui-selected': { color: customTheme.palette.primary.main },
              '&:hover': { color: customTheme.palette.primary.dark },
              '&:focus': { color: customTheme.palette.primary.light },
              color: 'white'
            }}
          />
           <BottomNavigationAction
            label="Setting"
            disableRipple
            onClick={() => { navigate('/Dashboard/Setting'); }}
            icon={<SettingsIcon onClick={() => { navigate('/Dashboard/Setting'); }} />}
            sx={{
              '&.Mui-selected': { color: customTheme.palette.primary.main },
              '&:hover': { color: customTheme.palette.primary.dark },
              '&:focus': { color: customTheme.palette.primary.light },
              color: 'white'
            }}
          />
          <BottomNavigationAction
            label="Logout"
            disableRipple
            onClick={() => { localStorage.clear(); navigate('/'); }} 
            icon={<LogoutIcon onClick={() => { localStorage.clear(); navigate('/'); }} />}
            sx={{
              '&.Mui-selected': { color: customTheme.palette.primary.main },
              '&:hover': { color: customTheme.palette.primary.dark },
              '&:focus': { color: customTheme.palette.primary.light },
              color: 'white'
            }}
          />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
