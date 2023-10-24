import {Component} from 'react'
import './index.css'

const ProceedButton = props => {
  const {seatsList, a} = props
  const onClickProceedButton = () => {
    seatsList.forEach(element => {
      if (element.isSelected) {
        element.isAvailable = false
      }
    })
    let b = seatsList
    a(b)
  }
  return (
    <div className="proceed-button-container">
      <button
        className="proceed-button"
        type="button"
        onClick={onClickProceedButton}
      >
        Proceed
      </button>
    </div>
  )
}

export default ProceedButton
