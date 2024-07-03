

import './StaggeredSquare.css';


export default function StaggeredSquare() {

    const locations = [
        {
            x: '10em',
            y: '10em',
            color: "pink"
        },
        {
            x: '20em',
            y: '30em',
            color: "blue"
        },
        {
            x: '50em',
            y: '80em',
            color: "light-blue"
        },
        {
            x: '13em',
            y: '21em',
            color: "purple"
        },
        {
            x: '34em',
            y: '55em',
            color: "white"
        },
        {
            x: '89em',
            y: '43em',
            color: "pink"
        },
        {
            x: '82em',
            y: '93em',
            color: "blue"
        },
        {
            x: '65em',
            y: '28em',
            color: "light-blue"
        },
        {
            x: '71em',
            y: '80em',
            color: "purple"
        },
        {
            x: '43em',
            y: '51em',
            color: "white"
        }

    ];
    //generate the sequence based on the fibonacci sequence!!

    const staggeredSquares = locations.map((item, index) => {
        return (
            <div
                className={`staggered-square ${item.color}-background-acc`}
                style={{ left: item.x, right: item.y }}
                key={`staggered-square-${index}`}
            ></div>
        )
    })


    return (
        <div className="blue-background-acc">
            <h2 className="white-acc" > Staggered Square</h2>
            <div className="staggered-squares black-background-acc">
{staggeredSquares}
            </div>
        </div>
    )
}