
export default function SectionTestV() {




    return (
        <div className="">
            <div className="grid grid-cols-12 bg-near-white-400 m-3 p-3">
                <div className="sm:col-span-1 md:col-span-3 lg:col-span-2 bg-near-white-300">

                </div>
                <div className="col-span-12 sm:col-spa-10 md:col-span-6 lg:col-span-8 grid grid-cols-2 relative">
                    <div id="section-main" className="col-span-2 lg:col-span-1 bg-dark-blue m-2 p-3 rounded-3xl">
                        <h1 className="font-blmSerif text-2xl font-semibold text-near-white">Section Main</h1>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        
                        <p>Content stuff</p>
                    </div>
                    <div id="section-side" className="col-span-2 lg:col-span-1 bg-purple m-2 p-3 rounded-3xl lg:sticky lg:top-0 h-fit">
                        <h1 className="font-blmSerif text-2xl font-semibold text-near-white">Section Side</h1>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                        <p>Content stuff</p>
                    </div>
                </div>
                <div className="sm:col-span-1 md:col-span-3 lg:col-span-2 bg-near-white-300">

                </div>
            </div>
        </div>
    )
}