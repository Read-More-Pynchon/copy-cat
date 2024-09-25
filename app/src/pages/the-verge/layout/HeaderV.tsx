

import { ReactEventHandler, ReactNode, useState, useEffect } from 'react';
import logo from '../assets/vergeLogo.svg'



type NavigationItem = {
    title: string,
    subtitles?: string[]
}


export default function HeaderV() {

    const toggleSubMenu = (e: React.MouseEvent) => {
        e.preventDefault();

        const menuItemId = e.currentTarget.id;
        const subMenuId = `${menuItemId}-submenu`;
        const subMenu = document.getElementById(subMenuId);

        const subMenuClassList = subMenu?.classList;
        subMenuClassList?.contains('hidden') ? subMenu?.classList.remove('hidden') : subMenu?.classList.add('hidden');

    }

    const navigationText: NavigationItem[] = [
        {
            title: "Tech",
            subtitles: ["All Tech", "Amazon", "Apple", "Facebook", "Google", "Microsoft", "Samsung", "Business", "Creators", "Mobile", "Policy", "Security",]
        },
        {
            title: "Reviews",
            subtitles: ["All Reviews", "Buying Guides", "Deals", "Gift Guide", "Laptops", "Phones", "Headphones", "Tablets", "Smart Home", "Smartwatches", "Speakers", "Drones"]
        },
        {
            title: "Science",
            subtitles: ["All Science", "Space", "Energy", "Environment", "Health", "COVID-19"]
        },
        {
            title: "Entertainment",
            subtitles: ["All Entertainment", "Games", "TV Shows", "Movies",]
        },
        {
            title: "AI"
        },
        {
            title: "Cars",
            subtitles: ["All Cars", "Electric Cars", "Autonomous Cars", "Ride-Sharing", "Scooters", "Other Transportation"]
        },
        {
            title: "Features"
        },
        {
            title: "Videos",
            subtitles: ["All Videos", "YouTube", "TikTok", "Instagram"]
        },
        {
            title: "Podcasts",
            subtitles: ["All Podcasts", "Decoder", "The Vergecast"]
        },
        {
            title: "Newsletter",
            subtitles: ["All Newsletters", "Command Line", "Installer", "Notepad", "Verge Deals"]
        },
        {
            title: "Store"
        }
    ];

    const navigationItems = navigationText.map((item, index) => {
        let subtitleItems;
        if (item.subtitles) {

            subtitleItems = item.subtitles.map((subtitle, index) => {
                return <h2 className="m-3  hover:text-verge-aqua-700">{subtitle}</h2>
            });
        }

        return (
            <>
                <button id={item.title.toLowerCase()} onClick={toggleSubMenu} className="col-span-10 grid grid-cols-5 hover:opacity-60" >
                    <div className="col-span-4 m-1 p-3">
                        <h1 className="font-mpd-jost text-4xl text-white text-left">
                            {item.title}
                        </h1>
                    </div>
                    <div className="col-span-1 m-1 p-3">
                        <h1 className="font-mpd-jost text-3xl text-verge-aqua">
                            {subtitleItems ? '+' : ''}
                        </h1>
                    </div>
                </button>
                <hr className="col-span-10 border border-black w-full" />
                <div className="col-span-2"></div>
                <div id={`${item.title.toLowerCase()}-submenu`} className="hidden col-span-12 pl-3 text-verge-aqua uppercase text-xl font-mpd-jost">
                    {subtitleItems}
                </div>
            </>
        )
    });

    const [navIsShown, setNavIsShown] = useState(false);

    useEffect(() => {
        if (navIsShown) {
            document.body.classList.add('overflow-hidden', 'opacity-80');
        } else {
            document.body.classList.remove('overflow-hidden', 'opacity-80');
        }

        return () => {
            document.body.classList.remove('overflow-hidden', 'opacity-80');
        };
    }, [navIsShown]);


    const toggleNavigation = (e: React.MouseEvent) => {
        e.preventDefault();
        setNavIsShown(prevState => !prevState);
    };

    const navigation = () => {
        if (navIsShown) {
            return (

                <div className="bg-verge-nav-purple w-1/4 min-w-80 h-full p-2 fixed right-0 top-0 z-50 overflow-y-scroll ">
                    <div className="grid grid-cols-12">
                        <input className="col-span-8 bg-near-black bg-opacity-50 font-mpd-jost pl-3 pr-3 pt-1 pb-1 text-2xl text-white" placeholder="SEARCH.."></input>
                        <button className="col-span-2 bg-near-black bg-opacity-50 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-verge-aqua w-6 h-6 align-middle object-center">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </button>
                        <div className="col-span-2">
                            <button onClick={toggleNavigation} className="text-3xl uppercase font-mpd-jost font-bold text-center text-verge-aqua p-3">
                                <h1>X</h1>
                            </button>
                        </div>

                        {navigationItems}

                    </div>
                    <div className="text-verge-aqua font-mpd-jost">
                        <p className="text-sm mt-3">ACCOUNT</p>
                        <span>
                            <a href="/" className="text-lg underline">
                                Log In
                            </a>
                            &nbsp;
                            /
                            &nbsp;
                            <a href="/" className="text-lg underline">
                                Sign Up
                            </a>
                        </span>
                        <br />
                        <br />
                        <p className="text-sm m-2">FOLLOW US</p>
                        <div className="grid grid-cols-5">
                            <div className="col-span-1" id="fb">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="fill-verge-aqua text-center p3 w-5 h-5">
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </div>
                            <div className="col-span-1" id="threads">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-verge-aqua text-center p3 w-5 h-5">
                                    <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
                                </svg>
                            </div>
                            <div className="col-span-1" id="insta">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-verge-aqua text-center p3 w-5 h-5">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </div>
                            <div className="col-span-1" id="youtube">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-verge-aqua text-center p3 w-5 h-auto">
                                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                </svg>
                            </div>

                            <div className="col-span-1" id="rss">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-verge-aqua text-center p3 w-5 h-5">
                                    <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }

    const displayNavigation = navigation();

    return (
        <>
            <div className='w-full h-fit p-6 pb-1 m-6 bg-verge-black text-right'>
                <div className="hidden md:block">
                    <span className="text-right">
                        <h1 className="font-mpd-jost text-xl text-white text-right border-b-2 border-white">
                            <a href="/" className="mx-auto mb-12 inline-flex w-36 translate-y-3 lg:mx-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309 70" role="img" className="relative mx-auto w-36 fill-white" width="100%" height="100%" fill="none">
                                    <title>The Verge</title>
                                    <desc>The Verge logo.</desc>
                                    <path d="m231.196 17.897-.302 9.071c-10.592-.726-13.618 1.996-13.618 10.885V39h-9.078V18.441h9.078v5.866c2.724-4.777 6.416-6.954 13.92-6.41ZM15.131 54.786h9.078V19.71h-9.078v35.075Zm44.968-36.828c-6.355 0-10.228 2.842-12.286 5.986V4.593H0v8.466h39.34V39h8.654c0-7.438 4.298-12.697 9.563-12.697 4.54 0 6.597 2.237 6.597 10.28v18.203h9.078V33.318c0-10.28-5.265-15.36-13.133-15.36ZM95.807 47.83c-5.507 0-9.078-3.326-9.683-8.829H77.59c.847 9.676 7.202 16.51 18.157 16.51 8.473 0 13.254-3.81 15.736-9.555l-7.687-3.387c-1.15 3.447-3.268 5.261-7.989 5.261Zm-.363-29.692a19.226 19.226 0 0 0-9.32 2.177l4.357 6.168c1.634-.846 3.39-1.27 5.266-1.21 5.084 0 7.686 3.327 8.049 7.68H95.02v6.048h17.31c.121-.907.182-1.754.182-2.66.06-13.184-8.655-18.203-17.068-18.203ZM185.32 47.83c-5.507 0-9.078-3.326-9.683-8.829h-8.534c.847 9.676 7.202 16.51 18.157 16.51 8.473 0 13.254-3.81 15.736-9.555l-7.687-3.387c-1.21 3.447-3.328 5.261-7.989 5.261Zm-.302-29.692a19.226 19.226 0 0 0-9.321 2.177l4.358 6.168c1.634-.846 3.389-1.27 5.265-1.21 5.084 0 7.687 3.327 8.05 7.68h-8.776v6.048h17.31c.121-.907.181-1.754.181-2.66.061-13.184-8.655-18.203-17.067-18.203ZM291.416 47.83c-5.507 0-9.078-3.326-9.683-8.829h-8.534c.847 9.676 7.202 16.51 18.157 16.51 8.473 0 13.254-3.81 15.736-9.555l-7.687-3.387c-1.21 3.447-3.328 5.261-7.989 5.261Zm-.484-29.692a19.225 19.225 0 0 0-9.32 2.177l4.357 6.168c1.635-.846 3.39-1.27 5.266-1.21 5.084 0 7.686 3.327 8.049 7.68h-8.775v6.048h17.309c.121-.907.182-1.754.182-2.66.06-13.184-8.655-18.203-17.068-18.203ZM117.172.299 133.5 39h9.926L130.971 8.221h16.099V.36L117.172.3Zm48.418.06L146.888 47.71l-2.784 7.076h9.502L176.06.36h-10.47Zm83.461 53.58c3.873 0 7.081-1.089 9.32-2.963l-3.631-5.745c-1.15.484-2.421.665-3.692.665-4.963 0-7.808-2.963-8.776-6.894h-8.897c1.211 8.406 7.263 14.937 15.676 14.937Zm11.196-30.418c-2.057-3.265-6.234-5.624-12.044-5.624-5.689-.06-10.954 3.024-13.738 8.043l7.565 4.838c1.392-2.903 4.116-4.838 8.292-4.838 5.931 0 9.925 4.596 9.925 10.038 0 1.029-.121 2.057-.423 3.024h9.502v-20.5h-9.079v5.019Zm-8.775 38.642c-5.871 0-8.05-2.842-8.474-6.168h-8.654c.181 6.35 4.418 13.304 17.309 13.304 8.715 0 14.404-4.354 16.765-10.885l-8.171-2.842c-1.15 4.233-4.297 6.591-8.775 6.591Z">
                                    </path>
                                </svg>
                            </a>
                            <span className="text-white pl-4 pr-4">/</span>
                            Tech
                            <span className="text-white pl-4 pr-4">/</span>
                            Reviews
                            <span className="text-white pl-4 pr-4">/</span>
                            Science
                            <span className="text-white pl-4 pr-4">/</span>
                            Entertainment
                            <span className="text-white pl-4 pr-4">/</span>
                            AI
                            <span className="text-white pl-4 pr-4">/</span>
                            <button onClick={toggleNavigation} className=""><span>More</span><span className="text-3xl translate-y-7"> + </span></button>
                        </h1>
                    </span>
                    <hr className="bg-white border-2 m-3"></hr>
                </div>
                <div className="block md:hidden font-mpd-jost text-white text-xl underline decoration-white">
                    <button onClick={toggleNavigation} className=""><span>Menu</span><span className="text-3xl translate-y-7"> + </span></button>
                </div>
            </div>
            <div>
                {displayNavigation}
            </div>

        </>
    )

}