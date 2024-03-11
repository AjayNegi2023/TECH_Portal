import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "./Job.styles";
import JobInfo from "../JobInfo/JobInfo";
import { useAppContext } from "../../context/appContext";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  lastDate, 
  status,
  description,
  skills,
  userRole
}) => {
  const { setEditJob, deleteJob } = useAppContext();
  let date = moment(lastDate); 
  date = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <div className="card-header">
        <div className="job-info">
          <h3>{position}</h3>
          <p>{company}</p>
        </div>
      </div>

      <div className="card-body">
        <div className="job-details">
          <JobInfo icon={<FaLocationArrow />} text={`Location: ${jobLocation}`} />
          <JobInfo icon={<FaCalendarAlt />} text={`Last Date: ${date}`} /> 
          <JobInfo icon={<FaBriefcase />} text={`Job Type: ${jobType}`} />
          <div className={`status ${status}`}>{status}</div>
          <div className="description">
            <h4>Description:</h4>
            <p>{description}</p>
          </div>
          <div className="skills">
            <h4>Skills Required:</h4>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {userRole === "admin" && (
          <div className="actions">
            <Link
              to="/add-job"
              onClick={() => setEditJob(_id)}
              className="btn edit-btn"
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteJob(_id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Job;
