import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImageUrl} = eachItem
  return (
    <Link to={`ipl/${id}`} className="team-link">
      <li>
        <div className="team-card">
          <img src={teamImageUrl} alt={id} className="team-img" />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
