// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamObject} = props
  const {id, name, teamImageUrl} = teamObject
  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="team-card-item">
        <div className="ipl-team-logo">
          <img src={teamImageUrl} alt={name} />
        </div>
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
