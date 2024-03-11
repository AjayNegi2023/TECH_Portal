import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-50);
  }

  .card-header {
    padding: 0.5rem 1rem; /* Reduced padding */
    border-bottom: 1px solid var(--grey-100);
    display: flex;
    align-items: center;
  }

  .company-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: 50%;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--white);
    margin-right: 1rem; /* Reduced margin */
  }

  .company {
    color: var(--primary-500);
    font-size: 1.2rem;
    margin: 0;
  }

  .position {
    color: var(--grey-800);
    font-size: 1rem;
    margin: 0;
  }

  .card-body {
    padding: 0.5rem 1rem; /* Reduced padding */
  }

  .job-details {
    margin-bottom: 1rem;
  }

  .job-details h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .location-jobtype {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--grey-400);
    margin-bottom: 1rem;
  }

  .status {
    border-radius: 4px;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    color: var(--white);
    background-color: var(--blue-dark);
  }

  .description {
    margin-bottom: 1rem;
  }

  .skills {
    color: var(--grey-800);
    margin-bottom: 1rem;
  }

  .skills h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .skills ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .skills li {
    margin-bottom: 0.5rem;
  }

  .actions {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .edit-btn,
  .delete-btn {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
  }

  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }

  .edit-btn:hover,
  .delete-btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

 
`;

export default Wrapper;
