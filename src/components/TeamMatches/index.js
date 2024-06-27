import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

const teamBgTheme = [
  {
    id: 'RCB',
    bgColor: '#a4261d',
  },
]

class TeamMatches extends Component {
  render() {
    const teamTheme = {
      backgroundImage: `linear-gradient(to bottom, #a4261d, #1e293b)`,
      minHeight: '100vh',
    }
    return (
      <div className="team-match-card" style={teamTheme}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/kxp-team-img.png"
          className="team-members-img"
          alt="KXP"
        />
        <h1 className="latest-match-heading">Latest Matches</h1>
        <LatestMatch />
        <MatchCard />
      </div>
    )
  }
}

export default TeamMatches
