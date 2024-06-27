import './index.css'

const MatchCard = props => {
  console.log(props)
  return (
    <div className="match-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/dc-logo-img.png"
        alt="RCB"
        className="opponentl-team-img"
      />
      <h1>Sunrisers Hyderabad</h1>
      <p>Won by 12 runs</p>
      <p className="oppenent-img">Lost</p>
    </div>
  )
}

export default MatchCard
