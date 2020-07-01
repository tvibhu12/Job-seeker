import React from 'react'
import Typography from '@material-ui/core/Typography';
import Job from '../Job/Job';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export default function Jobs({jobs}) {
    const numJobs = jobs.length;
    const numPage = Math.ceil(numJobs / 50);
    const [activeStep, setActiveStep] = React.useState(0);
    console.log(jobs[0])

    const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50);
    console.log(activeStep)
    return (
        <div className='jobs'>
        <div 
        // style={{position:'fixed',width:'90%'}}
        >

        <Typography variant='h4' component='h1'>
                Get your Job here
            </Typography>
            <Typography variant='h6' component='h6'>
                Found {jobs.length}
            </Typography>
                <Stepper numPage={numPage} activeStep={activeStep} setActiveStep={setActiveStep}/>
        </div>

            <div>

            {
                jobsOnPage.map((job,ind)=> <Job key={ind} job={job}/>)
            }
            </div>

        </div>
    )
}

const Stepper=(props)=>{
    
   
    const handleNext = () => {
        console.log('before'+props.activeStep)
        props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log('after'+props.activeStep)
      };
    
      const handleBack = () => {
        props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
      
    return(
        <>
        <div>
            Page {props.activeStep +1 } to {props.numPage}
        </div>

        <MobileStepper
        variant="progress"
        steps={props.numPage}
        position="static"
        activeStep={props.activeStep}
        
        nextButton={
          <Button size="small" onClick={handleNext} disabled={props.activeStep === props.numPage-1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={props.activeStep === 0}>
           <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      </>

    )
}