import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import './ListProduct.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AuthenticationContext from './AuthenticationContext'
import ProductContext from './ProductContext'
// import productManager from '../components/supplier dashboard/supplier-image/manager.jpg'
import {
  DataGrid,
  GridToolbar,
  // GridToolbarContainer,
  // GridToolbarExport,
} from '@mui/x-data-grid'

function ListProduct() {
  const { user } = useContext(AuthenticationContext)
  const { addToProdDescription } = useContext(ProductContext)

  const [products, setProducts] = useState([])
  // const [searchedProduct, setSearchedProduct] = useState([])
  const [rID, setRID] = useState('')

  // const [searchKeyWord, setSearchKeyWord] = useState('')
  // const [isClicked, setIsClicked] = useState('')
  useEffect(() => {
    getProductsInformation()
  }, [])

  function getProductsInformation() {
    let url = `http://localhost:7000/getProductsInfo/${user.id}`
    axios.get(url).then((res) => {
      //console.log(res.data.foundProduct)
      setProducts(res.data.foundProduct)
    })

    //setFndProducts(data.data.foundProduct)
  }
  // const searchProducts = async () => {
  //   let url = `http://localhost:7000/searchProducts/${searchKeyWord}`
  //   const searchResult = await axios.get(url)
  //   console.log(searchResult.data.foundProduct)
  //   // setSearchedProduct(searchResult.data.foundProduct)
  //   setSearchedProduct(searchResult.data.foundProduct)
  // }
  const removeProducts = () => {
    let url = `http://localhost:7000/removeProducts/${rID}`
    console.log(url)
    axios({
      method: 'DELETE',
      url: url,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    }).then((res) => {
      console.log(res)
      getProductsInformation()
    })
  }

  const gridStyle = { fontSize: 15 }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'prodID',
      headerName: 'ProductID',
      width: 70,
      hide: true,
      valueGetter: (params) => `${params.row.prodID}`,
    },

    {
      field: 'actionns',
      headerName: 'Actions',
      width: 200,
      type: 'actions',
      getActions: (params) => [
        <button
          onClick={() => {
            setRID(params.row.prodID)
            removeProducts()
          }}
        >
          Remove
        </button>,
        <Link to="/updateproduct">
          <button
            onClick={() => {
              addToProdDescription(params.row)
            }}
          >
            Edit
          </button>
        </Link>,
      ],

      // renderCell: (params) => {
      //    <button>Click</button>
      // }
    },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'category', headerName: 'Product Category', width: 300 },
    {
      field: 'productDescription',
      headerName: 'Product Description',
      width: 400,
    },
    {
      field: 'costPerItem',
      headerName: 'CostPerItem',
      type: 'number',
      width: 140,
    },
    { field: 'productImage1', headerName: 'Product Image 1', width: 200 },
    { field: 'productImage2', headerName: 'Product Image 2', width: 200 },
    { field: 'productImage3', headerName: 'Product Image 3', width: 200 },
    { field: 'productImage4', headerName: 'Product Image 4', width: 200 },
    { field: 'availability', headerName: 'Availablity', width: 200 },
    {
      field: 'secret_key',
      headerName: 'Secret Key',
      width: 300,
    },
    {
      field: 'supplierName',
      headerName: 'Supplier Name',
      width: 200,
    },

    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ]
  // console.log('IS IT CLICKED???  ', isClicked)

  return (
    <div>
      <link href="./manage-products.css" rel="stylesheet" />
      <div class="manage-products-container">
        <div class="manage-products-manage-products-main-container">
          {/* <div class="manage-products-container1">
            <input
              type="text"
              onChange={(e) => {
                setSearchKeyWord(e.target.value)
              }}
              value={searchKeyWord}
              placeholder="Search your products here"
              class="manage-products-textinput input"
            />
            <button
              class="manage-products-button button"
              onClick={() => {
                setIsClicked('search')
                searchProducts()
              }}
            >
              Search
            </button>
          </div> */}
          <h1 class="manage-products-text">Manage Products</h1>
          <div class="manage-products-container2">
            <div class="manage-products-container3">
              {/* <button
                onClick={() => {
                  setIsClicked('main')
                }}
              >
                Refresh
              </button> */}
              <Link to="/addproduct">
                <button>Add New Product</button>
              </Link>
            </div>
            <div class="manage-products-container4">
              {/* <img alt="" src={productManager} class="manage-products-image" /> */}
              <div class="manage-products-container5">
                <div className="product-table">
                  <DataGrid
                    rows={products.map((e, i) => {
                      return {
                        id: i + 1,
                        prodID: e.id,
                        title: e.title,
                        productImage1: e.productImage1[0],
                        category: e.productCategory,
                        productDescription: e.productDescription,
                        costPerItem: e.costPerItem,
                        productImage2: e.productImage2,
                        productImage3: e.productImage3,
                        productImage4: e.productImage4,
                        availability: e.availability,
                        secret_key: e.secret_key,
                        supplierName: e.supplierName,
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
                    // components={{
                    //   Toolbar: () => {
                    //     return (
                    //       <GridToolbarContainer
                    //         sx={{ justifyContent: 'flex-start' }}
                    //       >
                    //         <GridToolbar />
                    //       </GridToolbarContainer>
                    //     )
                    //   },
                    // }}

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

export default ListProduct
