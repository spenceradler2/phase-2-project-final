import { NavLink } from 'react-router-dom'
// import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  return (

    <header className="header">
     {/* <nav className="nav container">
       <Link to="/" className="nav__logo">
         Navigation Bar
       </Link> */}

    {/* <ul>
      <li><Link to="/TravelPlanList">See Everyone's Travel Plans</Link></li>
      <li><Link to="/NewTravelForm">Add a Travel Plan</Link></li>
    </ul> */}

<div
className={"nav__menu"}
id="nav-menu"
>
<ul className="nav__list">
  <li className="nav__item">
    <NavLink to="/TravelPlanList" className="nav__link">
    See Everyone's Travel Plans
    </NavLink>
  </li>
  <li className="nav__item">
    <NavLink to="/NewTravelForm" className="nav__link">
    Add a Travel Plan
    </NavLink>
  </li>
  </ul>
         {/* <div className="nav__close" id="nav-close">
           <IoClose />
         </div> */}
       </div>

       {/* <div className="nav__toggle" id="nav-toggle">
         <IoMenu />
       </div> */}
       {/* </nav> */}
       </header>

  )
}

export default Navbar