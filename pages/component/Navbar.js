import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from "next-themes";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));



function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [checked, setChecked] = React.useState(false);

  const [maction, setmaction] = React.useState('Copy')
  const [paction, setpaction] = React.useState('Copy')
  const handleMailClick =()=>{
    navigator.clipboard.writeText('koobear99@gmail.com')
    setmaction('Copied')
  }
  const handlePhoneClick =()=>{
    navigator.clipboard.writeText('+9779863658976')
    setpaction('Copied')
  }
  const handleMode =(e)=>{
    setChecked(e.target.checked)
    checked?setTheme('light'): setTheme("dark")
  }

  return (
    <AppBar sx={{boxShadow: 0}} color='transparent' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Image
            src={checked?'/kb_white.svg':'/kb.svg'}
            width={90}
            height={90}
            alt='logo'
            />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              width:"100%",
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            12
          </Typography>
            {/* mobile */}
            <Box  justifyContent={'flex-end'}  sx={{width:"100%", display: { xs: 'flex', md: 'none' } }}>
               <Button
                    onClick={()=>window.open('https://github.com/12-Twelvve','_blank','noreferrer')}
                    sx={{ my: 2,color:'inherit',  display: 'block', marginLeft:'30px' }}
                 >
                   <GitHubIcon/>
                </Button> 
                <Button
                    onClick={()=>window.open('https://www.instagram.com/12_twelvve/', '_blank', 'noreferrer')}
                    sx={{ my: 2,color:'inherit' , display: 'block', marginLeft:'30px' }}
                >
                   <InstagramIcon/>
                </Button>
            </Box>
            {/* window */}
            <Box color={theme=='dark'?'white':'black'} sx={{width:"100%", display: { xs: 'none', md: 'flex' } }} justifyContent={'flex-end'}>
                <Button
                    onClick={()=>window.open('https://github.com/12-Twelvve','_blank','noreferrer')}
                    sx={{ my: 2,color:'inherit',  display: 'block', marginLeft:'30px' }}
                 >
                   <GitHubIcon/>
                </Button>
                <Button
                    onClick={()=>window.open('https://www.instagram.com/12_twelvve/', '_blank', 'noreferrer')}
                    sx={{ my: 2,color:'inherit' , display: 'block', marginLeft:'30px' }}
                >
                   <InstagramIcon/>
                </Button>
                <Button
                    onClick={()=>window.open('https://www.facebook.com/twelvve.nepo/','_blank','noreferrer')}
                    sx={{ my: 2,color:'inherit', display: 'block', marginLeft:'30px' }}
                    >
                  <FacebookIcon/>
                </Button>
               
                <Button
                    onClick={()=>window.open('https://www.linkedin.com/in/kuber-budhathoki-4866b61b9/', '_blank','noreferrer')}
                    sx={{ my: 2,color:'inherit', display: 'block', marginLeft:'30px' }}
                    >
                  <LinkedInIcon/>
                </Button>
                <Button
                    onClick={handleMailClick}
                    sx={{ my: 2,color:'inherit', display: 'block', marginLeft:'30px' }}
                >
                  <Tooltip title={maction}>
                    <MailIcon/>
                  </Tooltip>
                </Button>
                <Button
                    onClick={handlePhoneClick}
                    sx={{color:'inherit',}} 
                >
                  <Tooltip title={paction}>
                    <LocalPhoneIcon />
                  </Tooltip>
                </Button>
                <Image
                src="/12.png"
                width={80}
                height={90}
                alt='image of me'
                />
                <Box sx={{ my: 2, display: 'block', marginLeft:'30px' }}>
                  <MaterialUISwitch onChange={handleMode} sx={{ m: 1 }} checked={checked} />
                </Box>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
