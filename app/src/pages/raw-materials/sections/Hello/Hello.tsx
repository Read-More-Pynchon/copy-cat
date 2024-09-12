import SectionRM from "../../components/SectionRM";
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
            <SectionRM index={"01"} title={"Hello"}>
                <div className="rounded border-black">
                    We Are Raw Materials
                </div>
                <div className="rounded mt-2 p-3 bg-rm-orange font-rm-noto text-white text-3xl">
                    <span className="inline-flex m-24">
                        <p className="rounded-full w-fit h-fit m-6 pl-3 pr-3 border border-black text-center text-black font-rm-noto">
                            01
                        </p>
                        <p className="text-9xl">Product design needs to be a creative endeavor.</p>
                    </span>
                    <br />
                    <span className="inline-flex m-24">
                        <p className="rounded-full w-fit h-fit m-6 pl-3 pr-3 border border-black text-center text-black font-rm-noto">
                        02
                        </p>
                        <p className="text-9xl">Optimization and incremental thinking are leading to the death of innovation and a lack of originality.</p>
                    </span>
                    <br />
                    <span className="inline-flex m-24">
                        <p className="rounded-full w-fit h-fit m-6 pl-3 pr-3 border border-black text-center text-black font-rm-noto">
                        03 
                        </p>
                        <p className="text-9xl">When everything is the same, being different is the greatest opportunity.</p>
                    </span>
                    
                </div>
                <div className="text-black text-2xl font-rm-noto rounded border-black">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 m-1 p-3">
                            <p className="rounded-full w-fit pl-3 pr-3 border border-black text-center font-rm-noto">
                                0X
                            </p>
                            <p className="text-md">Topic</p>
                        </div>
                        <div className="col-span-9 m-1 p-3">
                            <h1 className="text-7xl">Description</h1>
                            <hr className="border-2 border-black" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 m-1 p-3">
                            <p className="text-md">Our Mission</p>
                        </div>
                        <div className="col-span-9 m-1 p-3">
                            <h1 className="text-7xl"> We are building Raw Materials to:</h1>
                            <br />
                            <hr className="border-2 border-black" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 m-1 p-3">
                            <p className="rounded-full w-fit pl-3 pr-3 border border-black text-center font-rm-noto">
                                01
                            </p>
                            <p className="text-md">Challenge</p>
                        </div>
                        <div className="col-span-9 m-1 p-3">
                            <h1 className="text-7xl"> Help ambitious leaders escape the culture of conformity.</h1>
                            <br />
                            <hr className="border-2 border-black" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 m-1 p-3">
                            <p className="rounded-full w-fit pl-3 pr-3 border border-black text-center font-rm-noto">
                                02
                            </p>
                            <p className="text-md">Goal</p>
                        </div>
                        <div className="col-span-9 m-1 p-3">
                            <h1 className="text-7xl"> Design a better way forward.</h1>
                            <br />
                            <hr className="border-2 border-black" />
                        </div>
                    </div>
                    <br />
                    <hr />
                </div>
                <div className="min-h-48 w-full rounded bg-rm-orange text-white text-6xl lg:text-9xl mt-1 p-6 font-rm-noto">
                    Unusual Wins
                </div>
                <div className="rounded bg-rm-orange grid grid-cols-12">
                    <div className="col-span-1">
                        <p>arrow</p>
                    </div>
                    <div className="col-span-10 font-rm-noto text-white text-center">
                        <p>WE'VE SPENT DECADES HELPING TO MAKE THE RULES, NOW WE'RE BREAKING THEM.</p>
                    </div>
                    <div className="col-span-1">
                        <p>arrow</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="relative col-auto m-3 p-3 rounded border-black text-black font-rm-noto text-3xl h-96">

                        <p className="top text-center">Chief Operating Officer</p>
                        <p className="bottom-0 text-rm-orange">Jennifer Allen</p>
                    </div>
                    <div className="col-auto m-3 p-3 rounded border-black text-black font-rm-noto text-3xl h-96">

                        <p className="top text-center">Chief Creative Officer</p>
                        <p className="bottom-0 text-rm-orange">Pablo Marques</p>
                    </div>
                    <div className="col-auto m-3 p-3 rounded border-black text-black font-rm-noto text-3xl h-96">

                        <p className="top text-center">Chief Executive Officer</p>
                        <p className="bottom-0 text-rm-orange">John Roescher</p>
                    </div>
                </div >
                <div className="grid grid-cols-12">
                    <div className="col-span-2 rounded-full border border-black text-black font-rm-noto p-3 text-center">
                        (Raw)
                    </div>
                    <div className="col-span-8 rounded-full border border-black text-white text-2xl bg-black font-rm-noto overflow-x-scroll text-nowrap p-3 h-fit">
                        We’re united by a singular vision to create an unusual kind of creative company... We’re united by a singular vision to create an unusual kind of creative company... We’re united by a singular vision to create an unusual kind of creative company...
                    </div>

                    <div className="col-span-2 rounded-full border border-black text-black font-rm-noto p-3 text-center">
                        (Materials)
                    </div>
                </div>
                <div className="font-rm-noto">

                    <div className="rounded border border-black p-6 m-1">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">Logo</div>
                            <div className="col-span-2">Brand</div>
                            <div className="col-span-2">Work</div>
                            <div className="col-span-4">Testimonial</div>
                        </div>
                        <hr className="border border-black ps-6 pe-6" />
                        <div className="grid grid-cols-3">
                            <div className="col-span-1">Tags</div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1">Person</div>
                        </div>
                    </div>

                    <div className="rounded border border-black p-6 m-1">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">Logo</div>
                            <div className="col-span-2">Peacock TV</div>
                            <div className="col-span-2">Design Partnership</div>
                            <div className="col-span-4"> “Peacock has an incredible design team. Our partnership brings the best out of one other, and this relationship has shaped much about how RM thinks.”</div>
                        </div>
                        <hr className="border border-black ps-6 pe-6" />
                        <div className="grid grid-cols-3">
                            <div className="col-span-1">
                                <p>
                                    <span className="rounded-full border border-black text-xs p-1 m-2">PRODUCT & UX</span>
                                    <span className="rounded-full border border-black text-xs p-1 m-2">ENTERTAINMENT</span>
                                </p>
                            </div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"> from
                                Pablo Marques
                                Chief Creative Officer,Raw Materials
                            </div>
                        </div>
                    </div>

                    <div className="rounded border border-black p-6 m-1">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">Logo</div>
                            <div className="col-span-2"> Meta</div>
                            <div className="col-span-2"> Meta AI Rebrand</div>
                            <div className="col-span-4">  “A pleasure to work with, the META team are the kind of partners who bring us the challenges we long for; complex, interesting problems at the very edge of technology.”
                            </div>
                        </div>
                        <hr className="border border-black ps-6 pe-6" />
                        <div className="grid grid-cols-3">
                            <div className="col-span-1">
                                <span className="rounded-full border border-black text-xs p-1 m-2"> BRAND DESIGN</span>
                                <br />
                                <span className="rounded-full border border-black text-xs p-1 m-2"> ARTIFICIAL INTELLIGENCE</span>
                            </div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1">from
                                Jennifer Allen
                                Chief Operating Officer, Raw Materials</div>
                        </div>
                    </div>


                </div>
            </SectionRM >
        </>
    )


}