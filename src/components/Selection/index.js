import {Component} from 'react'

import './index.css'

const ticketTypesList = [
  {
    id: 1,
    optionType: 'standard',
  },
  {
    id: 2,
    optionType: 'premium',
  },
]

let getTicketType = localStorage.getItem('TicketType')
getTicketType = getTicketType ? getTicketType : ticketTypesList[0].optionType

let noOfSeats = localStorage.getItem('NoOfTickets')
noOfSeats = noOfSeats ? noOfSeats : 0

class Selection extends Component {
  state = {seatType: getTicketType, noOfTickets: noOfSeats}

  onChangeSeatOption = event => {
    this.setState({seatType: event.target.value})
    localStorage.setItem('TicketType', event.target.value)
    window.location.reload()
  }

  onChangeNoOfTickets = event => {
    this.setState({noOfTickets: event.target.value})
    localStorage.setItem('NoOfTickets', event.target.value)
    window.location.reload()
  }

  render() {
    const {seatType, noOfTickets} = this.state

    return (
      <div className="select-quantity-container">
        <select
          className="select"
          onChange={this.onChangeSeatOption}
          value={seatType}
        >
          <option className="option" value="standard">
            standard
          </option>
          <option className="option" value="premium">
            premium
          </option>
        </select>
        <div className="no-of-seats-input-container">
          <p className="number-text">No Of Seats:</p>
          <select
            className="no-of-tickets-select"
            onChange={this.onChangeNoOfTickets}
            value={noOfTickets}
          >
            <option className="no-of-tickets-option" value="1">
              1
            </option>
            <option className="no-of-tickets-option" value="2">
              2
            </option>
            <option className="no-of-tickets-option" value="3">
              3
            </option>
            <option className="no-of-tickets-option" value="4">
              4
            </option>
            <option className="no-of-tickets-option" value="5">
              5
            </option>
            <option className="no-of-tickets-option" value="6">
              6
            </option>
          </select>
        </div>
      </div>
    )
  }
}

export default Selection
