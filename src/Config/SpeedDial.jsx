import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LogoutIcon from '@mui/icons-material/Logout';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const download = ()=>{
}
const actions = [
  { icon: < LogoutIcon onClick={()=>{localStorage.clear(),window.location='/'}}/>, name: 'Logout' },
  { icon: <DownloadForOfflineIcon onClick={()=>{download}}/>, name: 'Download APK' },
  { icon: <HomeIcon />, name: 'Home' },
  { icon: <AccountCircleIcon />, name: 'Profile' },
];

export default function BasicSpeedDial() {
  // const navigate = useNavigate()
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ 
          position: "absolute",  
          bottom: '2%', 
          right: '2%', 
          // backgroundColor: '#005e57',
          '& .MuiFab-primary': { 
            backgroundColor: '#005e57',
            '&:hover': { backgroundColor: '#004d47' }, // Darker shade on hover
            '&:focus': { backgroundColor: '#004d47' }, // Darker shade on focus
          }
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{ 
              backgroundColor: '#00796b',
              color: '#fff',
              '&:hover': { backgroundColor: '#005e57' }, // Darker shade on hover
              '&:focus': { backgroundColor: '#005e57' }, // Darker shade on focus
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
