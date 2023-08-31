import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer";
import {Header} from '../../components'
import "./Layout.scss"

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
