import './index.css'

const LatestMatch = props => {
  console.log(props)
  return (
    <div className="match-details-container">
      <div className="team-info-container">
        <div className="team-info">
          <h1 className="team-name-heading">Delhi Capitals</h1>
          <p className="date-text">2020-10-20</p>
          <p className="venue">Dubai international Stadium</p>
          <p className="venue">Kings XI Punjab Won by 5 wickets</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/dc-logo-img.png"
          className="team-logo"
        />
      </div>
      <div className="game-info">
        <h1 className="details-name">First Innigs</h1>
        <p className="details-info">Delhi Capitals</p>
        <h1 className="details-name">Second Inings</h1>
        <p className="details-info">Kings XI Punjab</p>
        <h1 className="details-name">Man of The Match</h1>
        <p className="details-info">S Dhawan</p>
        <h1 className="details-name">Umpires</h1>
        <p className="details-info">C Shamshuddin</p>
      </div>
    </div>
  )
}

export default LatestMatch
