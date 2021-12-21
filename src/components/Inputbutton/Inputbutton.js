import React from "react";
import Button from "@material-ui/core/Button";
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Inputbutton.scss';
import Typography from '@mui/material/Typography';


class GroupedButtons extends React.Component {
    state = { counter: 2021 };

    handleIncrement = () => {
        this.setState(state => ({ counter: state.counter + 1 }));
    };

    handleDecrement = () => {
        this.setState(state => ({ counter: state.counter - 1 }));
    };
    render() {
        // const displayCounter = this.state.counter > 0;

        return (

                <Box sx={{ border: 1, borderRadius: 2, p: 1, width: '300px' }}>
                    <Typography variant="h6" component="h6" className="display-inline mr-5">
                        Name
                    </Typography>
                    <div className="display-inline">
                        <Button variant="outlined" onClick={this.handleDecrement} className="btn-icon" > <RemoveIcon /></Button>
                        <Button className="year-counter" disabled> {this.state.counter}</Button>
                        <Button variant="outlined" onClick={this.handleIncrement} className="btn-icon"> <AddIcon /></Button>
                    </div>
                </Box>

        );
    }
}

export default GroupedButtons;