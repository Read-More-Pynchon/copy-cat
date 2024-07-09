
import SectionWireFrame from '../../components/SectionWireFrame/SectionWireFrame';
import './SectionArea.css';

import { SECTIONS } from '../../utils/staticData';

export default function SectionArea() {


    const sections = SECTIONS.map((section, index) => {
        return (
            <SectionWireFrame
                key={`section-${index}`}
                label={section.label}
                title={section.title}
                color={section.color}
                subsections={section.subsections}

            />

        )

    })

    return (
        <div className="wire-framesection-area">
            <p>Section Area</p>
            {sections}
        </div>

    )
}