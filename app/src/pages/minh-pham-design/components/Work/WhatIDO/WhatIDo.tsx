


import './WhatIDo.css';


export default function WhatIDo() {

    const text =
        [
            ["3D", 'I can produce anything that my 16" laptop can render.'],
            ["VISUAL", "I search the internet for references and then combine them to make my own work."],
            ["MOTION", "I use fancy motion to make my design more interesting than it actually is."],
            ["PRODUCT", "I ustilize common desing best practices, test and re-iterate until it works (hopefully)."],
            ["TUTORIAL", "I thought I'd make millions of $ from Youtube but I didn't."]
        ];

    const textBoxes = text.map((item, index) => {
        return (
          
                <div id={`textBox-${index}`} key={`textBox-${index}`} className="horizontalGrid overlay left" >
                    <h1 className="jost-medium title left textBox">{item[0]}</h1>
                    <p className="jost-medium menu right hiddenText">{item[1]}</p>
                </div>
          
        );
    });


    return (
        <>
            <div className="contentWrapper">
                <p className="jost-light left menu">WHAT I DO</p>
                <br />
                {textBoxes}
            </div>
            <hr />
        </>
    );
}