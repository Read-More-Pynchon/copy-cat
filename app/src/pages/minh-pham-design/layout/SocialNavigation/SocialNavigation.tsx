/*
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
<!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
*/

import  instagram from '../../assets/instagram.png';
import basketball from '../../assets/basketball.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';

import './SocialNavigation.css';

export default function SocialNavigation() {

 /*


 */


    return (
        <div className="socialNavigation">
            <img src={basketball} alt="basketball" className="socialLogo"></img>
            <img src={instagram} alt="instagram" className="socialLogo"></img>
            <img src={linkedin} alt="youtube" className="socialLogo"></img>
            <img src={youtube} alt="linkedin" className="socialLogo"></img>
            
        </div>
    )
}