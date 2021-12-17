import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import './Toggle.scss'

export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');

    const handleAlignment = (event, newAlignment) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };
  
    return (
        <Box sx={{ border: '2px solid yellow', width: 'fit-content', borderRadius: '2rem'}}>
            <ToggleButtonGroup color="primary" value={alignment} exclusive  onChange={handleAlignment}>
                <ToggleButton value="web" className='custom-button-1 ' >Surface Estimates</ToggleButton>
                <ToggleButton value="android" className='custom-button-2'>Bills</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}