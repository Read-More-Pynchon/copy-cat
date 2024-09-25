


import metaglasses from '../assets/most-popular/metaGlasses.png';

export default function FrontPage() {

    return (
        <div className="p-6 bg-verge-black">
            <div className="grid grid-cols-12 p-3 bg-verge-black">
                <div className="sm:col-span-1 md:col-span-3 lg:col-span-2">

                </div>
                <div className="col-span-12 sm:col-spa-10 md:col-span-6 lg:col-span-8 grid grid-cols-12 relative">
                    <div className="hero col-span-12 lg:col-span-7 bg-verge-black m-2 p-3 rounded-3xl">
                        <div>
                            <div className="relative z-50">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309 70" role="img" className="relative mx-auto w-[calc(100vw-40px)] -rotate-90 -translate-x-56 translate-y-48 fill-white md:static md:w-[204px] lg:ml-0 lg:w-[398px]" width="100%" height="100%" fill="none">
                                    <title>The Verge</title>
                                    <desc>The Verge logo.</desc>
                                    <path d="m231.196 17.897-.302 9.071c-10.592-.726-13.618 1.996-13.618 10.885V39h-9.078V18.441h9.078v5.866c2.724-4.777 6.416-6.954 13.92-6.41ZM15.131 54.786h9.078V19.71h-9.078v35.075Zm44.968-36.828c-6.355 0-10.228 2.842-12.286 5.986V4.593H0v8.466h39.34V39h8.654c0-7.438 4.298-12.697 9.563-12.697 4.54 0 6.597 2.237 6.597 10.28v18.203h9.078V33.318c0-10.28-5.265-15.36-13.133-15.36ZM95.807 47.83c-5.507 0-9.078-3.326-9.683-8.829H77.59c.847 9.676 7.202 16.51 18.157 16.51 8.473 0 13.254-3.81 15.736-9.555l-7.687-3.387c-1.15 3.447-3.268 5.261-7.989 5.261Zm-.363-29.692a19.226 19.226 0 0 0-9.32 2.177l4.357 6.168c1.634-.846 3.39-1.27 5.266-1.21 5.084 0 7.686 3.327 8.049 7.68H95.02v6.048h17.31c.121-.907.182-1.754.182-2.66.06-13.184-8.655-18.203-17.068-18.203ZM185.32 47.83c-5.507 0-9.078-3.326-9.683-8.829h-8.534c.847 9.676 7.202 16.51 18.157 16.51 8.473 0 13.254-3.81 15.736-9.555l-7.687-3.387c-1.21 3.447-3.328 5.261-7.989 5.261Zm-.302-29.692a19.226 19.226 0 0 0-9.321 2.177l4.358 6.168c1.634-.846 3.389-1.27 5.265-1.21 5.084 0 7.687 3.327 8.05 7.68h-8.776v6.048h17.31c.121-.907.181-1.754.181-2.66.061-13.184-8.655-18.203-17.067-18.203ZM291.416 47.83c-5.507 0-9.078-3.326-9.683-8.829h-8.534c.847 9.676 7.202 16.51 18.157 16.51 8.473 0 13.254-3.81 15.736-9.555l-7.687-3.387c-1.21 3.447-3.328 5.261-7.989 5.261Zm-.484-29.692a19.225 19.225 0 0 0-9.32 2.177l4.357 6.168c1.635-.846 3.39-1.27 5.266-1.21 5.084 0 7.686 3.327 8.049 7.68h-8.775v6.048h17.309c.121-.907.182-1.754.182-2.66.06-13.184-8.655-18.203-17.068-18.203ZM117.172.299 133.5 39h9.926L130.971 8.221h16.099V.36L117.172.3Zm48.418.06L146.888 47.71l-2.784 7.076h9.502L176.06.36h-10.47Zm83.461 53.58c3.873 0 7.081-1.089 9.32-2.963l-3.631-5.745c-1.15.484-2.421.665-3.692.665-4.963 0-7.808-2.963-8.776-6.894h-8.897c1.211 8.406 7.263 14.937 15.676 14.937Zm11.196-30.418c-2.057-3.265-6.234-5.624-12.044-5.624-5.689-.06-10.954 3.024-13.738 8.043l7.565 4.838c1.392-2.903 4.116-4.838 8.292-4.838 5.931 0 9.925 4.596 9.925 10.038 0 1.029-.121 2.057-.423 3.024h9.502v-20.5h-9.079v5.019Zm-8.775 38.642c-5.871 0-8.05-2.842-8.474-6.168h-8.654c.181 6.35 4.418 13.304 17.309 13.304 8.715 0 14.404-4.354 16.765-10.885l-8.171-2.842c-1.15 4.233-4.297 6.591-8.775 6.591Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <img src={metaglasses} alt="Meta Glasses" className="w-90 h-auto -translate-y-24" />
                            </div>

                        </div>
                    </div>
                    <div className="section-side col-span-12 lg:col-span-5 bg-verge-black m-6 p-3 lg:sticky lg:top-0 h-fit">
                        <div className="grid grid-cols-12 pb-3 border-b-2 border-b-verge-aqua m-3 ">
                            <div className="col-span-1">

                            </div>
                            <div className="col-span-11">
                                <p className="text-verge-aqua font-mpd-jost">Top Stories</p>
                            </div>

                            <div className="col-span-1">
                                <p className="rounded-full bg-verge-black-600 text-verge-aqua font-mpd-jost  w-fit h-fit p-2">1</p>
                            </div>
                            <div className="col-span-8 p-2">
                                <p className="text-white font-verge-oswald text-lg md-text-2xl">An official OpenAI X account was taken over to peddle a crypto scam</p>

                                <span>
                                    <p className="text-xs text-verge-aqua uppercase font-mpd-jost">Jay Peters</p>
                                    <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">Sep 24, 2024, 9:25 AM GMT+10</p>
                                </span>
                            </div>
                            <div className="col-span-3">
                                <img src={metaglasses} alt="OpenAI Logo Green" className="w-full" />
                            </div>

                            <hr className="border-b-2 border-b-verge-black-600 w-full mt-3 col-span-12" />

                            <div className="col-span-1">
                                <p className="rounded-full bg-verge-black-600 text-verge-aqua font-mpd-jost  w-fit h-fit p-2">2</p>
                            </div>
                            <div className="col-span-8 p-2">
                                <p className="text-white font-verge-oswald text-lg md-text-2xl">An official OpenAI X account was taken over to peddle a crypto scam</p>

                                <span>
                                    <p className="text-xs text-verge-aqua uppercase font-mpd-jost">Jay Peters</p>
                                    <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">Sep 24, 2024, 9:25 AM GMT+10</p>
                                </span>
                            </div>
                            <div className="col-span-3">
                                <img src={metaglasses} alt="OpenAI Logo Green" className="w-full" />
                            </div>

                            <hr className="border-b-2 border-b-verge-black-600 w-full mt-3 col-span-12" />

                            <div className="col-span-1">
                                <p className="rounded-full bg-verge-black-600 text-verge-aqua font-mpd-jost  w-fit h-fit p-2">3</p>
                            </div>
                            <div className="col-span-8 p-2">
                                <p className="text-white font-verge-oswald text-lg md-text-2xl">An official OpenAI X account was taken over to peddle a crypto scam</p>

                                <span>
                                    <p className="text-xs text-verge-aqua uppercase font-mpd-jost">Jay Peters</p>
                                    <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">Sep 24, 2024, 9:25 AM GMT+10</p>
                                </span>
                            </div>
                            <div className="col-span-3">
                                <img src={metaglasses} alt="OpenAI Logo Green" className="w-full" />
                            </div>

                            <hr className="border-b-2 border-b-verge-black-600 w-full mt-3 col-span-12" />

                            <div className="col-span-1">
                                <p className="rounded-full bg-verge-black-600 text-verge-aqua font-mpd-jost  w-fit h-fit p-2">4</p>
                            </div>
                            <div className="col-span-8 p-2">
                                <p className="text-white font-verge-oswald text-lg md-text-2xl">An official OpenAI X account was taken over to peddle a crypto scam</p>

                                <span>
                                    <p className="text-xs text-verge-aqua uppercase font-mpd-jost">Jay Peters</p>
                                    <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">Sep 24, 2024, 9:25 AM GMT+10</p>
                                </span>
                            </div>
                            <div className="col-span-3">
                                <img src={metaglasses} alt="OpenAI Logo Green" className="w-full" />
                            </div>

                            <hr className="border-b-2 border-b-verge-black-600 w-full mt-3 col-span-12" />

                            <div className="col-span-1">
                                <p className="rounded-full bg-verge-black-600 text-verge-aqua font-mpd-jost  w-fit h-fit p-2">5</p>
                            </div>
                            <div className="col-span-8 p-2">
                                <p className="text-white font-verge-oswald text-lg md-text-2xl">An official OpenAI X account was taken over to peddle a crypto scam</p>

                                <span>
                                    <p className="text-xs text-verge-aqua uppercase font-mpd-jost">Jay Peters</p>
                                    <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">Sep 24, 2024, 9:25 AM GMT+10</p>
                                </span>
                            </div>
                            <div className="col-span-3">
                                <img src={metaglasses} alt="OpenAI Logo Green" className="w-full" />
                            </div>
                            <hr className="border-b-2 border-b-verge-black-600 w-full mt-3 col-span-12" />


                        </div>


                    </div>
                </div>
                <div className="sm:col-span-1 md:col-span-3 lg:col-span-2">

                </div>
            </div>
        </div >
    )
}