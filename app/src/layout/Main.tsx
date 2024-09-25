import { Outlet, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import MainArea from "../pages/minh-pham-design/layout/MainAreaMPD/MainAreaMPD";
import MainAreaRM from "../pages/raw-materials/layout/MainAreaRM/MainAreaRM";
import TheVerge from "../pages/the-verge/TheVerge";
import RawMaterials from "../pages/raw-materials/RawMaterials";
import MinhPhamDesign from "../pages/minh-pham-design/MinhPhamDesign";



export default function Main(){

    return(
        <>
         <Routes>
                <Route
                    path="/"
                    element={<About />} />
                <Route
                    path="/ming-pham-design"
                    element={<MinhPhamDesign />}
                />
                <Route
                    path="/raw-materials"
                    element={<RawMaterials />} />
                <Route
                    path="/the-verge"
                    element={<TheVerge />} />
            </Routes>

            <div id="pagesArea" className="m-5">
                <Outlet />
            </div>
        </>
    )
}