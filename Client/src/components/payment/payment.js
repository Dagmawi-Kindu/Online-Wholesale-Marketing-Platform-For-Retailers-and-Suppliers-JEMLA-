import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import ProductContext from '../../Admin/ProductContext'
import './Payment.css'
import Swal from 'sweetalert2'
const Payment = () => {
  const { items } = useContext(ProductContext)
  console.log('ITEEEMMMSSSS', items)
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('')

  const url = `http://localhost:7000/makePayment/${items}`

  const handlePayment = () => {
    const dataToSubmit = {
      amount,
      currency,
    }
    console.log(dataToSubmit)
    if (amount === '' || currency === '' || currency === 'opt0') {
      Swal.fire('Error!', 'Please fill the form carefully!', 'error')
    } else if (
      !RegExp(
        /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/,
      ).test(amount)
    ) {
      Swal.fire('Error!', 'Invalid Amount', 'error')
    } else {
      axios({
        method: 'POST',
        url: url,
        data: dataToSubmit,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.data)

        window.open(res.data.data.checkout_url)
      })
    }
  }

  return (
    <div>
      <div className="payment">
        <img class="wave" src="./images/E-Wallet.png" alt=""></img>
        <div className="fillpay">
          <h2 class="title">Enter payment Amount</h2>
          <input
            type="number"
            onChange={(e) => {
              setAmount(e.target.value)
            }}
            value={amount}
            placeholder="Enter the amount"
          />
          <select
            onChange={(event) => {
              setCurrency(event.target.value)
            }}
            value={currency}
          >
            <option value="opt0" selected="selected">
              -- Choose --
            </option>
            <option value="ETB">ETB</option>
            <option value="USD">USD</option>
          </select>

          <button className="btn-pay" onClick={handlePayment}>
            PAY
          </button>
        </div>
      </div>
    </div>
  )
}

export default Payment
