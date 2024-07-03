

import mpdLogo from '../../assets/logo.gif';

import './TopNavigation.css';

export default function TopNavigation() {


    return (

        <div id="topNavigation">
            <img id="topNavLogo" src={mpdLogo} alt="minh-pham-design-logo" height="50px" />
            <div id="topNavOptions">
                <p className="jost-light menu">ABOUT</p>
                <p className="jost-light menu">WORK</p>
                <p className="jost-light menu">CONTACT</p>
            </div>
        </div>
    );
}