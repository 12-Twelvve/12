import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { Roboto } from '@next/font/google'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from "next-themes";


const inter = Roboto({weight: ['700'], subsets: ['latin'] })
const expertise = [" Visual Story telling", 
                "Data Visualization and Manipulation", 
                "Business Intelligence and Strategy",
                " ML/Cognitive Computing Development", 
                "Web and mobile app Design",
                "UI/UX"]

export default function Introduction() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <Box sx={{height:'100%', 'margin-left': '5%'}}>
        <Typography variant="h3"  component="div">
          {/* hi hello */}
        <Typewriter
          options={{
            strings: ['Namaste 🙏','Hi', 'Bonjour','Hola','Anyoung haseyo', 'Asalaam alaikum','Yassas','Shalom','Zdravstvuyte','Nǐn hǎo','Goedendag','God dag'],
            autoStart: true,
            loop: true,
          }}
        />
        </Typography>
        <Box display={'flex'} sx={{flexWrap:'wrap'}}>
          {/* info  */}
          <Box>
            <Typography className={inter.className} mt={6} variant="h4"  component="div">
              I&apos;m KUBER BUDHATHOKI
            </Typography>
            <Typography sx={{ mb: 1.5 }} color={theme=="dark"?"white":"text.secondary"}>
              You can trust me with your Black Pearl.  
            </Typography>
            <Typography variant="body2">
              Data Science Enthusiast
            </Typography>
            <Typography color={theme=="dark"?"white":"text.secondary"} sx= {{width:500}}>
              One in a Million Software Engineers
            </Typography> 
          </Box>
          <Box>
            {/* expertise  */}
          <Typography color={theme=="dark"?"white":"text.secondary"} sx= {{width:500}}>
              Expertise In:
            </Typography>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
              aria-label="contacts"
            >
              {expertise.map((ex)=>(
            <Box key={ex} color={theme=="dark"?"white":"black"}>
            <ListItem disablePadding>
                <ListItemIcon sx={{color:'inherit', display: 'block'}}>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={ex} />
            </ListItem>
            </Box>
              ))}
          </List>
          </Box>
        </Box>
    </Box>
  );
}