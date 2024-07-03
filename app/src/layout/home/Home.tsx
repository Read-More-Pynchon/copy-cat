

import {
    Nav,
    NavItem
} from 'reactstrap';

import MainArea from '../../pages/minh-pham-design/layout/MainAreaMPD/MainAreaMPD';

//import copyCatLogo from '../../assets/copyCatLogo.png';
import './Home.css';
import MainAreaRM from '../../pages/raw-materials/layout/MainAreaRM/MainAreaRM';
import MainAreaACC from '../../pages/about-copy-cat/layout/MainAreaACC/MainAreaACC';
import { Outlet, Route, Routes,  NavLink } from 'react-router-dom';

export default function Home() {



    return (
        <>
            <div className="copyCatHeader">
                <img className="copyCatLogo left" src="../../assets/copyCatLogo.png" alt="copy-cat-logo"></img>
                <div className="right white-acc">
                    <h1>Copy Cat</h1>
                    <h2>Borrowed Lines Media</h2>
                </div>
            </div>
            <div className="homeTabs white-acc">
                <Nav pills justified
                    id="homeTabs"
                    defaultActiveKey="about"
                >
                    <NavItem active>
                        <NavLink to="/" className="homeTab">
                            About Copy Cat
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/ming-pham-design" className="homeTab">
                            Minh Pham Design
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/raw-materials" className="homeTab">
                            Raw Materials
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <Routes>
                <Route path="/" element={<MainAreaACC />} />
                <Route
                    path="/ming-pham-design"
                    element={<MainArea />}
                />
                <Route
                    path="/raw-materials"
                    element={<MainAreaRM />} />
            </Routes>

            <div id="pagesArea" className="pagesArea">
                <Outlet />
            </div>
        </>
    )
}