import { COLORS, WHITE, BLACK } from '../../utils/staticData';

import { useWireFrameContext } from '../../contexts/WireFrameContext';
import { QuarterSquareWireFrameProps } from '../../types/WireFrameTypes';

import './QuarterSquareWireFrame.css';

export default function QuarterSquareWireFrame(props: QuarterSquareWireFrameProps) {

    const { darkMode } = useWireFrameContext();


    //label
    const label = props.label;
    //colors
    const color = props.color || COLORS[0]; //default is pink - Giovanne!!
    const white = WHITE;
    const black = BLACK;
    //shades
   let foregroundColor = white;
   let backgroundColor = black;
    if(darkMode){
        foregroundColor =  black;
        backgroundColor = white;
    };
  
    //alignment
    const squareAlign = props.align ? props.align : "left"; //default is square to the left
    const rectAlign = (props.align === "left") ? "right" : "left";
    //computed class Values - square and rectangle
    const squareClass = `quarter ${squareAlign}Quarter`;
    const rectangleClass = `threeQuarter ${rectAlign}Quarter`;

    return (
        <div>
            <div key={`${props.key}`} className="quarterSquare">
                <div className={`${foregroundColor.foreground} ${backgroundColor.background} ${rectangleClass}`}>
                    <h1 className="label">{`${label}`}</h1>
                </div>
                <div className={`${color.background} ${squareClass}`}>
                </div>
            </div>

        </div>
    )
}