import { useAppContext } from "../../context/appContext";
import NavLinks from "../NavLinks";
import Logo from "../Logo/Logo";
import Wrapper from "./BigSidebar.styles";

const BigSidebar = () => {
  const { showSidebar,userRole } = useAppContext();
  // const {userRole} = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks userRole={userRole} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
