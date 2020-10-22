import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'

import classes from './Main.module.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: '5rem'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Main = () => {

    const mtClasses = useStyles();

    return (
        <div className={classes.MainContent}>
            <Card className={classes.Card} variant="outlined" raised={true}>
                <FormControl noValidate autoComplete="off" margin='dense'>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            MAKE A REQUESET</Typography>
                        <TextField id="customer-name" label="Company Name" fullWidth
                            margin="normal" />
                        <TextField id="email" label="Email" fullWidth
                            margin="normal" />
                        <TextField
                            id="issue-detail"
                            label="Issue Detail"
                            multiline
                            fullWidth
                            margin="normal"
                            rows={4}
                            defaultValue="Please describe your issue..."
                            variant="outlined"
                        />

                    </CardContent>
                    <CardActions>
                        <Button>Send</Button>
                    </CardActions>
                </FormControl>
            </Card>
        </div>
    )
}

export default Main;