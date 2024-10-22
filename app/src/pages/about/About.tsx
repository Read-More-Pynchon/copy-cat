

export default function About() {

    const technologyText = [
        { name: 'React', usage: 'Frontend Framework' },
        {
            name: 'Typescript',
            usage: 'Javascript with type certainty (or at lease more definition and failsafes)'
        },
        {
            name: 'Tailwind CSS',
            usage: 'Its a revelation. After a short minute of learning it has sped up development time considerably'
        },
        { name: 'Github Pages', usage: 'Current view. All portfoio pages will be placed here' },
        { name: 'Visual Studio Code', usage: 'Text editor baby!' },
    ];

    const technologies = technologyText.map(({name, usage}) => {
        return(
            <li>
                <p className="upperCase text-pink">{name}</p>
                <ul className="list-image-none md:list-image-bullet">
                    <li>
                        <p className="text-blue-light">{usage}</p></li>
                </ul>
            </li>
        )

    })

    return (
        <div>

       
        <div className="p-6 m-6 rounded-3xl bg-purple">
            <h1 className="text-3xl text-near-white m-3">About Copy Cat</h1>
            <p className="text-near-white">This is a playground to explore and exhibit my skills in front end web development, consisting of </p>
            <ul className="text-blue-light list-outside list-image-none md:list-image-bullet">
                <li className="text-blue-light">Producing accurate as possible copies of websites that I have seens and liked</li>
                <li className="text-blue-light">Showcasing and applying them to my own website as part of the design process</li>

            </ul>
            <p className="text-near-white">All of this at present is work in progress but it will show something i guess</p>
            <br />
            <p className="text-near-white">Each website was <strong className="text-blue-light">completed by</strong><strong className="text-pink"> visual reference only</strong> - I looked and copied based on what I saw</p>
            <br />
            <p className="text-near-white">Included with each page is the published website for comparison</p>
            <br />
            <hr />
            <br />
        </div>
        <div className="p-6 m-6 rounded-3xl bg-dark-blue">
            <h2 className="text-3xl text-near-white m3">Technologies Used</h2>
            <br/>
            <ul>
                {technologies}
            </ul>
        </div>
        </div>
    )

}