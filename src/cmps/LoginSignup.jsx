import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login, signup, showLogin } from '../store/actions/user.actions.js'
import { useSelector } from 'react-redux';

const defaultTheme = createTheme();

function getEmptyCredentials() {
    return {
        fullname: '',
        username: '',
        password: '',
    }
}

export function LoginSignup() {

    const [credentials, setCredentials] = React.useState(getEmptyCredentials())
    const [isSignupState, setIsSignupState] = React.useState(false)
    const isLoginShown = useSelector(storeState => storeState.userModule.isLoginShown)

    function handleCredentialsChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials(credentials => ({ ...credentials, [field]: value }))
    }

    async function onSubmit(ev) {
        ev.preventDefault()
        if (isSignupState) {
            try {
                const user = await signup(credentials)
                console.log('ShowSuccsesMsg')
                showLogin(isLoginShown)
                return user
            } catch (err) {
                console.log('ShowErrorMsg')
                throw err
            }
        } else {
            try {
                const user = await login(credentials)
                console.log('ShowSuccsesMsg')
                showLogin(isLoginShown)
                return user
            } catch (err) {
                console.log('ShowErrorMsg')
            }
        }
    }

    function onToggleSignupState(ev) {
        ev.preventDefault()
        setIsSignupState(isSignupState => !isSignupState)
    }

    return (
        <div className='login-page'>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                type='text'
                                autoComplete="username"
                                onChange={handleCredentialsChange}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleCredentialsChange}
                            />
                            {isSignupState && <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="fullname"
                                label="Full Name"
                                type="text"
                                id="fullname"
                                autoComplete="fullname"
                                onChange={handleCredentialsChange}
                            />}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {isSignupState ? 'Signup' : 'Login'}
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={onToggleSignupState}>
                                        {isSignupState ? 'Already a member? Login' : "Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}