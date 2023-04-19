import React, { useState, useEffect, useContext } from 'react'
import './Feedback.css'
import myFeedBackImage from './images/Feedback-bro.png'
import ProductContext from './ProductContext'
import AuthenticationContext from './AuthenticationContext'
import axios from 'axios'
import Swal from 'sweetalert2'
function Feedback2({ supplierID }) {
  const { user } = useContext(AuthenticationContext)
  const { items } = useContext(ProductContext)
  const [feedBackType, setFeedBackType] = useState('')
  const [providedFeedback, setProvidedFeedback] = useState('')

  // console.log('FEEDBACK-USERS:  ', user)
  console.log('FEEDBACK-PRODUCTS:  ', items)

  function handleSubmit(event) {
    event.preventDefault()

    const dataToSubmit = {
      feedBackType,
      providedFeedback,
    }
    if (feedBackType === '' || providedFeedback === '') {
      Swal.fire('Error!', 'Please fill all the requirements', 'error')
    } else {
      let url = `http://localhost:7000/issueFeedback/${items}/${supplierID}`
      console.log('UURRRRLLLL: ', url)
      console.log('DATA TO BE SUBMIT: ', dataToSubmit)
      axios({
        method: 'POST',
        url: url,
        data: dataToSubmit,
        headers: {
          // Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      }).then((res) => {
        console.log(res.status)
        if (res.status === 200) {
          Swal.fire('Success!', 'Thank you for your feedback!', 'success')
        }
      })
    }
  }

  return (
    <div>
      <div class="feedbackk-info-home-container">
        <div class="feedbackk-info-home-main-page">
          <div class="feedbackk-info-home-container1">
            <img
              alt=""
              src={myFeedBackImage}
              class="feedbackk-info-home-image"
            />
            <div class="feedbackk-info-home-container2">
              <div class="feedbackk-info-home-container3">
                <h1 class="feedbackk-info-home-text">
                  Please select your feedback category below.
                </h1>
                <div class="feedbackk-info-home-container4">
                  <button
                    class="feedbackk-info-home-button "
                    id="btn1"
                    name="btn1"
                    onClick={() => {
                      setFeedBackType('suggestion')
                      document.getElementById('btn1').style[
                        'background-color'
                      ] = '#f09432'
                      document.getElementById('btn2').style[
                        'background-color'
                      ] = '#d8d8d8'
                      document.getElementById('btn3').style[
                        'background-color'
                      ] = '#d8d8d8'
                    }}
                  >
                    Suggestion
                  </button>
                  <button
                    class="feedbackk-info-home-button1 "
                    id="btn2"
                    name="btn2"
                    onClick={() => {
                      setFeedBackType('something_is_not_right')
                      document.getElementById('btn1').style[
                        'background-color'
                      ] = '#d8d8d8'
                      document.getElementById('btn2').style[
                        'background-color'
                      ] = '#f09432'
                      document.getElementById('btn3').style[
                        'background-color'
                      ] = '#d8d8d8'
                    }}
                  >
                    Something is not right
                  </button>
                  <button
                    class="feedbackk-info-home-button2 "
                    id="btn3"
                    name="btn3"
                    onClick={() => {
                      setFeedBackType('compliment')
                      document.getElementById('btn1').style[
                        'background-color'
                      ] = '#d8d8d8'
                      document.getElementById('btn2').style[
                        'background-color'
                      ] = '#d8d8d8'
                      document.getElementById('btn3').style[
                        'background-color'
                      ] = '#f09432'
                    }}
                  >
                    Compliment
                  </button>
                </div>
              </div>
              <h1 class="feedbackk-info-home-text1">
                Please leave your feedback below:
              </h1>
              <textarea
                placeholder="Please leave your feedback here"
                class="feedbackk-info-home-textarea textarea"
                id="txtarea"
                name="txtarea"
                required
                onChange={(e) => {
                  setProvidedFeedback(e.target.value)
                }}
                value={providedFeedback}
              ></textarea>
              <div class="feedbackk-info-home-container5">
                <button
                  class="feedbackk-info-home-button3 "
                  id="btn4"
                  name="btn4"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback2
