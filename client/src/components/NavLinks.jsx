import Wrapper from "./NavLinks.style"; 
import { NavLink } from "react-router-dom";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { useAppContext } from "../context/appContext";
import CourseHome from "../courses/Home/CourseHome";
import { ImBook } from "react-icons/im";

const NavLinks = ({ toggleSidebar, userRole }) => {
  const isAdmin = userRole === "admin";
  const links = [
    { id: 2, text: "all jobs", path: "all-jobs", icon: <MdQueryStats /> },
    { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
    { id: 5, text: "Courses", path: "course", icon: <ImBook /> },
  ];

  if (isAdmin) {
    links.push({ id: 1, text: "stats", path: "/", icon: <IoBarChartSharp /> });
    links.push({ id: 3, text: "add job", path: "add-job", icon: <FaWpforms /> });
  }

  return (
    <Wrapper> 
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, id, icon } = link;

          return (
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {text}
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default NavLinks;
