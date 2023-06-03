import "./Profile.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTruck, faUserGear } from "@fortawesome/free-solid-svg-icons";
import UpdateUser from "../UpdateUser/UpdateUser";
import UpdateShipping from "../UpdateShipping/UpdateShipping";
import Details from "../Details/Details";

function Profile(): JSX.Element {

    const [activeTab, setActiveTab] = useState('details');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="Profile">
            <div className="Settings">

                <div className="Btn" onClick={() => handleTabClick('details')}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <span>פרטים אישיים</span>
                </div>

                <div className="Btn" onClick={() => handleTabClick('editUser')}>
                    <FontAwesomeIcon icon={faUserGear} />
                    <span>עריכת פרטי משתמש</span>
                </div>

                <div className="Btn" onClick={() => handleTabClick('editShipping')}>
                    <FontAwesomeIcon icon={faTruck} />
                    <span>עריכת פרטי משלוח</span>
                </div>

            </div>

            <div className="Page">

                {activeTab === 'details' && <>
                    <Details />
                </>}

                {activeTab === 'editUser' && <>
                    <UpdateUser />
                </>}

                {activeTab === 'editShipping' && <>
                    <UpdateShipping />
                </>}

            </div>
        </div>
    );
}

export default Profile;