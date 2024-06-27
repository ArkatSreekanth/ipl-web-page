import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsData: [],
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: updatedData})
  }

  render() {
    const {teamsData} = this.state
    console.log(teamsData)
    return (
      <div className="ipl-bg-container">
        <div className="ipl-head-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul className="teams-list">
          {teamsData.length !== 0
            ? teamsData.map(eachItem => <TeamCard eachItem={eachItem} />)
            : ''}
        </ul>
      </div>
    )
  }
}

export default Home
