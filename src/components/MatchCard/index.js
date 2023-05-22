// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchData} = props
  // competingTeam competingTeamLogo date
  // firstInnings id manOfTheMatch matchStatus
  // result secondInnings umpires venue
  const {
    competingTeamLogo,
    competingTeam,
    matchStatus,
    result,
  } = recentMatchData
  //   console.log(recentMatchData)

  return (
    <li className="recent-match-item">
      <div className="logo-container">
        <img src={competingTeamLogo} alt={`latest match {${competingTeam}}`} />
      </div>

      <p className="opponent-team">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
