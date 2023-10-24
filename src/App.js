import {Component} from 'react'

import Selection from './components/Selection'
import SeatingLayout from './components/SeatingLayout'
import ProceedButton from './components/ProceedButton'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="title">My Seat Booking</h1>
        <div className="my-seat-booking-container">
          <Selection />
          <div className="selection-layout-seat-keys-container">
            <SeatingLayout />
            <div className="seat-keys-layout-container">
              <h6 className="seat-keys-text">Keys to Seat Layout: </h6>
              <div className="seat-keys-status-container">
                <div className="seat-icon icon-available"></div>
                <p className="seat-status-text">Availabel</p>
              </div>
              <div className="seat-keys-status-container">
                <div className="seat-icon icon-unavailable"></div>
                <p className="seat-status-text">Un Availabel</p>
              </div>
              <div className="seat-keys-status-container">
                <div className="seat-icon icon-selected"></div>
                <p className="seat-status-text">YOUR Selection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
