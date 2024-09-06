import { Outlet, Route, Routes } from "react-router-dom";
import About from "../../pages/about/About";
import MainArea from "../../pages/minh-pham-design/layout/MainAreaMPD/MainAreaMPD";
import MainAreaRM from "../../pages/raw-materials/layout/MainAreaRM/MainAreaRM";
import TheVerge from "../../pages/the-verge/TheVerge";



export default function Main(){

    return(
        <>
         <Routes>
                <Route
                    path="/"
                    element={<About />} />
                <Route
                    path="/ming-pham-design"
                    element={<MainArea />}
                />
                <Route
                    path="/raw-materials"
                    element={<MainAreaRM />} />
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