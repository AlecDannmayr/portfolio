import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.css"
import "./css/responsiveMenu.css"
import "./css/media_Queries.css";
import "./css/animations.css";
import "./css/fonts.css"
import Home from "./pages/home";
import MetaOffices from "./pages/meta_offices";
import PartnerCenters from "./pages/partner_center";
import RealityLabs from "./pages/reality_labs";
import WorkplaceDesign from "./pages/workplace_design";
import NotFound404 from "./pages/not_found_404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meta_offices" element={<MetaOffices />} />
        <Route path="/partner_centers" element={<PartnerCenters />} />
        <Route path="/reality_labs" element={<RealityLabs />} />
        <Route path="/Workplace_Design" element={<WorkplaceDesign />} />
        <Route path='*' element={<NotFound404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
