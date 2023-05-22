// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

export default class Home extends Component {
  state = {iplTeamsList: []}

  componentDidMount = () => {
    this.getTeamCardsData()
  }

  getTeamCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await response.json()
    const teamsList = jsonData.teams

    const updatedTeamsList = teamsList.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplTeamsList: updatedTeamsList})
    // console.log(updatedTeamsList)
  }

  renderAppData = () => {
    const {iplTeamsList} = this.state

    return (
      <div className="main-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL DASHBOARD</h1>
        </div>
        <ul className="team-cards-list">
          {iplTeamsList.map(eachObj => (
            <TeamCard key={eachObj.id} teamObject={eachObj} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {iplTeamsList} = this.state
    return (
      <div className="app-container">
        {iplTeamsList.length === 0 ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderAppData()
        )}
      </div>
    )
  }
}
