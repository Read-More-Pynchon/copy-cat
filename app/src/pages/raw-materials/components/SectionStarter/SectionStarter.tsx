
import { Section } from "../../contexts/RawMaterialsContext"

import './SectionStarter.css';

export default function SectionStarter(props: any) {
    const bullet = `${'\u2022'}`;
    const descriptor = `You are now entering (${props.section.title}) section               .`;
    const counter = ` ${props.section.sectionIndex} / 01`;

    const mainColor = `${props.section.mainColor}`;
    const backgroundColor = `${props.section.backgroundColor}`;
    const title = `${props.section.title}`;
    const sectionIndex = `${props.section.sectionIndex}`;
    const sectionKey = `${props.section.title.toLowerCase()}-01`;

    const bulletClass = (backgroundColor === `black`) ? `noto-medium bullet ${mainColor}` : "noto-medium bullet black";
    const counterClass = (backgroundColor === `black`) ? `noto-medium counter ${mainColor}` : "noto-medium counter black";

    return (

        
        <div key={sectionKey}>
            <div className={`circularEnds ${mainColor} ${backgroundColor}`}>
                <p className="noto-medium descriptor">{descriptor}</p>
                <p className={bulletClass}>{bullet}
                    <span className={counterClass}>{counter}
                    </span>
                </p>
            </div>

            <div className={`rounded ${mainColor} ${backgroundColor}`}>
                <h1 className="noto-medium sectionIndex">{sectionIndex}</h1>
                <h1 className="noto-medium sectionTitle">{title}</h1>
            </div>
        </div>
    )
}