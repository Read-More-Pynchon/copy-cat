import FooterRM from "./layout/FooterRM";
import NavigationRM from "./layout/NavigationRM/NavigationRM";
import Approach from "./sections/Approach/Approach";
import Careers from "./sections/Careers/Careers";
import Contact from "./sections/Contact/Contact";
import Hello from "./sections/Hello/Hello";
import Hero from "./sections/Hero/Hero";
import Talent from "./sections/Talent/Talent";
import UnusualIndex from "./sections/UnusualIndex/UnusualIndex";



export default function RawMaterials() {

    return (

        <div className="bg-rm-linen">
            <div className="bg-verge-pink rounded-3xl m-3 p-3">



                <h1 className="text-3xl font-extrabold text-near-black-950 font-rm-noto">Raw Materials</h1>
                <p className="pb-6">Please find the link to the actual site below:</p>
                <a href="https://www.therawmaterials.com/" className="underline underline-offset-8 decoration-rm-orange font-rm-noto text-purple" target="_blank" rel="noreferrer">Raw Materials Site</a>
                <br />
                <hr className="border-4 border-rm-purple mt-3 mb-3" />
                <p>Please note: this is in progress - obviously I can't recreate the whole site... but lets get it closer to the truth. Love ya.</p>

            </div>
            <hr />
            <div className="bg-black">
                <p className="text-white text-xs font-rm-noto text-center">Content below</p>
            </div>
            <hr />
            <div>
                <div className="grid grid-cols-12">
                    <div className="col-span-2 reltaive">
                        <NavigationRM />
                    </div>
                    <div className="col-span-10">
                        <Hero />
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
        </div>
    )
}
