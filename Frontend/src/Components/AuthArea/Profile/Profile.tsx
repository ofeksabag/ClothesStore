import { useForm } from "react-hook-form";
import "./Profile.css";
import UpdateUserModel from "../../../Models/UpdateUserModel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import authService from "../../../Services/AuthService";
import notify from "../../../Utils/Notify";
import { authStore } from "../../../Redux/AuthState";

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
			פרופיל
        </div>
    );
}

export default Profile;
