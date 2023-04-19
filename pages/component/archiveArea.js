import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Hidden } from '@mui/material';
import styles from '../../styles/Home.module.css'
import { Roboto } from '@next/font/google';
import { useTheme } from "next-themes";


const robo = Roboto({weight: ['700'], subsets: ['latin'] })

function ProjectCard({repo}) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <Card sx={{minHeight:"90%",maxHeight:'90%', maxWidth: 300,minWidth:300,marginX:2, backgroundColor:'transparent'}}>
      <CardActionArea onClick={()=>window.open(repo?.url,'_blank','noreferrer')} sx={{height:'100%'}} >
        <CardMedia
          component="img"x
          height="130"
          image={repo.language =="Python"?"python.jpg":
                  repo.language =="JavaScript"?"js.png":
                  repo.language =="Jupyter Notebook"?"jupnote.png":"repoimg.png"}
          alt='language image'
        />
        <CardContent sx={{height:'100%'}}>
          <Box color={theme=='dark'?'white':'black'}>
          <Typography className={robo.className} sx={{color:'inherit'}} gutterBottom variant="h6" component="div">
            {repo?.name}
          </Typography>
          <Typography variant="body2" color={theme=='dark'?'white':'text.secondary'}>
            {repo?.language}
          </Typography>
          <Typography fontSize={15} gutterBottom variant="h6" component="div">
             {repo?.description}
          </Typography>
          <Typography fontSize={15} color={theme=='dark'?'white':'text.secondary'}>
            {repo?.url}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function ArchiveArea(props){
  return (
    <Box className={styles.cardsContainer} sx={{
      display:"flex",
      flexDirection:'row',
      height:'95%', 
      width:'90%', 
      margin:"auto",
      overflowY:'auto',
      justifyContent:'center',
      alignItems:'end',
      // overflow:"Hidden"
      }}>
      {props.gitRepo?.map((repo) =><ProjectCard key={repo} repo={repo}/> )}
    </Box>
  )
}