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
    //  justifyContent = "center" //https://www.instagram.com/p/ChrnEryphIr/?utm_source=ig_web_copy_link
    //https://scontent.fbkk20-1.fna.fbcdn.net/v/t39.30808-6/313332206_522059483263270_2930372894817026389_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=baUOAPD1CVgAX_V0Nya&_nc_ht=scontent.fbkk20-1.fna&oh=00_AfDT7dWiDl9I1omjj-xTGcV110ObiGuG71P1HqWN-kWL1g&oe=63606924
      alt="The house from the offer."
      src="data:image/jpeg;base64,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" /><Box sx={{ maxWidth: 1200, flexGrow: 1 }}>
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