import { useForm } from "react-hook-form";
import "./UpdateUser.css";
import UpdateUserModel from "../../../Models/UpdateUserModel";
import { useEffect, useState } from "react";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import notify from "../../../Utils/Notify";
import { useNavigate } from "react-router-dom";

function UpdateUser(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<UpdateUserModel>();
    const [updatedUser, setUser] = useState<UpdateUserModel>(authStore.getState().user);
    const navigate = useNavigate();

    useEffect(() => {
        authService.getSingleUser(authStore.getState().user.userId)
            .then(u => {
                setUser(u);

                setValue("firstName", u.firstName);
                setValue("lastName", u.lastName);
                setValue("email", u.email);
            })
            .catch(err => notify.error(err.message));
    }, []);

    async function updateUser(user: UpdateUserModel) {
        try {
            user.userId = updatedUser.userId;
            user.email = updatedUser.email;
            user.city = updatedUser.city;
            user.address = updatedUser.address;
            user.house = updatedUser.house;
            user.zipCode = updatedUser.zipCode;

            await authService.updateUser(user);
            notify.success("המשתמש עודכן בהצלחה");
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="UpdateUser">
            <h1>עריכת פרטי משתמש</h1>
            <form onSubmit={handleSubmit(updateUser)}>
                <div className="PageBox">

                    <label>שם פרטי:</label>
                    <input type="text" {...register("firstName", UpdateUserModel.firstNameValidation)} />
                    <div className="Err">{formState.errors.firstName?.message}</div>

                    <br />

                    <label>שם משפחה:</label>
                    <input type="text" {...register("lastName", UpdateUserModel.lastNameValidation)} />
                    <div className="Err">{formState.errors.lastName?.message}</div>

                    <br />

                    <div>
                        <button>עדכון</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default UpdateUser;