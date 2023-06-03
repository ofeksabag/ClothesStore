import { useNavigate } from "react-router-dom";
import "./UpdateShipping.css";
import { useForm } from "react-hook-form";
import UpdateUserModel from "../../../Models/UpdateUserModel";
import { useEffect, useState } from "react";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import notify from "../../../Utils/Notify";

function UpdateShipping(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<UpdateUserModel>();
    const [updatedUser, setUser] = useState<UpdateUserModel>(authStore.getState().user);
    const navigate = useNavigate();

    useEffect(() => {
        authService.getSingleUser(authStore.getState().user.userId)
            .then(u => {
                setUser(u);

                setValue("city", u.city);
                setValue("address", u.address);
                setValue("house", u.house);
                setValue("zipCode", u.zipCode);
            })
            .catch(err => notify.error(err.message));
    }, []);

    async function updateShipping(user: UpdateUserModel) {
        try {
            user.userId = updatedUser.userId;
            user.firstName = updatedUser.firstName;
            user.lastName = updatedUser.lastName;
            user.email = updatedUser.email;

            await authService.updateUser(user);
            notify.success("המשתמש עודכן בהצלחה");
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="UpdateShipping">
            <h1>עריכת פרטי משלוח</h1>
            <form onSubmit={handleSubmit(updateShipping)}>
                <div className="PageBox">

                    <label>עיר: </label>
                    <input type="text" {...register("city", UpdateUserModel.cityValidation)} />
                    <div className="Err">{formState.errors.city?.message}</div>

                    <br />

                    <label>רחוב: </label>
                    <input type="text" {...register("address", UpdateUserModel.addressValidation)} />
                    <div className="Err">{formState.errors.address?.message}</div>

                    <br />

                    <label>בית: </label>
                    <input type="number" {...register("house", UpdateUserModel.houseValidation)} />
                    <div className="Err">{formState.errors.house?.message}</div>

                    <br />

                    <label>מיקוד: </label>
                    <input type="number" {...register("zipCode", UpdateUserModel.zipCodeValidation)} />
                    <div className="Err">{formState.errors.zipCode?.message}</div>

                    <br />

                    <div>
                        <button>עדכון</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default UpdateShipping;
