



import NavigationRM from '../NavigationRM/NavigationRM';
import './MainAreaRM.css';
import { useRawMaterialsContext } from '../../contexts/RawMaterialsContext';
import SectionStarter from '../../components/SectionStarter/SectionStarter';
import Hero from '../../sections/Hero/Hero';
import Hello from '../../sections/Hello/Hello';
import Approach from '../../sections/Approach/Approach';
import UnusualIndex from '../../sections/UnusualIndex/UnusualIndex';
import FooterRM from '../FooterRM';
import Careers from '../../sections/Careers/Careers';
import Contact from '../../sections/Contact/Contact';
import Talent from '../../sections/Talent/Talent';

export default function MainAreaRM() {

    let sections = useRawMaterialsContext().sections.slice();
    let removeSection00 = sections.shift();
    let removeSection01 = sections.shift();
    //This will be removed
    const sectionHeaders = sections.map(item => {
        return (
            <SectionStarter section={item} key={`section-${item.sectionIndex}`} />
        )
    })

    return (
        <div className="white-background page">
           
            <div className="mainAreaRM white-background">
            <Hero />
            <Hello />
            <Approach />
            <Talent />
            <Careers />
            <Contact />
            <UnusualIndex />
            <FooterRM />
            </div>
            <NavigationRM />
            
        </div>
    )
}