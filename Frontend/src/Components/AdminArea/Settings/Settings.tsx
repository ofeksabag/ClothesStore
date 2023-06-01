import { useState } from "react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBoxesStacked, faCoins, faCubesStacked, faGear, faList, faTag, faUsers } from "@fortawesome/free-solid-svg-icons";

function Settings(): JSX.Element {

    const [activeTab, setActiveTab] = useState('generalSettings');
    const navigate = useNavigate();

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="SettingsComponent">
            <div className="SettingsMenu">

                <div className="Btn" onClick={() => handleTabClick('generalSettings')}>
                    <FontAwesomeIcon icon={faGear} />
                    <span>הגדרות כלליות</span>
                </div>

                <div className="Btn" onClick={() => handleTabClick('categories')}>
                    <FontAwesomeIcon icon={faBoxesStacked} />
                    <span>קטגוריות</span>
                </div>

                <div className="Btn" onClick={() => handleTabClick('subcategories')}>
                    <FontAwesomeIcon icon={faCubesStacked} />
                    <span>תת-קטגוריות</span>
                </div>

                <div className="Btn" onClick={() => handleTabClick('brands')}>
                    <FontAwesomeIcon icon={faTag} />
                    <span>מותגים</span>
                </div>

                <div className="Btn" onClick={() => handleTabClick('products')}>
                    <FontAwesomeIcon icon={faBagShopping} />
                    <span>מוצרים</span>
                </div>

                <div className="Btn" onClick={() => handleTabClick('discounts')}>
                    <FontAwesomeIcon icon={faCoins} />
                    <span>הנחות</span>
                </div>

                <div className="Btn" onClick={() => handleTabClick('orders')}>
                    <FontAwesomeIcon icon={faList} />
                    <span>הזמנות</span>
                </div>

                <div className="Btn" onClick={() => handleTabClick('users')}>
                    <FontAwesomeIcon icon={faUsers} />
                    <span>משתמשים</span>
                </div>

            </div>
            <div className="Page">

                {activeTab === 'generalSettings' && <>
                    <h1>הגדרות כלליות</h1>
                    <div className="PageBox">
                        <p>
                            1
                        </p>
                    </div>
                </>}

                {activeTab === 'categories' && <>
                    <h1>קטגוריות</h1>
                    <div className="PageBox">
                        <p>
                            2
                        </p>
                    </div>
                </>}

                {activeTab === 'subcategories' && <>
                    <h1>תת-קטגוריות</h1>
                    <div className="PageBox">
                        <p>
                            3
                        </p>
                    </div>
                </>}

                {activeTab === 'brands' && <>
                    <h1>מותגים</h1>
                    <div className="PageBox">
                        <p>
                            4
                        </p>
                    </div>
                </>}

                {activeTab === 'products' && <>
                    <h1>מוצרים</h1>
                    <div className="PageBox">
                        <p>
                            5
                        </p>
                    </div>
                </>}

                {activeTab === 'discounts' && <>
                    <h1>הנחות</h1>
                    <div className="PageBox">
                        <p>
                            6
                        </p>
                    </div>
                </>}

                {activeTab === 'orders' && <>
                    <h1>הזמנות</h1>
                    <div className="PageBox">
                        <p>
                            7
                        </p>
                    </div>
                </>}

                {activeTab === 'users' && <>
                    <h1>משתמשים</h1>
                    <div className="PageBox">
                        <p>
                            8
                        </p>
                    </div>
                </>}

            </div>
        </div>
    );
}

export default Settings;
