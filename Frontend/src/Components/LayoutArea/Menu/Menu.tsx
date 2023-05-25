import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import websiteService from "../../../Services/WebsiteService";
import notify from "../../../Utils/Notify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBars, faClose, faRightFromBracket, faGear, faUserPen } from '@fortawesome/free-solid-svg-icons';
import "./Menu.css";
import SubcategoryModel from "../../../Models/SubcategoryModel";
import productService from "../../../Services/ProductService";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";

function Menu(): JSX.Element {

    const [websiteName, setWebsiteName] = useState<string>("");
    const [subcategories, setSubcategories] = useState<SubcategoryModel[]>([]);

    useEffect(() => {

        websiteService.getWebsiteName()
            .then(name => setWebsiteName(name))
            .catch(err => notify.error(err.message));

        document.title = websiteName;

        productService.getAllSubcategories()
            .then(sub => setSubcategories(sub))
            .catch(err => notify.error(err.message));

    }, [websiteName]);

    let menSubcategories: SubcategoryModel[] = [];
    let womenSubcategories: SubcategoryModel[] = [];
    let boySubcategories: SubcategoryModel[] = [];
    let girlSubcategories: SubcategoryModel[] = [];

    subcategories.filter(s => {
        s.categoryName === "men" && menSubcategories.push(s);
        s.categoryName === "women" && womenSubcategories.push(s);
        s.categoryName === "boys" && boySubcategories.push(s);
        s.categoryName === "girls" && girlSubcategories.push(s);
    });

    const [mobileNavbar, setMobileNavbar] = useState(false);
    const handleClick = () => mobileNavbar === true ? setMobileNavbar(false) : setMobileNavbar(true);
    const closeMobileNavbar = () => setMobileNavbar(false);

    const [matches, setMatches] = useState(window.matchMedia("(min-width: 800px)").matches);

    useEffect(() => {
        window
            .matchMedia("(min-width: 800px)")
            .addEventListener('change', e => setMatches(e.matches));

        matches && setMobileNavbar(false);

    }, [matches]);

    const [user, setUser] = useState<UserModel>();
    const navigate = useNavigate();

    useEffect(() => {

        setUser(authStore.getState().user);

        authStore.subscribe(() => {
            setUser(authStore.getState().user);
        });

    }, []);

    function logout(): void {
        authService.logout();
        notify.success("התנתקתם בהצלחה!");
        navigate("/login");
    }

    return (
        <div className="Menu">

            <div className="Logo">
                <h1>
                    <NavLink to="/home">{websiteName}</NavLink>
                </h1>

            </div>

            <div className="Bars" onClick={handleClick} style={{ backgroundColor: mobileNavbar ? '#bdbdbd' : '', color: mobileNavbar ? '#5c5959' : '' }}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className="Navbar">

                <div className="Tools">

                    {!user && <>

                        <span>
                            <NavLink to="/login">
                                <FontAwesomeIcon icon={faUser} />
                            </NavLink>
                        </span>

                    </>}

                    {user && <>

                        <span>
                            <NavLink to="/login" onClick={logout}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </NavLink>
                        </span>

                        {user.role === 2 && <>

                            <span>
                                <NavLink to="/admin" style={{ color: "#a74337" }}>
                                    <FontAwesomeIcon icon={faGear} />
                                </NavLink>
                            </span>

                        </>}
                        
                        <span>
                            <NavLink to="/profile">
                                <FontAwesomeIcon icon={faUserPen} />
                            </NavLink>
                        </span>

                    </>}

                    <span>
                        <NavLink to="/search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </NavLink>
                    </span>
                </div>

                <NavLink to="/products/brands">brands</NavLink>
                <NavLink to="/products/sale">sale</NavLink>
                <div className="Dropdown">
                    <NavLink to="/products/girls">girls</NavLink>
                    <div className="DropdownContent">
                        {girlSubcategories.map(s => <NavLink key={s.categoryName + "/" + s.subcategoryName} to={"/products/" + s.categoryName + "?filter=" + s.subcategoryName}>{s.subcategoryName}</NavLink>)}
                    </div>
                </div>
                <div className="Dropdown">
                    <NavLink to="/products/boys">boys</NavLink>
                    <div className="DropdownContent">
                        {boySubcategories.map(s => <NavLink key={s.categoryName + "/" + s.subcategoryName} to={"/products/" + s.categoryName + "?filter=" + s.subcategoryName}>{s.subcategoryName}</NavLink>)}
                    </div>
                </div>
                <div className="Dropdown">
                    <NavLink to="/products/women">women</NavLink>
                    <div className="DropdownContent">
                        {womenSubcategories.slice(0, 7).map(s => <NavLink key={s.categoryName + "/" + s.subcategoryName} to={"/products/" + s.categoryName + "?filter=" + s.subcategoryName}>{s.subcategoryName}</NavLink>)}
                        <NavLink to="/products/women">...</NavLink>
                    </div>
                </div>
                <div className="Dropdown">
                    <NavLink to="/products/men">men</NavLink>
                    <div className="DropdownContent">
                        {menSubcategories.slice(0, 7).map(s => <NavLink key={s.categoryName + "/" + s.subcategoryName} to={"/products/" + s.categoryName + "?filter=" + s.subcategoryName}>{s.subcategoryName}</NavLink>)}
                        <NavLink to="/products/men">...</NavLink>
                    </div>
                </div>
                <NavLink to="/products/new">new in</NavLink>

            </div>

            <div className="Navbar_Mobile" style={{ display: mobileNavbar ? 'block' : 'none' }}>

                <div className="CloseBtn" onClick={closeMobileNavbar}>
                    <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="Tools">

                    {!user && <>

                        <span>
                            <NavLink onClick={closeMobileNavbar} to="/login">
                                <FontAwesomeIcon icon={faUser} />
                            </NavLink>
                        </span>

                    </>}

                    {user && <>

                        <span>
                            <NavLink to="/login" onClick={() => {
                                logout();
                                closeMobileNavbar();
                            }}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </NavLink>
                        </span>

                        {user.role === 2 && <>

                            <span>
                                <NavLink to="/admin" style={{ color: "#a74337" }} onClick={closeMobileNavbar}>
                                    <FontAwesomeIcon icon={faGear} />
                                </NavLink>
                            </span>

                        </>}

                        <span>
                            <NavLink to="/profile">
                                <FontAwesomeIcon icon={faUserPen} />
                            </NavLink>
                        </span>

                    </>}

                    <span>
                        <NavLink onClick={closeMobileNavbar} to="/search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </NavLink>
                    </span>
                </div>

                <NavLink onClick={closeMobileNavbar} to="/products/new">new in</NavLink>
                <NavLink onClick={closeMobileNavbar} to="/products/men">men</NavLink>
                <NavLink onClick={closeMobileNavbar} to="/products/women">women</NavLink>
                <NavLink onClick={closeMobileNavbar} to="/products/boys">boys</NavLink>
                <NavLink onClick={closeMobileNavbar} to="/products/girls">girls</NavLink>
                <NavLink onClick={closeMobileNavbar} to="/products/sale">sale</NavLink>
                <NavLink onClick={closeMobileNavbar} to="/products/brands">brands</NavLink>

            </div>

        </div >
    );
}

export default Menu;