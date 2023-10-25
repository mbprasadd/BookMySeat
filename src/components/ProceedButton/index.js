import './index.css'

const ProceedButton = props => {
  const {seatsList, proceedSelectedSeats} = props
  const onClickProceedButton = () => {
    seatsList.forEach(element => {
      if (element.isSelected) {
        element.isAvailable = false
      }
    })
    proceedSelectedSeats(seatsList)
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
