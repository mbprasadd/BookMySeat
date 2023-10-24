import './index.css'

const Seat = props => {
  const {seatDetails, onChangeSeatStatus} = props
  const {seatId, isSelected, isAvailable} = seatDetails

  let seatClass = ''

  if (isAvailable === false) {
    seatClass = 'seat-unavailable'
  } else {
    if (isAvailable) {
      seatClass = 'seat-available'
      if (isSelected) {
        seatClass = 'seat-selected'
      } else {
        seatClass = 'seat-available'
      }
    }
  }

  const onClickSeat = () => {
    onChangeSeatStatus(seatId)
  }

  return (
    <li className="seat-item">
      <button type="button" className={seatClass} onClick={onClickSeat}>
        {' '}
        S{' '}
      </button>
    </li>
  )
}

export default Seat
