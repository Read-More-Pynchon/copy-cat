
import { useState, useEffect } from 'react';

export interface MenuItem {
    item: string,
    url: string
}

interface NavigationItem {
    title: MenuItem,
    subtitles?: MenuItem[]
}

export default function HeaderGP() {

    const toggleSubMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        const menuItemId = e.currentTarget.id;
        const subMenuId = `${menuItemId}-submenu`;
        const subMenu = document.getElementById(subMenuId);
        const subMenuClassList = subMenu?.classList;
        subMenuClassList?.contains('hidden') ? subMenu?.classList.remove('hidden') : subMenu?.classList.add('hidden');
    }

    const topNavText: MenuItem[] = [
        { item: "What Goes On", url: "#!" },
        { item: "Who's Playing", url: "#!" },
        { item: "The Sup'", url: "#!" },
        { item: "March 8, 9 & 10, 2025 Meredith Supernatural Amphitheatre", url: "#!" },
        { item: "Ticket Info", url: "#!" },
        { item: "Get Prepared", url: "#!" },
        { item: "Every Thing", url: "#!" },
    ];

    const topNavigation = topNavText.map(({ item, url }) => {
        return (
            <div className="justify-evenly p-3 m-3">
                <a href={url} className="text-gp-green font-gp-text text-center uppercase">{item}</a>
            </div>
        )
    });

    const bottomNavLeftText: MenuItem[] = [
        { item: "What Goes On", url: "#!" },
        { item: "Who's Playing", url: "#!" },
        { item: "The Sup'", url: "#!" },
    ];

    const bottomNavRightText: MenuItem[] = [
        { item: "Ticket Info", url: "#!" },
        { item: "Get Prepared", url: "#!" },
        { item: "Every Thing", url: "#!" },
    ];

    const bottomNavigationLeft = bottomNavLeftText.map(({ item, url }) => {
        return (
            <div className="m-3 p-1">
                <a href={url} className="font-gp-text text-gp-yellow hover:text-gp-red uppercase transition-colors">{item}</a>
            </div>
        );
    })

    const bottomNavigationRight = bottomNavRightText.map(({ item, url }) => {
        return (
            <div className="m-3 p-1">
                <a href={url} className="text-gp-yellow font-gp-text hover:text-gp-red uppercase transition-colors">{item}</a>
            </div>
        );
    })

    const navigationText: NavigationItem[] = [
        {
            title: { item: "Who's Playing", url: "#!" },
        },
        {
            title: { item: "What Goes On", url: "#!" },
            subtitles: [
                { item: 'Pink Flamingo Bar', url: "#!" },
                { item: "Eric’s Terrace", url: "#!" },
                { item: 'Toucan Bar', url: "#!" },
                { item: 'Electric Possum Bar', url: "#!" },
                { item: 'Bring Your Own', url: "#!" },
                { item: 'Ecoplex Cinema', url: "#!" },
                { item: 'The Meredith Eye', url: "#!" },
                { item: 'CleanUp Song', url: "#!" },
                { item: 'One and Only Stage', url: "#!" },
                { item: 'History', url: "#!" },
                { item: 'What Was Said', url: "#!" },
                { item: 'The Boot', url: "#!" },
                { item: 'Helpers', url: "#!" },
                { item: 'No Dickhead Policy', url: "#!" },
                { item: 'Please Look After Yourself and Others', url: "#!" },
                { item: 'They Came, They Played, They Said Nice Things…', url: "#!" },
                { item: 'A Potted History of the First Decade', url: "#!" },
                { item: 'Hotcakes', url: "#!" },
                { item: 'Hours of Operation', url: "#!" },
                { item: 'Community Tucker Tent', url: "#!" },
                { item: 'International Food Court', url: "#!" },
                { item: 'Southbank Food Court', url: "#!" },
                { item: 'The Gift Shoppe', url: "#!" },
                { item: 'Heaven Eleven', url: "#!" },
                { item: 'Massage', url: "#!" },
                { item: 'Amphitheatre Furniture Policy', url: "#!" },
                { item: 'Campsite Noise and Nuisance Policy', url: "#!" },
                { item: 'How You Help The District', url: "#!" },
                { item: 'Love Letters', url: "#!" },
            ]
        },
        {
            title: { item: "Supernatural Amphitheatre", url: "#!" },
            subtitles: [
                { item: 'Accessibility', url: "#!" },
                { item: 'Site Map', url: "#!" },
                { item: 'Sunset Strip', url: "#!" },
                { item: 'The Arch of Love', url: "#!" },
                { item: 'The Rochester', url: "#!" },
                { item: 'SportsField', url: "#!" },
                { item: 'Red Tree', url: "#!" },
                { item: 'Inspiration Point', url: "#!" },
                { item: 'Top Camp', url: "#!" },
                { item: 'Bush Camp', url: "#!" },
                { item: 'South Pines', url: "#!" },
                { item: 'Bluegums', url: "#!" },
                { item: 'Tom Mankeys', url: "#!" },
                { item: 'Outer Space', url: "#!" },
                { item: 'Green Practices', url: "#!" },
                { item: 'Reception', url: "#!" },
                { item: 'Helper Hut Central', url: "#!" },
                { item: 'Toilets', url: "#!" },
                { item: 'Showers', url: "#!" },
                { item: 'Roads and Paths', url: "#!" },
                { item: 'Police Station', url: "#!" },
                { item: 'First Aid', url: "#!" },
                { item: 'Welfare', url: "#!" },
                { item: 'Meredith Town', url: "#!" },
                { item: 'Golden Plains Shire', url: "#!" },
                { item: 'Mobile Phone Coverage', url: "#!" },
                { item: 'The Nolans / Chris Nolan, Jack & Mary Nolan', url: "#!" },
                { item: 'Wadawurrung', url: "#!" },
                { item: 'Meredith Dairy', url: "#!" },
            ]
        },
        {
            title: { item: "Ticket Info", url: "#!" },
            subtitles: [
                { item: 'Ticket Dates', url: "#!" },
                { item: 'The Ballot', url: "#!" },
                { item: 'Online Sales', url: "#!" },
                { item: 'Become a Subscriber', url: "#!" },
                { item: 'Price', url: "#!" },
                { item: 'Online and Ballot Ticket FAQ', url: "#!" },
                { item: 'Buying or Selling Your Ticket', url: "#!" },
                { item: "I Wasn’t Drawn in the Ballot", url: "#!" },
                { item: 'Ticket Contact', url: "#!" },
                { item: 'Unlikely But Statistically Possible', url: "#!" },
                { item: 'Wristbands', url: "#!" },
                { item: 'Terms and Conditions / T&Cs', url: "#!" },
                { item: 'Delivery / Where Are My Tickets?', url: "#!" },
                { item: 'Booking Fees', url: "#!" },
                { item: 'Kids / All Ages', url: "#!" },
                { item: 'Companion Card', url: "#!" },
                { item: 'Lost or Stolen Tickets', url: "#!" },
                { item: 'Trespasser Policy', url: "#!" },
                { item: 'Capacity', url: "#!" },
                { item: 'Dates and Times', url: "#!" },
                { item: 'Locals', url: "#!" },
                { item: "Aunty's Last Golden Chance", url: "#!" }
            ]
        },
        {
            title: { item: "Get Prepared", url: "#!" },
            subtitles: [
                { item: 'Little Golden Booklet', url: "#!" },
                { item: 'Location', url: "#!" },
                { item: 'Directions', url: "#!" },
                { item: 'Site Map', url: "#!" },
                { item: 'Weather', url: "#!" },
                { item: 'What To Bring?', url: "#!" },
                { item: 'Camping', url: "#!" },
                { item: 'Campgrounds', url: "#!" },
                { item: 'Car Parks', url: "#!" },
                { item: 'Lifetime Warranty', url: "#!" },
                { item: 'Policies', url: "#!" },
                { item: 'Banned Items', url: "#!" },
                { item: 'Gates Times', url: "#!" },
                { item: 'Travel Times', url: "#!" },
                { item: 'Convoy / Reserving Campsites', url: "#!" },
                { item: 'The Supernatural Express', url: "#!" },
                { item: 'Public Transport', url: "#!" },
                { item: 'Chartered and Private Buses', url: "#!" },
                { item: 'Caravans, Campervans, Motorhomes', url: "#!" },
                { item: 'Drop Off and Collection', url: "#!" },
                { item: 'Shuttle Buses', url: "#!" },
                { item: 'Car Cloaking', url: "#!" },
                { item: 'Booze and Drug Bus', url: "#!" },
                { item: 'Know Your Rights', url: "#!" },
                { item: 'Traffic / Holding Bays', url: "#!" },
                { item: 'Passouts', url: "#!" },
                { item: 'Airports', url: "#!" },
            ]
        },
        {
            title: { item: "Every Thing", url: "#!" },
            subtitles: [
                { item: 'How To Get Help', url: "#!" },
                { item: 'Artist Application', url: "#!" },
                { item: 'Ask Aunty Meredith', url: "#!" },
                { item: 'Caterer Registration', url: "#!" },
                { item: 'Contact', url: "#!" },
                { item: 'Credits / Art, Website, Photography', url: "#!" },
                { item: 'Emergency Preparedness', url: "#!" },
                { item: 'Feedback', url: "#!" },
                { item: 'Lost Property', url: "#!" },
                { item: 'Market Stalls', url: "#!" },
                { item: 'Oslo', url: "#!" },
                { item: 'Publicity', url: "#!" },
                { item: 'Sponsors', url: "#!" },
                { item: 'Stage Lighting and Visuals', url: "#!" },
                { item: 'Subscriber Info', url: "#!" },
                { item: 'Twitter', url: "#!" },
                { item: 'Volunteers', url: "#!" },
                { item: 'YouTube', url: "#!" },
            ]
        }
    ];

    const navigationItems = navigationText.map(({title, subtitles}, index) => {
        let subtitleItems;
        if (subtitles) {
            subtitleItems = subtitles.map(({item, url}, index) => {
                return <a href={url} className="hover:text-gp-green my-2">{item}</a>
            });
        }
        return (
            <>
                <button id={title.item.toLowerCase()} onClick={toggleSubMenu} className="col-span-10 grid grid-cols-12 hover:opacity-60" >
                    <div className="col-span-11 m-1 p-3">
                        <h1 className="font-gp-text text-4xl font-bold text-gp-red text-center">
                            {title.item}
                        </h1>
                        <div id={`${title.item.toLowerCase()}-submenu`} className="hidden pl-3 text-gp-green text-xl font-bold text-center font-gp-text">
                            {subtitleItems}
                        </div>
                    </div>
                    <div className="col-span-1 m-1 p-3">
                        <h1 className="font-gp-text text-7xl font-bold translate-y-4 text-gp-green">
                            {subtitleItems ? '+' : ''}
                        </h1>
                    </div>
                </button>
            </>
        )
    });

    const [navIsShown, setNavIsShown] = useState(false);

    useEffect(() => {
        if (navIsShown) {
            document.body.classList.add('overflow-hidden', 'opacity-90');
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
                <div className="bg-gp-dark-blue opacity-90 w-full h-full p-12 fixed right-0 top-0 z-50 overflow-y-scroll ">
                    <div className="grid grid-cols-12">
                        <div className="col-span-9"></div>
                        <div className="col-span-3">
                            <button onClick={toggleNavigation} className="sticky text-4xl uppercase font-gp-text font-bold text-center text-gp-green p-3">
                                <h1>X</h1>
                            </button>
                        </div>
                        {navigationItems}
                    </div>
                </div>
            )
        }
    }

    const displayNavigation = navigation();

    return (
        <>
            <div className='w-full h-fit p-6 pb-1 m-6 bg-gp-dark-blue text-right'>
                <div className="hidden md:flex">
                    {topNavigation}
                </div>
                <div className="block md:hidden font-gp-text text-gp-green text-6xl underline decoration-white">
                    <button onClick={toggleNavigation} className="text-7xl"> = </button>
                </div>
            </div>
            <div>
                {displayNavigation}
            </div>
            <div className="hidden md:block bg-gradient-to-t from-gp-light-blue fixed bottom-0 p-6 pt-12">
                <div className="grid grid-cols-12">
                    <div className="col-span-4 grid grid-cols-3">
                        {bottomNavigationLeft}
                    </div>
                    <div className="col-span-4">

                        <svg width="241" height="63" viewBox="0 0 241 63" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="m-auto"
                        >
                            <path d="M32.6006 62.96C14.5207 62.96 0.840649 49.52 0.840649 31.92C0.840649 14.32 13.9607 0.879995 32.3607 0.879995C39.7207 0.879995 46.0407 3.12 50.5207 7.2V23.36C48.2807 18.64 42.2806 14.72 34.8407 14.72C24.8406 14.72 16.7606 22.16 16.7606 31.92C16.7606 41.6 23.7206 49.12 32.6006 49.12C33.0807 49.12 33.6407 49.04 34.3607 48.96V38.48H31.1607C27.6407 38.48 24.4406 46.64 24.4406 42.96V24.56H53.4807C57.1607 24.56 49.0007 27.76 49.0007 31.28V58.56C44.8406 61.44 38.7607 62.96 32.6006 62.96ZM52.8344 62C56.2744 61.92 57.0744 58.8 57.0744 55.28V8.56C57.0744 5.04 56.2744 1.84 52.5944 1.84H63.4744C83.8744 1.84 94.5944 9.84 94.5944 23.6C94.5944 35.36 86.8344 42.96 71.8744 44.96V55.28C71.9544 58.8 72.7544 62 76.3544 62H52.8344ZM71.8744 30.96C76.6744 30.96 80.2744 28.16 80.2744 23.68C80.2744 19.2 76.6744 16.4 71.8744 16.4V30.96ZM87.3544 62C89.9144 62 91.7544 60.56 93.1144 58.48L110.074 32.32L93.4344 6.24C91.6744 3.76 89.9144 1.84 87.0344 1.84H111.354C108.314 1.84 108.634 3.84 110.314 6.4L118.634 19.2L126.874 6.48C128.474 3.84 129.034 1.84 125.914 1.84H150.234C147.354 1.84 145.594 3.76 143.834 6.24L127.194 32.24L144.234 58.4C145.674 60.56 147.434 62 149.994 62H125.194C128.874 62 127.434 59.2 125.194 55.76L118.634 45.52L112.074 55.76L112.154 55.68C109.834 59.2 108.394 62 112.074 62H87.3544ZM189.504 62.4C161.104 53.76 145.264 32.4 147.104 1.84H166.384C163.264 1.84 161.904 4.16 161.984 7.04C162.384 19.2 165.024 29.04 172.544 36.24V8.56C172.544 5.04 171.744 1.84 168.064 1.84H191.824C188.144 1.84 187.344 5.04 187.344 8.56V47.76C187.344 52.72 187.344 59.36 189.504 62.4ZM192.441 62C195.881 61.92 196.681 58.8 196.681 55.28V8.56C196.681 5.04 195.881 1.84 192.201 1.84H215.961C212.281 1.84 211.481 5.04 211.481 8.56V55.28C211.481 58.8 212.361 62 215.961 62H192.441ZM216.6 62C220.04 61.92 220.84 58.8 220.84 55.28V8.56C220.84 5.04 220.04 1.84 216.36 1.84H240.12C236.44 1.84 235.64 5.04 235.64 8.56V55.28C235.64 58.8 236.52 62 240.12 62H216.6Z" fill="#FECF0A"></path>
                        </svg>
                    </div>
                    <div className="col-span-4 grid grid-cols-3">
                        {bottomNavigationRight}
                    </div>
                </div>
            </div>
        </>
    )

}