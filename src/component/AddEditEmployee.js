import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  Typography,
  FormLabel
} from '@material-ui/core'

const AddEditEmployee = ({ initialValues }) => {
  const { control, handleSubmit, errors } = useForm({
    defaultValues: initialValues || {}
  })

  const onSubmit = data => {
    // Handle form submission here with validated data
    console.log(data)
  }

  const regions = [
    { id: 1, name: 'Region 1' },
    { id: 2, name: 'Region 2' },
    { id: 3, name: 'Region 3' },
    { id: 4, name: 'Region 4' },
    { id: 5, name: 'Region 5' }
  ]

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h6'>Employee Details</Typography>
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <TextField
                  label='Name'
                  variant='outlined'
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors?.name}
                  helperText={errors?.name && 'Name is required'}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='mobile'
              control={control}
              render={({ field }) => (
                <TextField
                  label='Mobile'
                  variant='outlined'
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors?.mobile}
                  helperText={errors?.mobile && 'Mobile is required'}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <TextField
                  label='Email'
                  variant='outlined'
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors?.email}
                  helperText={errors?.email && 'Email is required'}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='masterDepartmentId'
              control={control}
              render={({ field }) => (
                <FormControl fullWidth variant='outlined'>
                  <InputLabel>Department</InputLabel>
                  <Select
                    label='Department'
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <MenuItem value={1}>Department 1</MenuItem>
                    <MenuItem value={2}>Department 2</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FormLabel>Regions</FormLabel>
              <Controller
                key={regions[0].id}
                name='masterRegionIds'
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth variant='outlined'>
                    <InputLabel>Regions</InputLabel>
                    <Select
                      label='Regions'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                      error={!!errors?.masterRegionIds}
                      renderValue={selected => selected.join(', ')}
                    >
                      {regions.map(region => (
                        <MenuItem key={region.id} value={region.id}>
                          {region.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Button type='submit' variant='contained' color='primary'>
          Submit
        </Button>
      </form>
    </Paper>
  )
}

export default AddEditEmployee
