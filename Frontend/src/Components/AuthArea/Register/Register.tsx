import { NavLink, useNavigate } from "react-router-dom";
import "./Register.css";
import { useForm } from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import notify from "../../../Utils/Notify";
import authService from "../../../Services/AuthService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Register(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await authService.register(user);
            notify.success("Welcome " + user.firstName);
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="Register">

            <div className="AuthBanner"></div>

            <div className="Box">

                <h2>הרשמה למערכת</h2>

                <hr />

                <form onSubmit={handleSubmit(send)}>

                    <div className="BoxBg">

                        <div>

                            <h3>1. פרטים אישיים</h3>

                            <label>שם פרטי: </label>
                            <input type="text" {...register("firstName", UserModel.firstNameValidation)} />
                            <div className="Err">{formState.errors.firstName?.message}</div>

                            <br />

                            <label>שם משפחה: </label>
                            <input type="text" {...register("lastName", UserModel.lastNameValidation)} />
                            <div className="Err">{formState.errors.lastName?.message}</div>

                            <br />

                            <label>אימייל: </label>
                            <input type="email" {...register("email", UserModel.emailValidation)} />
                            <div className="Err">{formState.errors.email?.message}</div>

                            <br />

                            <label>סיסמה: </label>
                            <input type="password" {...register("password", UserModel.passwordValidation)} />
                            <div className="Err">{formState.errors.password?.message}</div>

                        </div>

                        <div>

                            <h3>2. כתובת משלוח</h3>

                            <label>עיר: </label>
                            <input type="text" {...register("city", UserModel.cityValidation)} />
                            <div className="Err">{formState.errors.city?.message}</div>

                            <br />

                            <label>רחוב: </label>
                            <input type="text" {...register("address", UserModel.addressValidation)} />
                            <div className="Err">{formState.errors.address?.message}</div>

                            <br />

                            <label>בית: </label>
                            <input type="number" {...register("house", UserModel.houseValidation)} />
                            <div className="Err">{formState.errors.house?.message}</div>

                            <br />

                            <label>מיקוד: </label>
                            <input type="number" {...register("zipCode", UserModel.zipCodeValidation)} />
                            <div className="Err">{formState.errors.zipCode?.message}</div>

                        </div>

                    </div>

                    <br />

                    <button>הרשמה</button>

                    <br />

                    <span>
                        <FontAwesomeIcon icon={faUser} /> נרשמתם בעבר? <NavLink to="/login">להתחברות</NavLink>
                    </span>

                </form>

            </div>

        </div>
    );
}

export default Register;
