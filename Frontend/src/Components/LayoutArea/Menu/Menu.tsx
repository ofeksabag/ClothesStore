import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import websiteService from "../../../Services/WebsiteService";
import notify from "../../../Utils/Notify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import "./Menu.css";
import SubcategoryModel from "../../../Models/SubcategoryModel";
import productService from "../../../Services/ProductService";

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

    const [matches, setMatches] = useState(window.matchMedia("(min-width: 800px)").matches);

    useEffect(() => {
        window
            .matchMedia("(min-width: 800px)")
            .addEventListener('change', e => setMatches(e.matches));

        matches && setMobileNavbar(false);

    }, [matches]);

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
                    <span>
                        <NavLink to="/login">
                            <FontAwesomeIcon icon={faUser} />
                        </NavLink>
                    </span>
                    <span>
                        <NavLink to="/search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </NavLink>
                    </span>
                </div>

                <NavLink to="/brands">brands</NavLink>
                <NavLink to="/sale">sale</NavLink>
                <div className="Dropdown">
                    <NavLink to="/girls">girls</NavLink>
                    <div className="DropdownContent">
                        {girlSubcategories.map(s => <NavLink key={s.categoryName + "/" + s.subcategoryName} to={"/products/" + s.categoryName + "/" + s.subcategoryName}>{s.subcategoryName}</NavLink>)}
                    </div>
                </div>
                <div className="Dropdown">
                    <NavLink to="/boys">boys</NavLink>
                    <div className="DropdownContent">
                        {boySubcategories.map(s => <NavLink key={s.categoryName + "/" + s.subcategoryName} to={"/products/" + s.categoryName + "/" + s.subcategoryName}>{s.subcategoryName}</NavLink>)}
                    </div>
                </div>
                <div className="Dropdown">
                    <NavLink to="/women">women</NavLink>
                    <div className="DropdownContent">
                        {womenSubcategories.slice(0, 7).map(s => <NavLink key={s.categoryName + "/" + s.subcategoryName} to={"/products/" + s.categoryName + "/" + s.subcategoryName}>{s.subcategoryName}</NavLink>)}
                        <NavLink to="/products/women">...</NavLink>
                    </div>
                </div>
                <div className="Dropdown">
                    <NavLink to="/men">men</NavLink>
                    <div className="DropdownContent">
                        {menSubcategories.slice(0, 7).map(s => <NavLink key={s.categoryName + "/" + s.subcategoryName} to={"/products/" + s.categoryName + "/" + s.subcategoryName}>{s.subcategoryName}</NavLink>)}
                        <NavLink to="/products/men">...</NavLink>
                    </div>
                </div>
                <NavLink to="/new">new in</NavLink>

            </div>

            <div className="Navbar_Mobile" style={{ display: mobileNavbar ? 'block' : 'none' }}>

                <div className="Tools">
                    <span>
                        <NavLink to="/login">
                            <FontAwesomeIcon icon={faUser} />
                        </NavLink>
                    </span>
                    <span>
                        <NavLink to="/search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </NavLink>
                    </span>
                </div>

                <NavLink to="/new">new in</NavLink>
                <NavLink to="/men">men</NavLink>
                <NavLink to="/women">women</NavLink>
                <NavLink to="/boys">boys</NavLink>
                <NavLink to="/girls">girls</NavLink>
                <NavLink to="/sale">sale</NavLink>
                <NavLink to="/brands">brands</NavLink>

            </div>

        </div >
    );
}

export default Menu;
