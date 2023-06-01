import { useForm } from "react-hook-form";
import "./Profile.css";
import UpdateUserModel from "../../../Models/UpdateUserModel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import authService from "../../../Services/AuthService";
import notify from "../../../Utils/Notify";
import { authStore } from "../../../Redux/AuthState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTruck, faUserGear } from "@fortawesome/free-solid-svg-icons";

function Profile(): JSX.Element {

    const {register, handleSubmit, formState, setValue} = useForm<UpdateUserModel>();
    const navigate = useNavigate();

    useEffect(() => {
        authService.getSingleUser(authStore.getState().user.userId)
            .then(u => {
                console.log(u);
            })
            .catch(err => notify.error(err.message));
    }, []);

    async function send(user: UpdateUserModel) {
        try {
            await authService.updateUser(user);
            notify.success("User has been updated");
            navigate("/home");
        }
        catch(err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="Profile">
            <div className="Settings">

                <div className="Btn">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <span>פרטים אישיים</span>
                </div>

                <div className="Btn">
                    <FontAwesomeIcon icon={faUserGear} />
                    <span>עריכת פרטי משתמש</span>
                </div>

                <div className="Btn">
                    <FontAwesomeIcon icon={faTruck} />
                    <span>עריכת פרטי משלוח</span>
                </div>
            
            </div>
            <div className="Page">2</div>
        </div>
    );
}

export default Profile;
