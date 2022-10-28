import React from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Container } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';


const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <React.Fragment>
       <CssBaseline />
    <Container maxWidth = "sm"><Box
      component="img"
      sx={{
        height: 'auto',
        width: 1,
        maxHeight: { xs: 1200, md: 1200 },
        maxWidth: { xs: 1200, md: 1200 },
        border : 1
      }}
    //  justifyContent = "center"
      alt="The house from the offer."
      src="https://scontent.fbkk20-1.fna.fbcdn.net/v/t39.30808-6/313332206_522059483263270_2930372894817026389_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=baUOAPD1CVgAX_V0Nya&_nc_ht=scontent.fbkk20-1.fna&oh=00_AfDT7dWiDl9I1omjj-xTGcV110ObiGuG71P1HqWN-kWL1g&oe=63606924" /><Box sx={{ maxWidth: 1200, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
            
          }}
        >
          
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 400, maxWidth: 500, width: '30%', p: 2  }}>
          {steps[activeStep].description}
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={<Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>}
          backButton={<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>} />
      </Box></Container>
      </React.Fragment>
);
}
    
  

export default Home