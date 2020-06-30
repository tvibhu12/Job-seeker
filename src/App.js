import React from 'react'
import './App.css'
import Jobs from './components/Jobs/Jobs'
import Job from './components/Job/Job'
const mockJobs=[{title:'SWE',company:'Google'},{title:'SWE2',company:'Facebook'}]
export default function App() {
  return (
    <div>
      <Jobs jobs={mockJobs}/> 
      
    </div>
  )
}
