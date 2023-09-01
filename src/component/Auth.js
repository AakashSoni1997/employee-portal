import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Button,
  CssBaseline,
  TextField,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
  Paper
} from '@material-ui/core'

import axios from 'axios'
import { useNavigate } from 'react-router'
import { authEmployee } from '../utils/method'
import { POST_AUTH_EMPLOYEE } from '../utils/contant'

const defaultTheme = createTheme()

export default function Auth () {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    authEmployee(POST_AUTH_EMPLOYEE, data)
      .then(res => {
        const { accessToken, refreshToken } = res
        localStorage.setItem('token', accessToken)
      })
      .then(navigate('/EmployeeListPage'))
      .catch(err => {
        console.log(err, 'error')
      })
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component='main'
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CssBaseline />
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign In Page
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: '100%', marginTop: '20px' }}
          >
            <Controller
              name='userName'
              control={control}
              rules={{
                required: 'Username is required',
                minLength: {
                  value: 5,
                  message: 'Username must be at least 5 characters'
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  required
                  fullWidth
                  id='name'
                  label='UserName'
                  autoFocus
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 5,
                  message: 'Password must be at least 5 characters'
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete=''
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              style={{ marginTop: '20px' }}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}
