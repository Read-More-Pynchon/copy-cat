import SectionRM from "../../components/SectionRM";



export default function Contact(){



    return(
        <SectionRM index={"06"} title={"Contact"}>
            <div className="rounded border border-1 border-black p-12">
                <p className="font-rm-noto text-9xl font-medium text-left">Let's</p>
                <hr className="border-black border-2 m-3"></hr>
                <p className="text-9xl font-rm-noto font-medium text-center">Talk</p>
                <hr className="border-black border-2 m-3"></hr>
                <p className="text-9xl font-rm-noto font-medium text-right">Creativity.</p>
                
            </div>
            <div>
            <div className="grid grid-cols-3">
                    <div className="relative col-auto m-3 p-3 rounded border-black text-black font-rm-noto text-3xl h-96">

                        <p className="top text-center">New Business</p>
                        <p className="bottom-0 rounded-full bg-rm-yellow  text-black text-center hover:bg-black  hover:text-rm-yellow">Talk with John</p>
                    </div>
                    <div className="col-auto m-3 p-3 rounded border-black text-black font-rm-noto text-3xl h-96">

                        <p className="top text-center">News & Press</p>
                        <p className="bottom-0 rounded-full bg-rm-yellow  text-black hover:text-rm-yellow  hover:bg-black ">Talk with Jenny</p>
                    </div>
                    <div className="col-auto m-3 p-3 rounded border-black text-black font-rm-noto text-3xl h-96">

                        <p className="top text-center">Chief Executive Officer</p>
                        <p className="bottom-0 rounded-full bg-rm-yellow  text-black hover:bg-black  hover:text-rm-yellow">Talk with Pablo</p>
                    </div>
                </div >
            </div>
             <div className="rounded border-0 bg-rm-yellow grid grid-cols-12 p-6">
                <div className="col-span-1">
                </div>
                <div className="col-span-10 font-rm-noto text-black text-center">
                    <p className="text-black text-3xl">ONE COMPANY, 100 STUDIOS</p>
                </div>
                <div className="col-span-1">
                </div>
            </div>
        </SectionRM>
    )
}