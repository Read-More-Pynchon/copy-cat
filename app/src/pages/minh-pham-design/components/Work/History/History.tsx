



import './History.css';


export default function History() {

    const history = [
        ["NOW", "Design Lead", "Self-lead Designer", "Fantasy Interactive"],
        ["2016", "Senior Product Designer", "Regular Web Designer", "Interactive Labs"],
        ["2012", "Art Director", "Photoshop Doodler", "DR Com Group"],
        ["2009", "Flash Designer", "Jurassic Designer", "DR Com Group"]
    ];

    const historyItems = history.map((item, index) => {
        return (
        
                <div id={`history-${index}`} key={`history-${index}`} className="horizontalGrid overlay">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <h3 className="jost-medium history left">{item[0]}</h3>
                            </td>
                            <td>
                                <div className="jobDescription">
                                <p className="jost-medium history left">{item[1]}</p>
                                <p className="jost-light company left">{item[3]}</p>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        


        );
    });

    return (
        <>
            <hr />
            <div className="contentWrapper">
                <p className="jost-light menu left cream">HISTORY</p>
                <br />
                <br />
                {historyItems}
            </div>
        </>
    )
}