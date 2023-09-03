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
  Paper,
  Avatar
} from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'

import { useNavigate } from 'react-router'
import { authEmployee } from '../utils/method'
import { POST_AUTH_EMPLOYEE } from '../utils/constant'

const defaultTheme = createTheme()

export default function Auth () {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      userName: '',
      password: ''
    }
  })

  const onSubmit = async data => {
    try {
      const res = await authEmployee(POST_AUTH_EMPLOYEE, data)
      if (res?.accessToken) {
        navigate('/employee-list')
      } else {
        console.error('Authentication failed')
      }
    } catch (err) {
      console.error(err, 'error')
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component='main'
        maxWidth='xs'
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
          <Avatar
            style={{ backgroundColor: defaultTheme.palette.primary.main }}
          >
            <LockOutlined />
          </Avatar>
          <Typography component='h1' variant='h5' style={{ marginTop: '10px' }}>
            Sign In
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: '100%', marginTop: '20px' }}
          >
            <Controller
              name='userName'
              control={control}
              defaultValue=''
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
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='name'
                  label='Username'
                  autoFocus
                  error={!!errors.userName}
                  helperText={errors.userName?.message}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              defaultValue=''
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
                  variant='outlined'
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
