import { useForm } from "react-hook-form";
import "./Login.css";
import CredentialsModel from "../../../Models/CredentialsModel";
import { NavLink, useNavigate } from "react-router-dom";
import notify from "../../../Utils/Notify";
import authService from "../../../Services/AuthService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function Login(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            notify.success("התחברתם בהצלחה!");
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="Login">

            <div className="AuthBanner"></div>

            <div className="Box">

                <h2>כניסה למערכת</h2>

                <hr />

                <form onSubmit={handleSubmit(send)}>

                    <label>אימייל:</label>
                    <input type="email" {...register("email", CredentialsModel.emailValidation)} />
                    <div className="Err">{formState.errors.email?.message}</div>

                    <br />

                    <label>סיסמה:</label>
                    <input type="password" {...register("password", CredentialsModel.passwordValidation)} />
                    <div className="Err">{formState.errors.password?.message}</div>

                    <br />

                    <div>

                        <button>התחברות</button>

                        <br />

                        <span>
                            <FontAwesomeIcon icon={faUserPlus} /> אין לכם חשבון? <NavLink to="/register">להרשמה</NavLink>
                        </span>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default Login;
