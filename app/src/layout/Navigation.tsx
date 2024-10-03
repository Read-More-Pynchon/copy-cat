import { Link } from "react-router-dom"


export default function Navigation(){


    return(
        
        <div id="homeTabs" className="w-full justify-items-center mt-5 pt-12 bg-near-black inline-flex">
            <nav>
                <Link to={"/"} className="sm:m-1 md:m-2 lg:m-4 xl:m-5 sm:text-sm md:text-lg lg:text-2xl text-near-white p-1 rounded bg-dark-blue">About</Link>
                <Link to={"/the-verge"} className="sm:m-1 md:m-2 lg:m-4 xl:m-5 sm:text-sm md:text-lg lg:text-2xl text-near-white p-1 rounded bg-brown">The Verge</Link>
                <Link to={"/ming-pham-design"} className="sm:m-1 md:m-2 lg:m-4 xl:m-5 sm:text-sm md:text-lg lg:text-2xl text-near-white p-1 rounded bg-purple border-none">Minh Pham Design</Link>
                <Link to={"/raw-materials"} className="sm:m-1 md:m-2 lg:m-4 xl:m-5 sm:text-sm md:text-lg lg:text-2xl text-near-white p-1 rounded bg-rouge">Raw Materials</Link>
               
            </nav>
        </div>
        

    )
}

/*
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

            */