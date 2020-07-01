import React from 'react'
import './App.css'
import Jobs from './components/Jobs/Jobs'

const Base_url='https://conservative-beaver-56553.herokuapp.com/jobs'
export default function App() {
  
  const [jobsList,setJobs]=React.useState([])
      React.useEffect(()=>{
        fetchJobs(setJobs);
      },[])

  return (
    <div>
    
      <Jobs jobs={jobsList}/> 
     
    </div>
  )
}
 const fetchJobs=async (updateJob)=>{
   const job= await fetch(Base_url)
   const json=await job.json()
   updateJob(json)
}
