import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GeneralSettings.css";
import { faBagShopping, faMoneyBillTrendUp, faMoneyBills, faScroll, faTruckRampBox, faUser } from "@fortawesome/free-solid-svg-icons";

function GeneralSettings(): JSX.Element {
    return (
        <div className="GeneralSettings">
            <div className="PageBox">

                <div className="Statistics">

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

                גרף מכירה יומית + אפשרות הורדת דוח יומי
                |
                הגדרות מערכת כלליות
                |
                ניתוח גולשים (דפדפן, זמן ממוצע וכו)
                |
                גרף\טבלה 5 פריטים הכי נמכרים
                |
                ניתוח מכירות ביחס לאתמול (אייקון עולה ירוק אייקון יורד אדום ובכמה אחוז) | לעשות GRID לstatictics ולסדר למובייל יפה (כל 2 יורד)
            </div>
        </div>
    );
}

export default GeneralSettings;
