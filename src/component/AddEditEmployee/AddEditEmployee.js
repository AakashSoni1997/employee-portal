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
  FormControlLabel,
  Checkbox
} from '@material-ui/core'
import useAddEditEmployee from './useAddEditEmployee'

const AddEditEmployee = ({ initialValues }) => {
  const { control, handleSubmit, errors } = useForm({
    defaultValues: initialValues || {}
  })

  const {
    onSubmit,
    regionData,
    branchData,
    salesData,
    departmentData,
    designationData
  } = useAddEditEmployee()

  const regions = [{ id: 2, name: 'Region 2' }]
  const masterBranchIds = [{ id: 13, name: 'Region 13' }]

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h6'> Add Employee Details</Typography>
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
              name='masterDepartmentId'
              control={control}
              render={({ field }) => (
                <FormControl fullWidth variant='outlined'>
                  <InputLabel>Department</InputLabel>
                  <Select
                    label='Department'
                    value={field.value}
                    onChange={event =>
                      field.onChange(Number(event.target.value))
                    }
                  >
                    <MenuItem value={1}>Department 1</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
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
                      {regionData?.map(region => (
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
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Controller
                key={regions[0].id}
                name='masterBranchIds'
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth variant='outlined'>
                    <InputLabel>Branch</InputLabel>
                    <Select
                      label='Branch'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                      error={!!errors?.masterRegionIds}
                      renderValue={selected => selected.join(', ')}
                    >
                      {branchData?.map(masterBranchIds => (
                        <MenuItem
                          key={masterBranchIds.id}
                          value={masterBranchIds.id}
                        >
                          {masterBranchIds.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Controller
                key={regions[0].id}
                name='masterSalesOfficeIds'
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth variant='outlined'>
                    <InputLabel>Sales Office</InputLabel>
                    <Select
                      label='Sales Office'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                      error={!!errors?.masterRegionIds}
                      renderValue={selected => selected.join(', ')}
                    >
                      {salesData?.map(sales => (
                        <MenuItem key={sales.id} value={sales.id}>
                          {sales.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='masterDesignationId'
              control={control}
              render={({ field }) => (
                <FormControl fullWidth variant='outlined'>
                  <InputLabel>Designation</InputLabel>
                  <Select
                    label='Designation'
                    value={field.value}
                    onChange={field.onChange}
                  >
                    {designationData?.map(designation => (
                      <MenuItem value={designation.id}>
                        {designation.code}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
              name='actualDesignation'
              control={control}
              render={({ field }) => (
                <TextField
                  label='Actual Designation'
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
              name='userId'
              control={control}
              render={({ field }) => (
                <TextField
                  label='UserID'
                  variant='outlined'
                  fullWidth
                  value={field.value}
                  onChange={event => field.onChange(Number(event.target.value))}
                  error={!!errors?.name}
                  type='number'
                  helperText={errors?.name && 'Name is required'}
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
            <FormControlLabel
              control={
                <Controller
                  name='isViewCustomers'
                  control={control}
                  defaultValue={false}
                  render={({ field }) => <Checkbox {...field} />}
                />
              }
              label=' View Customer'
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Controller
                  name='isViewQuotation'
                  control={control}
                  defaultValue={false}
                  render={({ field }) => <Checkbox {...field} />}
                />
              }
              label=' View Quotation'
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='actualDesignationId'
              control={control}
              render={({ field }) => (
                <FormControl fullWidth variant='outlined'>
                  <InputLabel>Actual Designation</InputLabel>
                  <Select
                    label='Department'
                    value={field.value}
                    onChange={event =>
                      field.onChange(Number(event.target.value))
                    }
                  >
                    {departmentData?.map(department => (
                      <MenuItem value={department.id}>
                        {department.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='nextUserId'
              control={control}
              render={({ field }) => (
                <FormControl fullWidth variant='outlined'>
                  <InputLabel>Next User</InputLabel>
                  <Select
                    label='Next User'
                    value={field.value}
                    onChange={event =>
                      field.onChange(Number(event.target.value))
                    }
                  >
                    <MenuItem value={1}>Next User 1</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='copsUserId'
              control={control}
              render={({ field }) => (
                <FormControl fullWidth variant='outlined'>
                  <InputLabel> COPS Next User 1</InputLabel>
                  <Select
                    label=' COPS Next User 1'
                    value={field.value}
                    onChange={event =>
                      field.onChange(Number(event.target.value))
                    }
                  >
                    <MenuItem value={1}> COPS Next User 1</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Controller
                  name='isCOPSMainUser'
                  control={control}
                  defaultValue={false}
                  render={({ field }) => <Checkbox {...field} />}
                />
              }
              label='Is COPS Main User'
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Controller
                  name='isCOPSOutOfOffice'
                  control={control}
                  defaultValue={false}
                  render={({ field }) => <Checkbox {...field} />}
                />
              }
              label='Is COPS Out Of Office'
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='maxLoadPerDay'
              control={control}
              render={({ field }) => (
                <TextField
                  label='Max Load Per Day'
                  variant='outlined'
                  fullWidth
                  value={field.value}
                  onChange={event => field.onChange(Number(event.target.value))}
                  error={!!errors?.name}
                  type='number'
                  helperText={errors?.name && 'Name is required'}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='totalCapacity'
              control={control}
              render={({ field }) => (
                <TextField
                  label='COPS Capacity'
                  variant='outlined'
                  fullWidth
                  value={field.value}
                  onChange={event => field.onChange(Number(event.target.value))}
                  error={!!errors?.name}
                  type='number'
                  helperText={errors?.name && 'Name is required'}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='maxLoadOwnBranch'
              control={control}
              render={({ field }) => (
                <TextField
                  label='Max Load Own Branch'
                  variant='outlined'
                  fullWidth
                  value={field.value}
                  onChange={event => field.onChange(Number(event.target.value))}
                  error={!!errors?.name}
                  type='number'
                  helperText={errors?.name && 'Name is required'}
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              name='maxLoadOtherBranch'
              control={control}
              render={({ field }) => (
                <TextField
                  label='Max Load Other Branch'
                  variant='outlined'
                  fullWidth
                  value={field.value}
                  onChange={event => field.onChange(Number(event.target.value))}
                  error={!!errors?.name}
                  type='number'
                  helperText={errors?.name && 'Name is required'}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name='priorityOtherBranch'
              control={control}
              render={({ field }) => (
                <TextField
                  label='Priority Other Branch '
                  variant='outlined'
                  fullWidth
                  value={field.value}
                  onChange={event => field.onChange(Number(event.target.value))}
                  error={!!errors?.name}
                  type='number'
                  helperText={errors?.name && 'Name is required'}
                />
              )}
            />
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
