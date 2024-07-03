

import './Experience.css';

export default function Experience(){


    return(
        <div className="contentWrapper">
            <p className="jost-light left menu">EXPERIENCE</p>
            <br />
            <div id="shownExperience">
                <h1 className="jost-medium content left">
                    Over <span className="orange"> a decade</span> of experience 
                    in interactive design and working with some of
                    the most talented people in the business
                </h1>
            </div>
            <div id="hiddenExperience">
                <h1 className="jost-medium content left black">
                    Only seven years of actively creating cool shit. 
                    Other years were me emssaging around and
                    navigating through my career
                </h1>
            </div>
        </div>
    );
}