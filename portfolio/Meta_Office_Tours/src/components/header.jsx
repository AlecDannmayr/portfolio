
import { Link } from "react-router-dom";
import ResponsiveNav from "./responsiveNav"
import MetaLogo from "../assets/Meta_Logo.svg"

const header = () => {
  return (
    <>
        <div className="header">
        <div className="logo-container">
          <Link to="/"><img src={MetaLogo} alt="Meta Logo" /></Link>
        </div>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/meta_offices">Meta offices</Link></p>
        <p><Link to="/Reality_Labs">Reality Labs</Link></p>
        <p><Link to="/Workplace_design">Workplace design</Link></p>
        </div>
      <ResponsiveNav />
      </>
  );
};


export default header