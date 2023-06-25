import { Chart } from "react-google-charts";
import { faBagShopping, faMoneyBillTrendUp, faScroll, faTruckRampBox, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Statistics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Statistics(): JSX.Element {

    const DialyData = [
        [
            "Element",
            "רווח",
            { role: "style" },
            {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
            },
        ],
        ["19.6", 15800, "#d9d5cd", "15800₪"],
        ["20.6", 12650, "#d9d5cd", "12650₪"],
        ["21.6", 22955, "#d9d5cd", "22955₪"],
        ["22.6", 16230, "#d9d5cd", "16230₪"],
        ["23.6", 22075, "#d9d5cd", "22075₪"],
        ["24.6", 28410, "#d9d5cd", "28410₪"],
        ["25.6", 24600, "#d9d5cd", "24600₪"],
    ];

    const DialyOptions = {
        title: '142720₪ סה"כ',
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };

    const PieData = [
        ["תאריך", "מכירות"],
        ["12", 900],
        ["13", 350],
        ["14", 400],
        ["15", 1020],
        ["16", 850],
        ["17", 200],
        ["18", 400],
    ];

    const PieOptions = {
        title: 'סה"כ 7 עסקאות',
        pieHole: 0.3,
        is3D: false,
    };

    return (
        <div className="Statistics">
            <div className="PageBox">

                <div className="StatisticsArea">

                    <div className="StatisticsBox">
                        <div className="TotalIcon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="TotalText">
                            <h3>משתמשים</h3>
                            <p>
                                0000
                            </p>
                        </div>
                    </div>

                    <div className="StatisticsBox">
                        <div className="TotalIcon">
                            <FontAwesomeIcon icon={faBagShopping} />
                        </div>
                        <div className="TotalText">
                            <h3>מוצרים</h3>
                            <p>
                                0000
                            </p>
                        </div>
                    </div>

                    <div className="StatisticsBox">
                        <div className="TotalIcon">
                            <FontAwesomeIcon icon={faTruckRampBox} />
                        </div>
                        <div className="TotalText">
                            <h3>מלאי מוצרים</h3>
                            <p>
                                0000
                            </p>
                        </div>
                    </div>

                    <div className="StatisticsBox">
                        <div className="TotalIcon">
                            <FontAwesomeIcon icon={faScroll} />
                        </div>
                        <div className="TotalText">
                            <h3>מכירות</h3>
                            <p>
                                0000
                            </p>
                        </div>
                    </div>

                    <div className="StatisticsBox">
                        <div className="TotalIcon">
                            <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                        </div>
                        <div className="TotalText">
                            <h3>רווח</h3>
                            <p>
                                0000
                            </p>
                        </div>
                    </div>

                </div>

                <div className="Graphs">

                    <div className="DailyEarning">
                        <div className="GraphHeader">
                            רווח שבועי (₪)
                        </div>

                        <Chart
                            chartType="BarChart"
                            width="100%"
                            height="100%"
                            data={DialyData}
                            options={DialyOptions}
                        />
                    </div>

                    <div className="SmallGraphs">

                        <div className="Pie">
                            <div className="GraphHeader">
                                עסקאות {new Date().getDate()}/{new Date().getMonth() + 1}
                            </div>

                            <Chart
                                chartType="PieChart"
                                data={PieData}
                                options={PieOptions}
                                width="100%"
                                height="100%"
                            />
                        </div>

                        <div className="Excel">
                            <h3>דוחות אקסל להורדה</h3>

                            <button>דוח יומי</button>
                            <button>דוח שבועי</button>
                            <button>דוח חודשי</button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Statistics;
