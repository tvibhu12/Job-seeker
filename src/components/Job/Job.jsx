import React from 'react'
import Typography from '@material-ui/core/Typography';
export default function Job({job}) {
    console.log(job)
    return (
        <div className='job'>
        
          {job.title}
          {job.company}
        </div>
    )
}
