import { colorWireFrame, SectionWireFrameType } from "../types/WireFrameTypes";


export const COLORS: colorWireFrame[] =
    [
        {
            name: "pink",
            foreground: 'pink-acc',
            background: 'pink-background-acc',
        },
        {
            name: "purple",
            foreground: 'purple-acc',
            background: 'purple-background-acc',
        },
        {
            name: "blue",
            foreground: 'blue-acc',
            background: 'blue-background-acc',
        },
        {
            name: "light-blue",
            foreground: 'light-blue-acc',
            background: 'light-blue-background-acc',
        }
    ];

export const SHADES = [
    {
        name: "white",
        foreground: 'white-acc',
        background: 'white-background-acc',
    },
    {
        name: "black",
        foreground: 'black-acc',
        background: 'back-background-acc'
    }
];

export const WHITE = {
    name: "white",
    foreground: 'white-acc',
    background: 'white-background-acc',
}

export const BLACK = {
    name: "black",
    foreground: 'black-acc',
    background: 'back-background-acc'
}


export const SECTIONS: SectionWireFrameType[] =
    [
        {
            label: "about",
            title: "About",
            color: COLORS[2], //Blue
            subsections:
                [
                    {
                        label: "aboutUs",
                        title: "About Us",
                        color: COLORS[2], //light-blue
                        content: {}
                    }
                ]
        },
        {
            label: "services",
            title: "What We Do",
            color:  COLORS[3], //Blue
            subsections:
                [
                    {
                        label: "softWareEngineering",
                        title: "Software Engineering",
                        color:  COLORS[0], //Pink
                        subsections: [
                            {
                                label: "reverseEngineering",
                                title: "Reverse Engineering",
                                color: COLORS[3], //Blue
                                content: {}
                            },
                            {
                                label: "frontEnd",
                                title: "Front End Web Design",
                                color: COLORS[2], //light-Blue
                                content: {}
                            },
                            {
                                label: "backEnd",
                                title: "Back End Web Design",
                                color: COLORS[3], //Blue
                                content: {}
                            },
                            {
                                label: "appDevelopment",
                                title: "Back End Web Design",
                                color: COLORS[2], //light-Blue
                                content: {}
                            },
                            {
                                label: "languages",
                                title: "Languages and Frameworks",
                                color: COLORS[3], //Blue
                                content: {}
                            }
                        ]
                    },
                    {
                        label: "audioProduction",
                        title: "Audio Production",
                        color:  COLORS[1], //purple
                        subsections:
                            [
                                {
                                    label: "musician",
                                    title: "Singer/ Songwritwer/ Producer",
                                    color: COLORS[3], //Blue
                                    content: {}
                                },
                                {
                                    label: "audioEditing",
                                    title: "Audio Editing",
                                    color: COLORS[2], //light-Blue
                                    content: {}
                                },
                                {
                                    label: "soundArt",
                                    title: "Experiments in Sound",
                                    color: COLORS[3], //Blue
                                    content: {}
                                }
                            ]
                    },
                    {
                        label: "videoEditing",
                        title: "Video Editing",
                        color:  COLORS[0], //Pink
                        content: {}
                    }
                ]

        },
        {
            label: "portfolio",
            title: "Portfolio",
            color: COLORS[0], //pink
            subsections:
                [
                    {
                        label: "media",
                        title: "Media",
                        color:  COLORS[1], //purple
                        content: {}
                    },
                    {
                        label: "music",
                        title: "Music",
                        color:  COLORS[0], //Pink
                        subsections: [
                            {
                                label: "galvatrons",
                                title: "Galvatrons",
                                color: COLORS[3], //Blue
                                content: {}
                            },
                            {
                                label: "immigrantUnion",
                                title: "Immigrant Union",
                                color: COLORS[2], //light-Blue
                                content: {}
                            },
                            {
                                label: "lubulwa",
                                title: "Lubulwa",
                                color: COLORS[3], //lBlue
                                content: {}
                            },
                            {
                                label: "features",
                                title: "Featured On...",
                                color: COLORS[2], //light-Blue
                                content: {}
                            }
                        ]
                    }
                ]
        },
        {
            label: "contact",
            title: "Contact Us",
            color:  COLORS[1], //purple
            content: {}
        }
    ];


