

import './NavigationRM.css';

import { useRawMaterialsContext } from '../../contexts/RawMaterialsContext';


export default function NavigationRM() {

    const sections = useRawMaterialsContext().sections;

    const pillClass = "navigationPill rounded white";

    const navigationItems = sections.map((item, index) => {
        if (index === 0) {
            return (
                <div key={`navItem-${index}`} id={`navItem-${index}`} className={`$navigationPill rounded ${item.mainColor} ${item.backgroundColor}`} >
                <h2 className={`noto-light navigationIndex `}>{item.sectionIndex}</h2>
                <h3 className={`noto-medium navigationTitle `}>{item.title}</h3>
            </div>
            );
        } else {
            return (
                <div key={`navItem-${index}`} id={`navItem-${index}`} className={`${pillClass} ${item.mainColor} ${item.backgroundColor}`} >
                    <h2 className={`noto-light navigationIndex `}>{item.sectionIndex}</h2>
                    <h3 className={`noto-medium navigationTitle `}>{item.title}</h3>
                </div>

            );
        }
    })

    return (
        <div className="navigationWrapper whiteBackground">
            {navigationItems}
        </div>

    )
}