



import BaseContainerWireFrame from '../BaseContainerWireFrame/BaseContainerWireFrame';
import { SectionWireFrameType } from '../../types/WireFrameTypes';
import './SectionWireFrame.css';
import { WHITE } from '../../utils/staticData';
import TitleSquareWireFrame from '../TitleSquareWireFrame/TitleSquareWireFrame';


export default function SectionWireFrame(props: SectionWireFrameType) {

    const color = props.color;
    const title = props.title
    const backgroundColor = WHITE.background;

    let subsections;
    if(props.subsections) {
        subsections = props.subsections.map((subsection, index) => {
            return (
                <BaseContainerWireFrame 
                key={`${title}-subsection-${index}`}
                strip="strip"
                title={subsection.title}
                />
    
            )
        })

    } else {
        subsections = 
        <>
         <BaseContainerWireFrame strip="strip" title="Title" />
         <BaseContainerWireFrame />
        </>;
    }

    return (
        <div className={`wire-frame-section-area ${color} ${backgroundColor}`}>
            <TitleSquareWireFrame
                title={title}
                color={color}
            />
           {subsections}
        </div>
    )

}