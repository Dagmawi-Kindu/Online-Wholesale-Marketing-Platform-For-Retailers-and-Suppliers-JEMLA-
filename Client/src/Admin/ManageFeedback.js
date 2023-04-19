import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import './ListProduct.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AuthenticationContext from './AuthenticationContext'
import ProductContext from './ProductContext'
// import productManager from '../components/supplier dashboard/supplier-image/manager.jpg'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

function ManageFeedback() {
  const { user } = useContext(AuthenticationContext)

  const [feedbacks, setFeedbacks] = useState([])
  //   const [rID, setRID] = useState('')

  useEffect(() => {
    // getProductsInformation()
    getFeedbacks()
  }, [])

  function getFeedbacks() {
    let url = `http://localhost:7000/getFeedbacks/${user.id}`
    axios.get(url).then((res) => {
      console.log(res.data.foundSupplier.feedbacks)
      setFeedbacks(res.data.foundSupplier.feedbacks)
      //   var rv = {}
      //   for (var i = 0; i < res.data.foundSupplier.feedbacks.length; ++i)
      //     if (res.data.foundSupplier.feedbacks[i] !== undefined)
      //       rv[i] = res.data.foundSupplier.feedbacks[i][0]
      //   console.log(rv)

      // setFeedbacks(rv)

      // console.log(feedbacks)
      //console.log(res.data.foundProduct)
      //setProducts(res.data.foundProduct)
    })
  }

  const gridStyle = { fontSize: 15 }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    // {
    //   field: 'prodID',
    //   headerName: 'Product ID',
    //   width: 70,

    //   //valueGetter: (params) => `${params.row.prodID}`,
    // },
    {
      field: 'title',
      headerName: 'Product Name',
      width: 300,
    },
    { field: 'feedbackType', headerName: 'Feedback Type', width: 200 },
    {
      field: 'providedFeedback',
      headerName: 'Feedback',
      width: 1000,
      innerHeight: 1500,
    },
  ]

  return (
    <div>
      <div class="manage-products-container">
        <div class="manage-products-manage-products-main-container">
          <h1 class="manage-products-text">Manage Feedback</h1>
          <div class="manage-products-container2">
            <div class="manage-products-container3">
              {/* <button
                onClick={() => {
                  getFeedbacks()
                }}
              >
                CLICK ME!
              </button> */}
            </div>
            <div class="manage-products-container4">
              {/* <img alt="" src={productManager} class="manage-products-image" /> */}
              <div class="manage-products-container5">
                <div className="product-table">
                  <div>
                    {feedbacks.map((e) => {
                      return <div>{console.log('NIGGGAAA', e.id)}</div>
                    })}
                  </div>
                  <DataGrid
                    rows={feedbacks.map((e, i) => {
                      return {
                        id: i + 1,
                        title: e.product.title,
                        feedbackType: e.feedBackType,
                        providedFeedback: e.providedFeedback,
                      }
                    })}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    rowHeight={100}
                    style={gridStyle}
                    pagination
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    components={{ Toolbar: GridToolbar }}
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

                    // checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageFeedback
