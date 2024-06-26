import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import Loading from "../Loading";
import Job from "../Job/Job";
import Wrapper from "./JobsContainer.styles";
import PageBtnContainer from "../PageBtnContainer/PageBtnContainer";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    userRole
  } = useAppContext();
  useEffect(() => {
    getJobs();
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} userRole={userRole} />;
        })}
      </div>

      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
