// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  // competingTeam competingTeamLogo date firstInnings i
  // d manOfTheMatch matchStatus
  // result secondInnings umpires venue
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <div className="match-details">
        <p className="opponent-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="opponent-team-logo-container">
        <img src={competingTeamLogo} alt={`latest match {${competingTeam}}`} />
      </div>
      <div className="latest-match-info">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
