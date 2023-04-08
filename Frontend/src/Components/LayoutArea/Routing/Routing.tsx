import { Navigate, Route, Routes } from "react-router-dom";
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

function Routing(): JSX.Element {
    return (
		<Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/new" element={<New/>} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/boys" element={<Boys />} />
            <Route path="/girls" element={<Girls />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/brands" element={<Brands />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/search" element={<Search />} />

            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Routing;
