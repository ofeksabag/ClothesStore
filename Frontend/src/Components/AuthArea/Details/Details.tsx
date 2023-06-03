import { useEffect, useState } from "react";
import "./Details.css";
import UpdateUserModel from "../../../Models/UpdateUserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import notify from "../../../Utils/Notify";

function Details(): JSX.Element {

    const [updatedUser, setUser] = useState<UpdateUserModel>(authStore.getState().user);

    useEffect(() => {
        authService.getSingleUser(authStore.getState().user.userId)
            .then(u => {
                setUser(u);
            })
            .catch(err => notify.error(err.message));
    }, []);

    return (
        <div className="Details">
            <h1>פרטים אישיים</h1>
            <div className="PageBox">
                <p>
                    <b>שם מלא:</b> {updatedUser.firstName} {updatedUser.lastName}
                    <br />
                    <b>אימייל:</b> {updatedUser.email}
                    <br />
                    <b>כתובת משלוח:</b> {updatedUser.address} {updatedUser.house} {updatedUser.city}, {updatedUser.zipCode}
                </p>
            </div>
        </div>
    );
}

export default Details;
