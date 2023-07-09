import { useForm } from "react-hook-form";
import "./GeneralSettings.css";
import GeneralSettingsModel from "../../../Models/GeneralSettings";
import { useEffect, useState } from "react";
import websiteService from "../../../Services/WebsiteService";
import notify from "../../../Utils/Notify";
import { useNavigate } from "react-router-dom";
import adminService from "../../../Services/AdminService";

function GeneralSettings(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<GeneralSettingsModel>();
    const navigate = useNavigate();

    useEffect(() => {
        websiteService.getLayout(1)
            .then(l => {
                setValue("layoutId", l.layoutId)
                setValue("websiteName", l.websiteName);
                setValue("websiteDescription", l.websiteDescription);
                setValue("themeColor", l.themeColor);
                setValue("headerLine", l.headerLine);
            })
            .catch(err => notify.error(err.message));
    }, []);

    async function updateLayout(layout: GeneralSettingsModel) {
        try {
            await adminService.updateGeneralSettings(layout);
            notify.success("ההגדרות הכלליות עודכנו בהצלחה");
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="GeneralSettings">
            <h1>הגדרות כלליות</h1>
            <form onSubmit={handleSubmit(updateLayout)}>
                <div className="PageBox">

                    <input type="hidden" {...register("layoutId")} />

                    <br />

                    <label>שם האתר: </label>
                    <input type="text" {...register("websiteName", GeneralSettingsModel.websiteNameValidation)} />
                    <div className="Err">{formState.errors.websiteName?.message}</div>

                    <br />

                    <label>תיאור האתר: </label>
                    <textarea {...register("websiteDescription", GeneralSettingsModel.websiteDescriptionValidation)}></textarea>
                    <div className="Err">{formState.errors.websiteDescription?.message}</div>

                    <br />

                    <label>רקע האתר: </label>
                    <input type="color" {...register("themeColor", GeneralSettingsModel.websiteThemeColorValidation)} />
                    <div className="Err">{formState.errors.themeColor?.message}</div>

                    <br />
                    <hr />
                    <br />

                    <label>כותרת סרגל עליון: </label>
                    <input type="text" {...register("headerLine", GeneralSettingsModel.websiteHeaderLineValidation)} />
                    <div className="Err">{formState.errors.headerLine?.message}</div>

                    <br />

                    <div>
                        <button>עדכון</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default GeneralSettings;
