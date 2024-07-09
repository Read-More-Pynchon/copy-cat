

import QuarterSquare from '../../components/QuarterSquareWireFrame/QuarterSquareWireFrame';

import './NavigationWireFrame.css';
import { SECTIONS } from '../../utils/staticData';

export default function Navigation() {



    let sections = Object.values(SECTIONS);
    
   let result =  sections.map(section => {

    return (

        <QuarterSquare
            color={section.color}
            align={"left"}
            key={`${section.title}-navigation`}
            label={`${section.title}`} 
            />
    )}
);

    /*
     const toggleNav = () => {

    }
            <Button
                color="primary"
                onClick={function noRefCheck() { }}
            >
                Open
            </Button>
            <Offcanvas className="offNav" toggle={function noRefCheck() { }}>
                <OffcanvasHeader toggle={function noRefCheck() { }}>
                    Offcanvas
                </OffcanvasHeader>
                <OffcanvasBody>
                    <strong>
                        This is the Offcanvas body.
                    </strong>
                     </OffcanvasBody>
            </Offcanvas>
    */

    return (

        <div className="wire-frame-navigation">
            {result}
        </div>

    );
}