import styled from 'styled-components';

const Wrapper = styled.div`
  .nav-links {
    display: flex;
    align-items: center; 
    gap: 20px; 
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--grey-900);
  }

  .nav-link:hover .icon {
    color: var(--primary-500);
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    transition: var(--transition);
  }

  .active {
    color: var(--grey-900);
  }

  .active .icon {
    color: var(--primary-500);
  }

  @media (max-width: 768px) {
    .nav-links {
      flex-direction: column;
      gap: 10px; /* Reduce space between links */
    }

    .nav-link {
      font-size: 0.9rem; 
    }
  }
`;

export default Wrapper;
