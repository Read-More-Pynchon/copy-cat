

import { Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkNav } from 'reactstrap'; // see below - the name space matches react-router
import { Outlet, Route, Routes, NavLink } from 'react-router-dom';
import MainArea from '../../pages/minh-pham-design/layout/MainAreaMPD/MainAreaMPD';

import copyCatLogo from '../../assets/copyCatLogo.png';
import './Home.css';
import MainAreaRM from '../../pages/raw-materials/layout/MainAreaRM/MainAreaRM';
import MainAreaACC from '../../pages/about-copy-cat/layout/MainAreaACC/MainAreaACC';

import WireFrame from '../../pages/about-copy-cat/wire-frame/WireFrame';

export default function Home() {



    return (
        <div className="home">
            <div className="copyCatHeader">
                <div className="copyCatLogo left">
                    <img className="copyCatLogo left" src={copyCatLogo} alt="copy-cat-logo" height="7em"></img>
                </div>
                <div className="copy-cat-title right white-acc">
                    <h1>Copy Cat</h1>
                    <h2>Borrowed Lines Media</h2>
                </div>
            </div>
            <div className="white-acc">
                <Nav
                    card
                    fill
                    justified
                    pills
                    id="homeTabs"
                    className='homeTabs'
                    defaultActiveKey="about"
                >
                    <NavLink to="/" >
                        <NavItem className="homeTab">
                            <NavLinkNav active>
                                <p>About</p>
                            </NavLinkNav>

                        </NavItem>
                    </NavLink>
                    <NavLink to="/wireframe">
                        <NavItem className="homeTab">
                            <NavLinkNav>
                                <p>WireFrame</p>
                            </NavLinkNav>
                        </NavItem>
                    </NavLink>
                    <NavLink to="/ming-pham-design">
                        <NavItem className="homeTab">
                            <NavLinkNav>
                                <p>Minh Pham Design</p>
                            </NavLinkNav>
                        </NavItem>
                    </NavLink>
                    <NavLink to="/raw-materials">
                        <NavItem className="homeTab">
                            <NavLinkNav>
                                <p className="plain"> Raw Materials</p>
                            </NavLinkNav>
                        </NavItem>
                    </NavLink>
                </Nav>
            </div >
            <Routes>
                <Route
                    path="/"
                    element={<MainAreaACC />} />
                <Route
                    path="/wireframe"
                    element={<WireFrame />} />
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
        </div >
    )
}