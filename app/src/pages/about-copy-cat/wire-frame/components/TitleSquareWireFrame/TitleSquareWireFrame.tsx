

import './TitleSquareWireFrame.css';
import {WHITE, BLACK} from '../../utils/staticData';
import { TitleSquareWireFrameProps } from '../../types/WireFrameTypes';

export default function TitleSquareWireFrame(props: TitleSquareWireFrameProps) {

const title = props.title || "Letter";
const letter = title[0];
const color = props.color.background;
const titleBackground = WHITE.background;
const titleForeground = BLACK.foreground

    return (
        <>

            <div className={`letterBox ${color}`}>
                <h1 className="letter">{`${letter}`}</h1>
            </div>
            <div className={`titleBox ${titleBackground} ${titleForeground}`}>
                <p className="title">{`${title}`}</p>
            </div>
        </>
    )
}