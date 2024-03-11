import { Outlet } from "react-router-dom";
import "./SharedLayout.styles";
import { Navbar, BigSidebar, SmallSidebar } from "../../../components";
import Wrapper from "./SharedLayout.styles";


const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="">
        <Navbar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;