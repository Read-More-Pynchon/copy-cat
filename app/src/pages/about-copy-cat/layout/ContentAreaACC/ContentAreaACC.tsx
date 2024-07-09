

import BaseContainer from '../../sections/ComponentIdeas/Containers/BaseContainer/BaseContainer';
import QuarterSquare from '../../sections/ComponentIdeas/Containers/QuarterSquare/QuarterSquare';
import TitleSquare from '../../sections/ComponentIdeas/Tokens/TitleSquare/TitleSquare';
import CheckerBoard from '../../sections/WallpaperIdeas/CheckerBoard/CheckerBoard';
import StaggeredSquare from '../../sections/WallpaperIdeas/StaggeredSquare/StaggeredSquare';
import '../MainAreaACC/MainAreaACC.css';

export default function ContentAreaACC() {



    return (
        <div className="content-area-acc white-background-acc black left">
            <h1>About Copy Cat</h1>
            <p>This is a playground to explore and exhibit my skills in front end web development, consisting of </p>
            <ul className="pink">
                <li className="black">Producing accurate as possible copies of websites that I have seens and liked (tabs to the right)</li>
                <li className="purple">Showcasing (below) some of the techniques applied (content below)</li>
                <li className="blue">Applying them to my own website as part of the design process</li>
            </ul>
            <p>All of this at present is work in progress but it will show something i guess</p>
            <br />
            <p>Each website was <strong className="light-blue-acc">completed by</strong><strong className="pink-acc"> visual reference only</strong> - I looked and copied based on what I saw</p>
            <p>Included with each page is the published website for comparison</p>
            <br />
            <hr />
            <div id="hero-ideas" className="blue-acc white-background-acc section-wrapper-acc">
                <h1>Hero Ideas</h1>
            </div>
            <div id="typography-ideas" className="black-background-acc white-acc section-wrapper-acc">
                <h1>Typography Ideas</h1>
            </div>
            <div id="component-ideas" className="blue-background-acc white-acc section-wrapper-acc">
                <h1>Component Ideas</h1>
                <h2>Containers</h2>
                <h4 className="purple-acc">Base Container</h4>
                <BaseContainer color="pink" darkMode="dark"/>
                <br />
                <BaseContainer strip="strip" title="Container with Title Strip - darkMode" color="light-blue" darkMode="dark"/>
                <br />
                <BaseContainer strip="strip" title=" 2nd Container with Title Strip - lightMode" color="light-blue" darkMode="light"/>
                <br />

                <QuarterSquare />
                <h2>Tokens</h2>
                <h4 className="purple-acc">Title Square</h4>
                <TitleSquare />
            </div>
            <div id="navigation-ideas" className="purple-background-acc white-acc section-wrapper-acc">
                <h1>Navigation Ideas</h1>
            </div>
            <div id="wallpaper-ideas" className="light-blue-background-acc black-acc section-wrapper-acc">
                <h1>Wallpaper Ideas</h1>
                <CheckerBoard key="checkerboard-01" />
                <br/>
                <StaggeredSquare />

            </div>

            <div id="animation-ideas" className="pink-background-acc black-acc section-wrapper-acc">
                <h1>Animation Ideas</h1>
            </div>

        </div>
    )
}