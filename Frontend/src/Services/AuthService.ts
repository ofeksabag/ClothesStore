import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { AuthActionType, authStore } from "../Redux/AuthState";
import appConfig from "../Utils/AppConfig";
import UpdateUserModel from "../Models/UpdateUserModel";

class AuthService {

    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token = response.data;
        authStore.dispatch({ type: AuthActionType.Register, payload: token });
    }

    public async login(credential: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl, credential);
        const token = response.data;
        authStore.dispatch({ type: AuthActionType.Login, payload: token });
    }

    public async getSingleUser(userId: number): Promise<UpdateUserModel> {
        const response = await axios.get<UpdateUserModel>(appConfig.singleUserUrl + userId);
        const user = response.data;
        return user;
    }

    public async updateUser(user: UpdateUserModel): Promise<void> {
        const response = await axios.put<UpdateUserModel>(appConfig.singleUserUrl + user.userId, user);
        const updatedUser = response.data;
    }

    public logout(): void {
        authStore.dispatch({ type: AuthActionType.Logout });
    }

    public isLoggedIn(): boolean {
        return authStore.getState().token !== null;
    }

}

const authService = new AuthService();

export default authService;