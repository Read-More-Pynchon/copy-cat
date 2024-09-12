import FooterRM from "./layout/FooterRM";
import MainAreaRM from "./layout/MainAreaRM/MainAreaRM";
import NavigationRM from "./layout/NavigationRM/NavigationRM";
import Approach from "./sections/Approach/Approach";
import Careers from "./sections/Careers/Careers";
import Contact from "./sections/Contact/Contact";
import Hello from "./sections/Hello/Hello";
import Talent from "./sections/Talent/Talent";
import UnusualIndex from "./sections/UnusualIndex/UnusualIndex";



export default function RawMaterials() {

    return (

        <div className="bg-white">
            <h1 className="text-3xl font-extrabold text-near-black-950 font-rm-noto">Raw Materials</h1>
            <hr />
            <div>
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <NavigationRM />
                    </div>
                    <div className="col-span-10">
                        <Hello />
                        <Approach />
                        <Talent />
                        <Careers />
                        <Contact />
                        <UnusualIndex />
                        <FooterRM />
                    </div>
                </div>


            </div>
            <hr />
            <p>Old</p>
            <MainAreaRM />
        </div>
    )
}
