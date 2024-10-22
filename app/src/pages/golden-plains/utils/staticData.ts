

interface MenuItem {
    item: string;
    url?: string;
    content?: string
}

interface NavigationItem {
    title: MenuItem,
    subtitles?: MenuItem[]
}

export const navigationItems: NavigationItem[] = [
    {
        title: { item: "Who's Playing", url: "#!" },
        subtitles: [{ item: "Who's Playing", url: "#!" }]
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