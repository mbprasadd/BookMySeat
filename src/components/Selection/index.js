import {Component} from 'react'

import './index.css'

const ticketTypesList = [
  {
    id: 1,
    optionType: 'standard',
  },
  {
    id: 2,
    optionType: 'premiun',
  },
]

let getTicketType = localStorage.getItem('TicketType')
getTicketType = getTicketType ? getTicketType : 'standard'
class Selection extends Component {
  state = {ticketType: ticketTypesList[0].optionType, noOfTickets: 0}

  onChangeOption = event => {
    this.setState({ticketType: event.target.value})
    localStorage.setItem('TicketType', event.target.value)
    window.location.reload()
  }

  onChangeNoOfTickets = event => {
    this.setState({noOfTickets: event.target.value})
  }

  render() {
    const {ticketType, noOfTickets} = this.state

    return (
      <div className="select-quantity-container">
        <select
          className="select"
          onChange={this.onChangeOption}
          value={getTicketType}
        >
          <option key="standard" className="option" value="standard">
            standard
          </option>
          <option key="premium" className="option" value="premium">
            premium
          </option>
          {/* {ticketTypesList.map(eachOption => (
                        <option key={eachOption.ticketType} className="option" value={ticketType}>{eachOption.optionType}</option>
                    ))} */}
        </select>
        <div className="no-of-seats-inout-container">
          <p className="number-text">No oF Seats:</p>
          <input
            className="input"
            type="number"
            value={noOfTickets}
            onChange={this.onChangeNoOfTickets}
          />
        </div>
      </div>
    )
  }
}

export default Selection
