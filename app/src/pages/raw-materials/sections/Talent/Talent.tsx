import SectionRM from "../../components/SectionRM";

export default function Tanet() {



    return (
        <>
            <SectionRM index={"04"} title={"Talent"}>



                <div className="rounded mt-2 p-3 bg-rm-blue font-rm-noto text-white text-3xl">
                    <span className="inline-flex m-24">
                        <p className="rounded-full w-fit h-fit m-6 pl-3 pr-3 border border-black text-center text-black font-rm-noto">
                            01
                        </p>
                        <p className="text-9xl">Product design needs to be a creative endeavor.</p>
                    </span>
                    <br />
                </div>
                <div className="text-3xl font-rm-noto">
                    <p className="text-blue">Second Tabs</p>
                    <br />
                    ( Everywhere Company )
                    01
                    ( The Academy )
                    02
                    ( The Creative Community )
                    03
                    <div className="tab-head grid grid-cols-4">

                        <div className="rounded-ss-lg rounded-se-lg border-2 border-b-0 border-black  p-2 hover:bg-rm-blue">
                            <div className="grid grid-cols-2">
                                <p>( Everywhere Company )</p>

                                <p className="rounded-full w-fit h-fit pl-3 pr-3 border border-black text-center font-rm-noto justify-self-end">
                                    01
                                </p>
                            </div>
                        </div>
                        <div className="rounded-ss-lg rounded-se-lg border-2 border-b-0 border-black  p-2 hover:bg-rm-blue">
                            <div className="grid grid-cols-2">
                                <p>( The Academy )</p>

                                <p className="rounded-full w-fit h-fit pl-3 pr-3 border border-black text-center font-rm-noto justify-self-end">
                                    02
                                </p>
                            </div>
                        </div>
                        <div className="rounded-ss-lg rounded-se-lg border-2 border-b-0 border-black  p-2 hover:bg-rm-blue">
                            <div className="grid grid-cols-2">
                                <p>( The Creative Community )</p>

                                <p className="rounded-full w-fit h-fit pl-3 pr-3 border border-black text-center font-rm-noto justify-self-end">
                                    03
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="tab-body min-h-24 p-12">
                        <p className="text-6xl lg:text-9xl font-weight-500 font-rm-noto text-black">
                            Our clients become part of <span className="text-rm-purple">our team</span>, and our team a part of their company.
                        </p>

                    </div>
                </div>
            </SectionRM>

        </>
    )
}