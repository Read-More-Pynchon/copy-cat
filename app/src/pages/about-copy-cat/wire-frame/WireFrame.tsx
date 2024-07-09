

import { useWireFrameContext } from "./contexts/WireFrameContext";
import { Form, FormGroup, Label, Input } from 'reactstrap';

import './WireFrame.css';
import wireFrameLogo from './assets/blmlogo-transparent.png';
import { WHITE, BLACK } from "./utils/staticData";
import Navigation from "./sections/Navigation/NavigationWireFrame";
import SectionArea from "./sections/SectionArea/SectionArea";

export default function WireFrame() {

    const { darkMode, setDarkMode } = useWireFrameContext();
    let foregroundColor = (darkMode) ? WHITE : BLACK;
    let backgroundColor = (darkMode) ? BLACK : WHITE;
   
    //dark mode toggles
    const colorClass = `${foregroundColor.foreground} ${backgroundColor.background}`;
    const secondaryColorClass = `${foregroundColor.background} ${backgroundColor.foreground}`; // revvese the colors

    return (
        <>
            <div className="wire-frame-wrapper">
                <div className={`darkModeSwitch ${secondaryColorClass}`}>
                    <Form className="left">
                        <FormGroup switch>
                            <Input
                                type="switch"
                                role="switch"
                                onClick={() => setDarkMode(!darkMode)} />
                            <Label check>Toggle Dark Mode</Label>
                        </FormGroup>
                    </Form>
                </div>
                <div className={`wire-frame-main ${colorClass}`}>
                    <div className="wire-frame-header">
                        <div className="wire-frame-logo left">
                            <img className="wire-frame-logo left" src={wireFrameLogo} alt="wire-frame-logo" height="10em"></img>
                        </div>
                        <div className="wire-frame-title right white-acc">
                            <h1>Borrowed Lines Media</h1>
                            <h2>Wireframe</h2>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="wire-frame-body">
                        <Navigation />
                        <SectionArea />
                        

                    </div>


                </div>

            </div>
        </>

    );
}
