
import './QuarterSquare.css';

import { colors, shades } from '../../../../utils/staticData';

export default function QuarterSquare() {


    //left squares
    const leftSquares = shades.map((shade, shadeIndex) => {
        const reverseShade = (shade === 'black' ? 'white' : 'black');
        const shadeType = colors.map((color, colorIndex) => {
            return (
                <div key={`quarter-square-${color}-${shade}`} className="quarterSquare">
                    <div className={`${color}-background-acc leftQuarter quarter`}>
                    </div>
                    <div className={`${shade}-background-acc ${reverseShade}-acc rightQuarter threeQuarter`}>
                        <p>This is sample text content.
                            <br />
                            This is sample text content.</p>
                    </div>
                </div>
            );
        });
        return shadeType;
    })

    //right squares
    const rightSquares = shades.map((shade, shadeIndex) => {
        const reverseShade = (shade === 'black' ? 'white' : 'black');
        const shadeType = colors.map((color, colorIndex) => {
            return (
                <div key={`quarter-square-${color}-${shade}`} className="quarterSquare">
                    <div className={`${shade}-background-acc ${reverseShade}-acc leftQuarter threeQuarter`}>
                        <p>This is sample text content.
                            <br />
                            This is sample text content.
                        </p>
                    </div>
                    <div className={`${color}-background-acc rightQuarter quarter`}>
                    </div>
                </div>
            );
        });
        return shadeType;
    })

    return (
        <div>
            <h4 className="light-blue-acc">Quarter Squares</h4>
            <p className="pink-acc">Left Squares</p>
            {leftSquares[0]}
            {leftSquares[1]}
            <p className="pink-acc">Right Squares</p>
            {rightSquares[0]}
            {rightSquares[1]}
        </div>
    )
}