import React from "react";
import main from "../../assets/images/main.svg";
import { Wrapper } from "./landing.styles";
import { Logo } from "../../components/index";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav >
        {/* <Logo /> */}
      </nav>

      <div className="container page">
        {" "}
        <div className="info">
          <h1>
            UU <span>Point</span> 
          </h1>
          <p>Explore Jobs and B.Tech Notes All in One Place!</p>
          <p>Simplify Your Job Search and Academic Journey Now</p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
