import {Component} from 'react'

import ProceedButton from '../ProceedButton'

import Seat from '../Seat'

import './index.css'

let seatsList = [
  {
    seatId: 1,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 2,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 3,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 4,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 5,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 6,
    seatType: 'premium',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 7,
    seatType: 'premium',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 8,
    seatType: 'premium',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 9,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 10,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 11,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 12,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 13,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 14,
    seatType: 'premium',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 15,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 16,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 17,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 18,
    seatType: 'premium',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 19,
    seatType: 'premium',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 20,
    seatType: 'premium',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 21,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 22,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 23,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 24,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 25,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 26,
    seatType: 'standard',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 27,
    seatType: 'standard',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 28,
    seatType: 'standard',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 29,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 30,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 31,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 32,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 33,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 34,
    seatType: 'standard',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 35,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 36,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 37,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 38,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 39,
    seatType: 'standard',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 40,
    seatType: 'standard',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 41,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 42,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 43,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 44,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 45,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 46,
    seatType: 'standard',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 47,
    seatType: 'standard',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 48,
    seatType: 'standard',
    isSelected: false,
    isAvailable: false,
  },
  {
    seatId: 49,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
  {
    seatId: 50,
    seatType: 'standard',
    isSelected: false,
    isAvailable: true,
  },
]
let retrieveData = localStorage.getItem('seatsData')
if (retrieveData) {
  seatsList = JSON.parse(retrieveData)
}

class SeatingLayout extends Component {
  state = {seatsList: seatsList, ticketType: ''}

  onChangeSeatStatus = seatId => {
    this.setState(prevState => ({
      seatsList: [
        ...prevState.seatsList.map(eachSeat => {
          if (eachSeat.seatId === seatId) {
            return {...eachSeat, isSelected: !eachSeat.isSelected}
          }
          return eachSeat
        }),
      ],
    }))
  }

  proceedSelectedSeats = seatsList => {
    this.setState({seatsList})
    localStorage.setItem('seatsData', JSON.stringify(seatsList))
  }

  render() {
    const {seatsList} = this.state
    let displayType = 'standard'
    let ticType = localStorage.getItem('TicketType')
    if (ticType) {
      displayType = ticType
    }

    let premiumList = seatsList.filter(
      eachSeat => eachSeat.seatType === 'standard',
    )
    let standardList = seatsList.filter(
      eachSeat => eachSeat.seatType === 'premium',
    )

    return (
      <div className="seating-layout-container">
        <h4
          className="premium-seats-text"
          style={{display: displayType === 'premium' ? '' : 'none'}}
        >
          Premium Seats
        </h4>
        <ul
          className="seats-list-item-container"
          style={{display: displayType === 'premium' ? '' : 'none'}}
        >
          {premiumList.map(eachSeat => (
            <Seat
              seatDetails={eachSeat}
              key={eachSeat.seatId}
              onChangeSeatStatus={this.onChangeSeatStatus}
            />
          ))}
        </ul>
        <hr />
        <h4
          className="standard-seats-text"
          style={{display: displayType === 'standard' ? '' : 'none'}}
        >
          Standard Seats
        </h4>
        <ul
          className="seats-list-item-container"
          style={{display: displayType === 'standard' ? '' : 'none'}}
        >
          {standardList.map(eachSeat => (
            <Seat
              seatDetails={eachSeat}
              key={eachSeat.seatId}
              onChangeSeatStatus={this.onChangeSeatStatus}
            />
          ))}
        </ul>

        <img
          className="screen"
          src="https://tse3.mm.bing.net/th?id=OIP.3Axv3iO9KzER8_N86dfDhwAAAA&pid=Api&P=0&h=180"
          alt="screen"
        />
        <p className="screen-text">screen</p>

        <ProceedButton
          seatsList={seatsList}
          proceedSelectedSeats={this.proceedSelectedSeats}
        />
      </div>
    )
  }
}

export default SeatingLayout
