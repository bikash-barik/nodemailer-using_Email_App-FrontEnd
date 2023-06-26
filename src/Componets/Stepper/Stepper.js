import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import EmailIcon from '@mui/icons-material/Email';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import SendIcon from '@mui/icons-material/Send';
import PublicIcon from '@mui/icons-material/Public';
import { styled } from '@mui/material/styles';
import AddDomain from '../../Pages/Home';
import DoaminCountry from '../DoaminCountry';
import EmailExtract from '../EmailExtract';
import EmailSand from '../EmailSand';
import EmailValidate from '../ValidEmailsPart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <DomainAddIcon />,
    2: <PublicIcon />,
    3: <EmailIcon />,
    4: <MarkEmailReadIcon />,
    5: <SendIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};
const stepsRender = [
  {
    label: 'Step 1',
    content: <AddDomain/>,
  },
  {
    label: 'Step 2',
    content: <DoaminCountry />,
  },
  {
    label: 'Step 3',
    content: <EmailExtract />,
  },
  {
    label: 'Step 4',
    content: <EmailValidate />,
  },
  {
    label: 'Step 5',
    content: <EmailSand />,
  },
];

const steps = ['Add Domain', 'Domain Country Name', 'Extract Emails', 'Email Validate', 'Send Email'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return true;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    if (activeStep < 4) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto auto',marginY:"20px",marginX:"40px"}}>
        <Button
        variant="contained"
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          startIcon={<ArrowBackIcon />}
          sx={{
            gridColumn: '1',
            justifySelf: 'left',
          }}
        >
          Back
        </Button>
        {isStepOptional(activeStep) && !isStepSkipped(activeStep) && (
          <Button color="inherit" onClick={handleSkip} sx={{ gridColumn: '2' ,marginX:"5px"}} variant="contained">
            Skip
          </Button>
        )}
        {activeStep !== steps.length - 1 ? (
          <Button onClick={handleNext} sx={{ gridColumn: '3' }} variant="contained" endIcon={<SendIcon />}>
            Next
          </Button>
        ) : (
          <Button onClick={handleNext} sx={{ gridColumn: '3' }} disabled>
            Next
          </Button>
        )}
      </Box>
      <Stepper activeStep={activeStep} sx={{ marginX: '200px' ,marginY:"15px"}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 10, mb: 1 }}>
            {activeStep <= 5 ? stepsRender[activeStep].content : console.log('Invalid Step')}
          </Typography>
        </React.Fragment>
      )}
    </Box>
  );
}
