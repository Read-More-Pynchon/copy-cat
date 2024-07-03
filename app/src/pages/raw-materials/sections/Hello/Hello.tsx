import SectionStarter from "../../components/SectionStarter/SectionStarter";
import { useRawMaterialsContext } from "../../contexts/RawMaterialsContext";

export default function Hello() {

    const section = useRawMaterialsContext().sections[1];

    const bullet = `${'\u2022'}`;
    const descriptor = `(${section.title}) section               .`;

    const counter2 = ` ${section.sectionIndex} / 02`;
    /*
     We Are
     Raw
     Materials
     We design and launch unusually creative digital products that change brands’ fortunes.
     (Hello)
     ● 01 / 02
     01Product design needs to be a creative endeavor.
     02Optimization and incremental thinking are leading to the death of innovation and a lack of originality.
     03When everything is the same, being different is the greatest opportunity.
     (Hello)
     ● 01 / 03
     Our Mission
     We are building Raw Materials to:
     01
     Challenge
     Help ambitious leaders escape the culture of conformity.
     02
     Goal
     Design a better way forward.
 */

    return (
        <>
            <SectionStarter section={section} />
            <div className="rounded whiteBackground">
                <h1 className="black noto-medium">We Are</h1>
                <h1 className="orange noto-medium">Raw</h1>
                <h1 className="orange noto-medium">Materials</h1>
                <p className="orange left noto-light">{`(${section.title})`}</p>
                <p className="black right noto-medium">{`${bullet} ${counter2}`}</p>
            </div>
        </>
    )


}