import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
    margin: 0; /* Remove margin */
  }
  & > h5 {
    font-weight: 700;
    margin: 0; /* Remove margin */
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    column-gap: 1rem;
    margin: 0; /* Remove margin */
    padding: 0; /* Remove padding */
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
