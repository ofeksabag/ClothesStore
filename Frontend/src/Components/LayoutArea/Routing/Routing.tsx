import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Register from "../../AuthArea/Register/Register";
import Boys from "../../BoysArea/Boys/Boys";
import Brands from "../../BrandsArea/Brands/Brands";
import Girls from "../../GirlsArea/Girls/Girls";
import Home from "../../HomeArea/Home/Home";
import Men from "../../MenArea/Men/Men";
import New from "../../NewArea/New/New";
import Sale from "../../SaleArea/Sale/Sale";
import Search from "../../SearchArea/Search/Search";
import Women from "../../WomenArea/Women/Women";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useEffect, useState } from "react";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";

function Routing(): JSX.Element {

    const [user, setUser] = useState<UserModel>();

    useEffect(() => {

        setUser(authStore.getState().user);

        authStore.subscribe(() => {
            setUser(authStore.getState().user);
        });

    }, []);

    return (
        <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/products/new" element={<New />} />
            <Route path="/products/men" element={<Men />} />
            <Route path="/products/women" element={<Women />} />
            <Route path="/products/boys" element={<Boys />} />
            <Route path="/products/girls" element={<Girls />} />
            <Route path="/products/sale" element={<Sale />} />
            <Route path="/products/brands" element={<Brands />} />


            {!user && <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </>}

            <Route path="/search" element={<Search />} />

            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Routing;
