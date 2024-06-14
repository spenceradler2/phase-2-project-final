import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><Link to="/TravelPlanList">See Everyone's Travel Plans</Link></li>
      <li><Link to="/NewTravelForm">Add a Travel Plan</Link></li>
    </ul>
  )
}

export default Navbar