import Wrapper from "./Navbar.styles";
import { FaUserCircle, FaCaretDown, FaBars } from "react-icons/fa";
import { useAppContext } from "../../context/appContext";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const { logoutUser, user ,userRole} = useAppContext();

  const toggleNavLinks = () => {
    setShowNavLinks(prevState => !prevState); 
  };

  const links = [
    { id: 2, text: "all jobs", path: "all-jobs", },
    { id: 4, text: "profile", path: "profile", },
    { id: 5, text: "Courses", path: "course", },
  ];

  console.log("userRole" ,  userRole)
  const isAdmin= userRole==="admin";
  

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo-container">
          <NavLink to="/" className="logo">
            UUPoint
          </NavLink>
        </div>

        <div className={`nav-links ${showNavLinks ? 'show' : ''}`}>
          <NavLink to="/all-jobs" className="nav-link" >
            All Jobs
          </NavLink>
          <NavLink to="/course" className="nav-link" >
            Courses
          </NavLink>
          <NavLink to="/profile" className="nav-link" >
            Profile
          </NavLink>
         {  isAdmin && (
               <NavLink to="/add-job" className="nav-link" >
               Add Job
             </NavLink>
         )
         }
        </div>

        <div className="dropdown-icon" onClick={toggleNavLinks}>
          <FaBars />
        </div>

        <div className="btn-container">
          <button
            type="button"
            className="user-profile-btn"
            onClick={logoutUser}
            style={{ background: "blue" }}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
