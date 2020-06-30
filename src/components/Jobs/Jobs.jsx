import React from 'react'
import Typography from '@material-ui/core/Typography';
import Job from '../Job/Job';
export default function Jobs({jobs}) {
    console.log(jobs.length)
    return (
        <div className='jobs'>
            <Typography variant='h1'>
                Get your Job here
            </Typography>
            {
                jobs.map((job)=> <Job job={job}/>)
            }
        </div>
    )
}
