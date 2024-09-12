import SectionRM from "../../components/SectionRM";

export default function Careers() {



    return (
        <SectionRM index={"05"} title={"Careers"}>
            <div className="grid grid-cols-12">
                <div className="col-span-4 p-9 text-9xl text-center font-rm-noto p-3 rounded-full border border-1 border-black">
                    We
                </div>
                <div className="col-span-2 text-9xl rounded-full border border-1 border-black">

                </div>
                <div className="col-span-4 p-9 text-9xl  text-center font-rm-noto rounded-full border border-1 border-black">
                    Are
                </div>
                <div className="col-span-2 text-9xl rounded-full border border-1 border-black">

                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-8 p-9 text-9xl  text-center font-rm-noto rounded-full border border-1 border-black">
                    Looking
                </div>
                <div className="col-span-1 text-9xl rounded-full border border-1 border-black">

                </div>
                <div className="col-span-3 p-9 text-9xl  text-center font-rm-noto rounded-full border border-1 border-black">
                    For
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-4 p-9 text-9xl  text-center font-rm-noto rounded-full border border-1 border-black">
                    The
                </div>
                <div className="col-span-8 p-9 text-9xl  text-center font-rm-noto rounded-full border border-1 border-black bg-rm-red">
                    Unusually
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-8 p-9 text-9xl  text-center font-rm-noto rounded-full border border-1 border-black bg-black text-rm-red">
                    Talented
                </div>
                <div className="col-span-4 text-9xl rounded-full border border-1 border-black">

                </div>
            </div>
            <div>











            </div>
            <div className="rounded border-0 bg-rm-red grid grid-cols-12 p-6">
                <div className="col-span-1">
                    <p className="text-white">arrow</p>
                </div>
                <div className="col-span-10 font-rm-noto text-white text-center">
                    <p className="text-white text-3xl">OPEN POSITIONS</p>
                </div>
                <div className="col-span-1">
                    <p className="text-white">arrow</p>
                </div>
            </div>
            <div className="rounded-full border p-6 mt-6 mb-6 border-black text-center text-4xl hover:bg-rm-red">
                <p className="font-rm-noto">Creative, Product Design</p>
            </div>
            <div className="rounded-full p-6 mt-6 mb-6 border border-black text-center text-4xl hover:bg-rm-red">
                <p className="font-rm-noto">Creative, Motion Design</p>
            </div><div className="rounded-full p-6 mt-6 mb-6 border border-black text-center text-4xl  hover:bg-rm-red">
                <p className="font-rm-noto">For the Too Unusual</p>
            </div>
        </SectionRM >
    )
}