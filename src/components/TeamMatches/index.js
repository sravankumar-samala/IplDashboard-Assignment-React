// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

export default class TeamMatches extends Component {
  state = {
    recentMatchesList: [],
    latestMatchDetails: {},
    teamBannerUrl: '',
    isDataReceived: false,
    team: '',
  }

  componentDidMount = () => {
    this.getRecentMatchesDetails()
  }

  getRecentMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await response.json()

    const bannerUrl = jsonData.team_banner_url

    const data = jsonData.latest_match_details
    const updatedLatestMatchObject = {
      competingTeam: data.competing_team,
      competingTeamLogo: data.competing_team_logo,
      date: data.date,
      firstInnings: data.first_innings,
      id: data.id,
      manOfTheMatch: data.man_of_the_match,
      matchStatus: data.match_status,
      result: data.result,
      secondInnings: data.second_innings,
      umpires: data.umpires,
      venue: data.venue,
    }

    const updatedRecentMatchesList = jsonData.recent_matches.map(eachObj => ({
      competingTeam: eachObj.competing_team,
      competingTeamLogo: eachObj.competing_team_logo,
      date: eachObj.date,
      firstInnings: eachObj.first_innings,
      id: eachObj.id,
      manOfTheMatch: eachObj.man_of_the_match,
      matchStatus: eachObj.match_status,
      result: eachObj.result,
      secondInnings: eachObj.second_innings,
      umpires: eachObj.umpires,
      venue: eachObj.venue,
    }))

    this.setState({
      recentMatchesList: updatedRecentMatchesList,
      latestMatchDetails: updatedLatestMatchObject,
      teamBannerUrl: bannerUrl,
      isDataReceived: true,
      team: id,
    })

    // console.log(jsonData)
  }

  renderTeamMatchesDetails = () => {
    const {
      recentMatchesList,
      latestMatchDetails,
      teamBannerUrl,
      team,
    } = this.state
    console.log(team)

    return (
      <div className={`team-matches-container ${team}`}>
        <div className="banner-image-container">
          <img src={teamBannerUrl} alt="team banner" />
        </div>
        <h3>Latest Matches</h3>
        <LatestMatch latestMatchData={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatchesList.map(eachMatch => (
            <MatchCard key={eachMatch.id} recentMatchData={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isDataReceived} = this.state

    return (
      <>
        {!isDataReceived ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchesDetails()
        )}
      </>
    )
  }
}
