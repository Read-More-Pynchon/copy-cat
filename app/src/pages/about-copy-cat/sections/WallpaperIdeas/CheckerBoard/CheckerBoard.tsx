
import '../../../layout/MainAreaACC/MainAreaACC.css';
import './CheckerBoard.css';

import { colors, shades } from '../../../utils/staticData';

export default function CheckerBoard(props: any) {


    const pinks = colors.slice(0, 2);
    const blues = colors.slice(2);
    
    // 7 x 7 square to be displayed; 
    //Choose square number that is relatively prime to 8 for best results
    const numberOfSquares = 49; 

    //single color - (white/ black) - 8
    const singleColorBoards = shades.map((item, index) => {
        const boardSet = colors.map((color, colorIndex) => {
            const newBoard = Array.from({ length: numberOfSquares }, (_, i) => {
                if (i % 2 === 0) {
                    return (
                        <div className={`square ${item}-background-acc`}></div>
                    )
                } else {
                    return (
                        <>
                            <div className={`square ${color}-background-acc`}></div>
                        </>
                    )
                }
            });
            return (
                <div key={`board-${item}-${color}-${index}`}>
                    <p className={`${item}-acc`}>{`${color.toUpperCase()} + ${item.toUpperCase()} Board`}</p>
                    <div className='checkerBoard' >
                        {newBoard}
                    </div>
                </div>
            );
        })
        return boardSet;
    });
    //two tone blue boards
    const bluesBoards = shades.map((item, index) => {
        const newBoard = Array.from({ length: numberOfSquares }, (_, i) => {
            if (i % 4 === 1) {
                return (
                    <div className={`square ${blues[0]}-background-acc`}></div>
                )
            } else if (i % 4 === 3) {
                return (
                    <div className={`square ${blues[1]}-background-acc`}></div>
                )
            } else {
                return (
                    <div className={`square ${item}-background-acc`}></div>
                )
            }
        });
        return (
            <div key={`board-${item}-blues-${index}`}>
                <p className={`${item}-acc`}>{`BLUES + ${item.toUpperCase()} Board`}</p>
                <div className='checkerBoard' >
                    {newBoard}
                </div >
            </div >
        );
    });

    //two tone pink/ purple boards
    const pinksBoards = shades.map((item, index) => {
        const newBoard = Array.from({ length: numberOfSquares }, (_, i) => {
            if (i % 4 === 1) {
                return (
                    <div className={`square ${pinks[0]}-background-acc`}></div>
                )
            } else if (i % 4 === 3) {
                return (
                    <div className={`square ${pinks[1]}-background-acc`}></div>
                )
            } else {
                return (
                    <div className={`square ${item}-background-acc`}></div>
                )
            }
        });
        return (
            <div key={`board-${item}-pinks-${index}`}>
                <p className={`${item}-acc`}>{`PINKS+ ${item.toUpperCase()} Board`}</p>
                <div className='checkerBoard' >
                    {newBoard}
                </div >
            </div >
        );
    });

//All colours all the time
    const allColorSquares = Array.from({ length: numberOfSquares }, (_, i) => {
        if (i % 8 === 1) {
            return (
                <div className={`square ${colors[0]}-background-acc`}></div>
            )

        } else if (i % 8 === 3) {
            return (
                <div className={`square ${colors[1]}-background-acc`}></div>
            )

        } else if (i % 8 === 5) {
            return (
                <div className={`square ${colors[2]}-background-acc`}></div>
            )
        } else if (i % 8 === 7) {
            return (
                <div className={`square ${colors[3]}-background-acc`}></div>
            )
        } else if (i % 4 === 2) {
            return (
                <div className={`square ${shades[0]}-background-acc`}></div>
            )
        } else if (i % 4 === 0) {
            return (
                <div className={`square ${shades[1]}-background-acc`}></div>
            )
        }
    });

    const allColorBoards =
        <div key={`board-allColors`}>
            <p className={`black-acc`}>{`ALL COLORS Board`}</p>
            <div className='checkerBoard' >
                {allColorSquares}
            </div>
        </div >






    /*
    
     
    all colors - (white / black) - 1
    */



    return (
        <>
            <h2 className="white">Checkerboards</h2>

            <div className="checkerBoardCollection">
                {singleColorBoards[0]}
                {singleColorBoards[1]}
                {bluesBoards}
                {pinksBoards}
                {allColorBoards}

            </div>



        </>
    )
}