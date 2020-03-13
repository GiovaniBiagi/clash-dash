import React, { useState } from 'react';
import { signIn } from '../../functions/firebase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from '@unform/web';

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import Input from '../Input';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: '100%',
        },
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: 10,
        textTransform: 'capitalize',
    },
    login: {
        margin: 50
    },
    textField: {
        margin: 20
    }
}));

function AddEvent({ history }) {
    const [ isLoading, setIsLoading ] = useState(false);
    const classes = useStyles();

    const handleSubmit = async formData => {
        setIsLoading(true)
        console.log(formData.user);

        const data = {
            email: formData.user,
            password: formData.password
        }

        try {
            signIn(data)
            .then(response => {
                setIsLoading(false);
                history.push('/dashboard');
            })
            .catch(error => {
                console.log(error);
            })
        }
        catch (error) {
            console.log(error)
        }

    };

    return (
        <div className={classes.root}>
            <ToastContainer />
            <Paper className={classes.paper}>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Container
                            maxWidth="sm">
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={8}
                            >
                                <Input
                                    fullWidth={true}
                                    id="user"
                                    label="Usuário"
                                    name="user"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <Input
                                    fullWidth={true}
                                    id="password"
                                    label="Senha"
                                    name="password"
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </Grid>
                        </Container>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Button
                                type="submit"
                                className={classes.login}
                                color="primary"
                                variant="outlined"
                            >
                                {isLoading ? <CircularProgress size={25} /> : "Cadastrar" }
                            </Button>
                        </Grid>
                    </Form>
                </div>
            </Paper>
        </div >
    )

}

export default AddEvent;