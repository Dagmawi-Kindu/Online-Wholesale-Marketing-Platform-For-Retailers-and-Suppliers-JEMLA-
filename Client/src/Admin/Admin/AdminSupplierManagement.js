import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './ListUser.css'
import './Sidebar.css'
import './style.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import AuthenticationContext from '../AuthenticationContext'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
function AdminSupplierManagement() {
  const { suppliers } = useContext(AuthenticationContext)
  const [users, setUsers] = useState([])
  const [isClicked, setIsClicked] = useState('')
  useEffect(() => {
    setUsers(suppliers)
  }, [suppliers])

  console.log('SUUPPLLIIEEERRSSS:', users)
  const getApprovedSupplier = async () => {
    try {
      const data = await axios.get(
        'http://localhost:7000/getApprovedSupplier',
        {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
          },
        },
      )
      // console.log('SUPPLIER', data.data.user)
      setUsers(data.data.user)
      //setUsers(suppliers)
    } catch (e) {
      console.log(e)
    }
  }
  const getPendingSupplier = async () => {
    try {
      const data = await axios.get('http://localhost:7000/getPendingSupplier', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      })
      // console.log('SUPPLIER', data.data.user)
      setUsers(data.data.user)
      //setUsers(suppliers)
    } catch (e) {
      console.log(e)
    }
  }
  const getDeclinedSupplier = async () => {
    try {
      const data = await axios.get(
        'http://localhost:7000/getDeclinedSupplier',
        {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
          },
        },
      )
      // console.log('SUPPLIER', data.data.user)
      setUsers(data.data.user)
      //setUsers(suppliers)
    } catch (e) {
      console.log(e)
    }
  }

  const getEnabledSupplier = async () => {
    try {
      const data = await axios.get('http://localhost:7000/getEnabledSupplier', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      })
      // console.log('SUPPLIER', data.data.user)
      setUsers(data.data.user)
      //setUsers(suppliers)
    } catch (e) {
      console.log(e)
    }
  }
  const getDisabledSupplier = async () => {
    try {
      const data = await axios.get(
        'http://localhost:7000/getDisabledSupplier',
        {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
          },
        },
      )
      // console.log('SUPPLIER', data.data.user)
      setUsers(data.data.user)
      //setUsers(suppliers)
    } catch (e) {
      console.log(e)
    }
  }
  const approveUser = (ID) => {
    axios({
      method: 'PUT',
      url: `http://localhost:7000/approveUser/${ID}`,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    }).then((res) => {
      console.log(res)
      if (isClicked === 'approved') {
        getApprovedSupplier()
      } else if (isClicked === 'pending') {
        getPendingSupplier()
      } else if (isClicked === 'declined') {
        getDeclinedSupplier()
      } else if (isClicked === 'enabled') {
        getEnabledSupplier()
      } else if (isClicked === 'disabled') {
        getDisabledSupplier()
      } else {
        alert('WHAT??')
      }
    })
  }
  const declineUser = (ID) => {
    axios({
      method: 'PUT',
      url: `http://localhost:7000/declineUser/${ID}`,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    }).then((res) => {
      console.log(res)
      if (isClicked === 'approved') {
        getApprovedSupplier()
      } else if (isClicked === 'pending') {
        getPendingSupplier()
      } else if (isClicked === 'declined') {
        getDeclinedSupplier()
      } else if (isClicked === 'enabled') {
        getEnabledSupplier()
      } else if (isClicked === 'disabled') {
        getDisabledSupplier()
      } else {
        alert('WHAT??')
      }
    })
  }
  const enableUserAccount = (ID) => {
    axios({
      method: 'PUT',
      url: `http://localhost:7000/enableUserAccount/${ID}`,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    }).then((res) => {
      console.log(res)
      if (isClicked === 'approved') {
        getApprovedSupplier()
      } else if (isClicked === 'pending') {
        getPendingSupplier()
      } else if (isClicked === 'declined') {
        getDeclinedSupplier()
      } else if (isClicked === 'enabled') {
        getEnabledSupplier()
      } else if (isClicked === 'disabled') {
        getDisabledSupplier()
      } else {
        alert('WHAT??')
      }
    })
  }
  const disableUserAccount = (ID) => {
    axios({
      method: 'PUT',
      url: `http://localhost:7000/disableUserAccount/${ID}`,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    }).then((res) => {
      console.log(res)
      if (isClicked === 'approved') {
        getApprovedSupplier()
      } else if (isClicked === 'pending') {
        getPendingSupplier()
      } else if (isClicked === 'declined') {
        getDeclinedSupplier()
      } else if (isClicked === 'enabled') {
        getEnabledSupplier()
      } else if (isClicked === 'disabled') {
        getDisabledSupplier()
      } else {
        alert('WHAT??')
      }
    })
  }
  const removeUsers = (ID) => {
    axios({
      method: 'DELETE',
      url: `http://localhost:7000/removeUsers/${ID}`,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    }).then((res) => {
      console.log(res)
      if (isClicked === 'approved') {
        getApprovedSupplier()
      } else if (isClicked === 'pending') {
        getPendingSupplier()
      } else if (isClicked === 'declined') {
        getDeclinedSupplier()
      } else if (isClicked === 'enabled') {
        getEnabledSupplier()
      } else if (isClicked === 'disabled') {
        getDisabledSupplier()
      } else {
        alert('WHAT??')
      }
    })
  }
  console.log('ISSS CLICCKKEDDD:  ', isClicked)
  const gridStyle = { fontSize: 15 }

  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    {
      field: 'actionns',
      headerName: 'Actions',
      width: 350,
      type: 'actions',
      getActions: (params) => [
        <button
          className="approved-usr"
          onClick={() => {
            approveUser(params.row.userID)
          }}
        >
          Approve
        </button>,

        <button
          className="decline-usr"
          onClick={() => {
            declineUser(params.row.userID)
          }}
        >
          Decline
        </button>,
        <button
          className="enable-usr"
          onClick={() => {
            enableUserAccount(params.row.userID)
          }}
        >
          Enable
        </button>,
        <button
          className="disable-usr"
          onClick={() => {
            disableUserAccount(params.row.userID)
          }}
        >
          Disable
        </button>,
        <button
          // className="disable-usr"
          onClick={() => {
            removeUsers(params.row.userID)
          }}
        >
          Remove
        </button>,
      ],
    },
    {
      field: 'userID',
      headerName: 'User ID',
      width: 300,
      hide: true,
      valueGetter: (params) => `${params.row.userID}`,
    },
    { field: 'fname', headerName: 'First Name', width: 150 },
    { field: 'mname', headerName: 'Middle Name', width: 150 },
    { field: 'lname', headerName: 'Last Name', width: 150 },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'tradeNumber',
      headerName: 'Trade Liscence Number',
      type: 'number',
      width: 200,
    },
    {
      field: 'tradeLiscence',
      headerName: 'Trade Liscence',
      width: 200,
      hide: true,
      valueGetter: (params) => `${params.row.tradeLiscence}`,
    },
    {
      field: 'viewTradeLiscence',
      headerName: 'Trade Liscence',
      width: 200,
      type: 'actions',
      getActions: (params) => [
        <button
          //
          className="approved-usr"
          onClick={() => {
            // approveUser(params.row.userID)
            window.open(
              `http://localhost:7000/trade_liscences/${params.row.tradeLiscence}`,
            )
          }}
        >
          View Trade Liscence
        </button>,
      ],
    },
    {
      field: 'kebeleID',
      headerName: 'Kebele ID',
      width: 200,
      hide: true,
      valueGetter: (params) => `${params.row.kebeleID}`,
    },
    {
      field: 'viewKebeleID',
      headerName: 'Kebele ID',
      width: 150,
      type: 'actions',
      getActions: (params) => [
        <button
          className="approved-usr"
          onClick={() => {
            // approveUser(params.row.userID)
            window.open(
              `http://localhost:7000/kebele_id/${params.row.kebeleID}`,
            )
          }}
        >
          Kebele ID
        </button>,
      ],
    },
    { field: 'role', headerName: 'Role', width: 100 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
    { field: 'approval', headerName: 'Approval', width: 100 },
    {
      field: 'accStatus',
      headerName: 'Account Status',
      width: 130,
    },
  ]

  return (
    <div>
      <div class="users-list-home-container">
        <div class="users-list-home-users-main-page">
          <h1 class="users-list-home-text">Supplier Management</h1>
          <div class="users-list-home-container1">
            <button
              class="users-list-home-button button"
              onClick={() => {
                getApprovedSupplier()
                setIsClicked('approved')
                document.getElementById('approved').style['border-bottom'] =
                  '3px solid red'
                document.getElementById('pending').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('declined').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('enabled').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('disabled').style['border-bottom'] =
                  '3px solid white'
              }}
            >
              <span id="approved">Approved</span>
            </button>
            <button
              class="users-list-home-button1 button"
              onClick={() => {
                getPendingSupplier()
                setIsClicked('pending')
                document.getElementById('approved').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('pending').style['border-bottom'] =
                  '3px solid red'
                document.getElementById('declined').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('enabled').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('disabled').style['border-bottom'] =
                  '3px solid white'
              }}
            >
              <span id="pending">Pending</span>
            </button>
            <button
              class="users-list-home-button2 button"
              onClick={() => {
                getDeclinedSupplier()
                setIsClicked('declined')
                document.getElementById('approved').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('pending').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('declined').style['border-bottom'] =
                  '3px solid red'
                document.getElementById('enabled').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('disabled').style['border-bottom'] =
                  '3px solid white'
              }}
            >
              <span id="declined">Declined</span>
            </button>
            <button
              class="users-list-home-button3 button"
              onClick={() => {
                getEnabledSupplier()
                setIsClicked('enabled')
                document.getElementById('approved').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('pending').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('declined').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('enabled').style['border-bottom'] =
                  '3px solid red'
                document.getElementById('disabled').style['border-bottom'] =
                  '3px solid white'
              }}
            >
              <span id="enabled">Enabled</span>
            </button>
            <button
              class="users-list-home-button4 button"
              onClick={() => {
                getDisabledSupplier()
                setIsClicked('disabled')
                document.getElementById('approved').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('pending').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('declined').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('enabled').style['border-bottom'] =
                  '3px solid white'
                document.getElementById('disabled').style['border-bottom'] =
                  '3px solid red'
              }}
            >
              <span id="disabled">Disabled</span>
            </button>
          </div>
          <div class="users-list-home-container2">
            <div className="product-table">
              <DataGrid
                rows={users.map((e, i) => {
                  return {
                    id: i + 1,
                    userID: e.id,
                    fname: e.firstName,
                    mname: e.middleName,
                    lname: e.lastName,
                    email: e.email,
                    tradeNumber: e.tradeLiscenceNumber,
                    tradeLiscence: e.tradeLiscence,
                    kebeleID: e.kebeleID,
                    role: e.role,
                    phoneNumber: e.phoneNumber,
                    approval: e.approval,
                    accStatus: e.accountStatus,
                  }
                })}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                rowHeight={100}
                style={gridStyle}
                pagination
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                getEstimatedRowHeight={() => 100}
                getRowHeight={() => 'auto'}
                sx={{
                  '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
                    py: 1,
                  },
                  '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
                    py: '30px',
                  },
                  '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
                    py: '30px',
                  },
                  '& .css-c63i49-MuiInputBase-input-MuiInput-input': {
                    height: '40px',
                  },
                  '& .css-v4u5dn-MuiInputBase-root-MuiInput-root': {
                    marginRight: '600px',
                    width: '700px',
                    border: '2px solid rgba(245, 242, 242, 0.61)',
                  },
                }}
                componentsProps={{
                  toolbar: {
                    csvOptions: { disableToolbarButton: true },
                    printOptions: { disableToolbarButton: true },
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },
                }}
                components={{ Toolbar: GridToolbar }}
                // checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSupplierManagement
