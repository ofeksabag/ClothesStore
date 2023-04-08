import "./Home.css";
import banner from "../../../Assets/Images/banner.jpg";
import { NavLink } from "react-router-dom";

function Home(): JSX.Element {

    return (
        <div className="Home">

			<div className="Banner" style={{backgroundImage: `url(${banner})`}}>
                <span className="BannerText">
                    <p>
                        feels like spring
                    </p>
                    <p>
                        קולקציית החגים החדשה
                    </p>
                    <NavLink to="/new"><span>קנו עכשיו</span></NavLink>
                </span>
            </div>

            <h3>חדשים על המדף</h3>

        </div>
    );
}

export default Home;
