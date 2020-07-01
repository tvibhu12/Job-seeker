import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import JobModal from '../JobModal/JobModal';
export default function Job({job}) {
    const [open,setOpen]=React.useState(false);
    
    return (
      <>
        <Paper className='job' onClick={()=>setOpen(!open)}>
        <div>

        <Typography>

          {job.title}
        </Typography>
        <Typography>

          {job.company}
        </Typography>
        <Typography>

{job.location}
</Typography>

        </div>
        <div>
        <Typography>

{job.created_at}
</Typography>
        </div>
        </Paper>
        <JobModal open={open} setOpen={setOpen} job={job}/>

        </>
    )
}
