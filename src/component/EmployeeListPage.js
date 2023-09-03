import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled
} from '@material-ui/core'
import { deleteWithBearerToken, getWithBearerToken } from '../utils/method'
import { GET_EMPLOYEE_LIST } from '../utils/constant'
import { useNavigate } from 'react-router'

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
})

const EmployeeListPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    getWithBearerToken(GET_EMPLOYEE_LIST)
      .then(responseData => {
        if (responseData.length) {
          setData(responseData)
        } else {
          console.error('Failed to fetch data.')
        }
      })
      .catch(error => {
        console.error('An error occurred:', error)
      })
  }, [toggle])

  const handleEditClick = employeeId => {
    navigate(`/update-employee/${employeeId}`)
  }
  const handleDelete = id => {
    deleteWithBearerToken(id)
    setToggle(!toggle)
  }

  return (
    <Container>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <h1 style={{ flex: 1 }}>Employee Data</h1>
        {/* Use the styled button component */}
        <StyledButton
          variant='contained'
          color='primary'
          onClick={() => navigate('/add-employee')}
        >
          Add Employee
        </StyledButton>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ fontWeight: 'bold', border: '1px solid #ddd' }}
              >
                Name
              </TableCell>
              <TableCell
                style={{ fontWeight: 'bold', border: '1px solid #ddd' }}
              >
                Department
              </TableCell>
              <TableCell
                style={{ fontWeight: 'bold', border: '1px solid #ddd' }}
              >
                Designation
              </TableCell>
              <TableCell
                style={{ fontWeight: 'bold', border: '1px solid #ddd' }}
              >
                Email
              </TableCell>
              <TableCell
                style={{ fontWeight: 'bold', border: '1px solid #ddd' }}
              >
                Mobile
              </TableCell>
              <TableCell
                style={{ fontWeight: 'bold', border: '1px solid #ddd' }}
              >
                Actions
              </TableCell>
              {/* Add Actions column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.map(employee => (
                <TableRow key={employee.id}>
                  <TableCell style={{ border: '1px solid #ddd' }}>
                    {employee.name}
                  </TableCell>
                  <TableCell style={{ border: '1px solid #ddd' }}>
                    {employee.departmentName}
                  </TableCell>
                  <TableCell style={{ border: '1px solid #ddd' }}>
                    {employee.designationName}
                  </TableCell>
                  <TableCell style={{ border: '1px solid #ddd' }}>
                    {employee.email}
                  </TableCell>
                  <TableCell style={{ border: '1px solid #ddd' }}>
                    {employee.mobile}
                  </TableCell>
                  <TableCell
                    style={{
                      border: '1px solid #ddd',
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Button variant='contained' color='primary'>
                      View
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() => handleEditClick(employee.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <LinearProgress />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default EmployeeListPage
