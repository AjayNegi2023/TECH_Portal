import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--white);
  padding: 0 20px;

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    color: var(--primary-500);
    text-decoration: none;
    margin-right: 20px;
  }

  .dropdown-icon {
    display: none;
    align-items: center;
    font-size: 1.5rem;
    color: var(--primary-500);
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 10px;
    border-radius: 4px;
    z-index: 100;
  }

  .nav-links.show {
    display: none;
  }

  .nav-link {
    color: var(--primary-500);
    text-decoration: none;
    padding: 5px 10px;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: var(--primary-700);
  }

  .profile-btn {
    display: flex;
    align-items: center;
  }

  .btn {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: var(--primary-500);
    cursor: pointer;
  }

  //   .toggle-Profile-btn {
//     background: transparent;
//     border-color: transparent;
//     font-size: 1.75rem;
//     color: var(--primary-500);
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//   }

  .user-profile-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .profile-dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .profile-show-dropdown {
    visibility: visible;
  }
  .profile-dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }

  //   .dropdown-btn {
//     background: transparent;
//     border-color: transparent;
//     color: var(--primary-500);
//     letter-spacing: var(--letterSpacing);
//     text-transform: capitalize;
//     cursor: pointer;
//   }
  @media (max-width: 992px) {
    .logo-container {
      width: auto;
    }

    .logo {
      display: inline;
      margin-right: 10px;
    }

    .dropdown-icon {
      display: inline;
      align-items: center;
      font-size: 1.5rem;
      color: var(--primary-500);
      cursor: pointer;
      margin-left: auto; /* Add this line to align the icon to the right */
    }
    

    .nav-links {
      display: none;
    }

    .nav-links.show {
      display: flex;
    }

    .profile-btn {
      display: none;
    }
  }

  @media (max-width: 992px) {
    .logo-container {
      width: auto;
    }
  
    .logo {
      display: inline;
      margin-right: 10px;
    }
  
    .dropdown-icon {
      display: inline;
      align-items: center;
      font-size: 1.5rem;
      color: var(--primary-500);
      cursor: pointer;
      margin-left: auto; 
    }
  
    .nav-links {
      display: none;
    }
  
    .nav-links.show {
      display: flex;
      flex-direction: column;
      background: var(--primary-100);
      box-shadow: var(--shadow-2);
      padding: 10px;
      border-radius: 4px;
      z-index: 100;
      position: absolute; 
      top: calc(var(--nav-height) + 10px); 
      right: 0; 
      width: auto; 
      
    }
  
    .profile-btn {
      display: none;
    }
  
    .nav-link {
      padding: 10px;
      text-align: right; 
    }
  }
  
  @media (min-width: 992px) {
    .nav-center {
      width: 90%;
    }
  
    .logo {
      display: flex;
      align-items: center;
      margin-right: auto;
    }
  
    .nav-links {
      flex: 1;
      justify-content: center;
      background: none;
      box-shadow: none;
      padding: 0;
      border-radius: 0;
      
    }
  
    .nav-link {
      padding: 0 20px;
    }
  
    .profile-btn {
      display: flex;
      align-items: center;
    }
  }
  
  }
  
`;

export default Wrapper;
