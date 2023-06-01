import { useForm } from "react-hook-form";
import "./Profile.css";
import UpdateUserModel from "../../../Models/UpdateUserModel";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../../../Services/AuthService";
import notify from "../../../Utils/Notify";
import { authStore } from "../../../Redux/AuthState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTruck, faUserGear } from "@fortawesome/free-solid-svg-icons";

function Profile(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<UpdateUserModel>();
    const [activeTab, setActiveTab] = useState('details');
    const [updatedUser, setUser] = useState<UpdateUserModel>(authStore.getState().user);
    const navigate = useNavigate();

    useEffect(() => {
        authService.getSingleUser(authStore.getState().user.userId)
            .then(u => {
                setUser(u);

                setValue("firstName", u.firstName);
                setValue("lastName", u.lastName);
                setValue("email", u.email);

                setValue("city", u.city);
                setValue("address", u.address);
                setValue("house", u.house);
                setValue("zipCode", u.zipCode);
            })
            .catch(err => notify.error(err.message));
    }, []);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

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
                </>}

                {activeTab === 'editUser' && <>
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
                </>}

                {activeTab === 'editShipping' && <>
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
                </>}

            </div>
        </div>
    );
}

export default Profile;