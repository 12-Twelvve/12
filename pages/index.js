import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ShapeOfMe from './component/ShapeOfMe'
import Navbar from './component/Navbar'
import Introduction from './component/introduction'
import { Box, Typography } from '@mui/material'
import ArchiveArea from './component/archiveArea'
import { Octokit } from 'octokit'
import { useEffect, useState } from 'react'
import  Scope  from './component/scope'


export default function Home() {
  const [gitRepo, setgitRepo] = useState([])
  const [quote, setquote] = useState({})
  const octokit = new Octokit({
    auth:process.env.TOKEN
  })
  const fetchRepo= async()=>{
    await octokit.request("GET https://api.github.com/users/12-Twelvve/repos",{
      per_page:100,
      headers: {
        "content-type": "text/plain",
      }
    }).then(res=>{
      // console.log(res)
      let repos =[]
      res.data.forEach(repo => {
        let tempRepo = {}
        tempRepo.name = repo.name
        tempRepo.language = repo.language
        tempRepo.description = repo.description
        tempRepo.url = repo.html_url
        repos.push(tempRepo)
      });
      setgitRepo(repos)
      fetch('https://api.quotable.io/random', {method:'GET'})
      .then(response => response.json())
      .then(res => {
          let temp ={}
          temp.author = res.author
          temp.content = res.content
          setquote(temp)
      })
      .catch(err => console.error(err));
    })
  }
  useEffect(()=>{
    fetchRepo()
  })
  return (
    <>
      <Head>
        <title>Twelvve-12</title>
        <meta name="description" content="portfolio of Kuber Budhathoki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico"/>
      </Head>
      <Box sx={{height:'100vh'}}>
      <Navbar/>  
      <div  className={styles.tsparticles} >
        <ShapeOfMe/>
      </div>
      {/* avatar */}
      <Box  sx={{height:'50%',}} display={'flex'} flexDirection={'column'} mt={5}>
        <Introduction/>
          {/* desktop */}
        <Box sx={{display: { xs: 'none', md: 'flex' },mx:10, position:'absolute',height:'100%',width:'100%', maxHeight:450,maxWidth:450, right:70}}>
            <Scope/>
        </Box>
          {/* mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' },position:'relative', mt:12, maxHeight:400,maxWidth:400,}}>
          <Scope/>
        </Box>
        {/* quotes */}
        <Box sx={{margin:'auto', }}>
          <Typography variant="overline"  fontWeight='bold'>
            {quote.content} - {quote.author}
          </Typography>
        </Box>
      </Box>
      {/* archive project desktop*/}
      <Box sx={{height:'35%',display: { xs: 'none', md: 'flex'}}}>
        <ArchiveArea gitRepo={gitRepo}/>
      </Box>
      </Box>
      <Box sx={{height:'35%',display: { xs: 'flex', md: 'none'}}}>
        <ArchiveArea gitRepo={gitRepo}/>
      </Box>
    </>
  )
}


