// Import af Link fra react-router, så vi kan linke til absolute stier på en lettere måde
import { Link } from "react-router-dom";
// Import af billede der skal bruges på siden
import logo from "./img/logo.png"

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-success">
            <div className="container px-3">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Vestereng Skov Logo" className="d-inline-block" width="32" height="32" /> {/* Indsætter billede fra import med React */}
                    &nbsp;Vestereng Skov
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/">Forside</Link></li> {/* Brug af Link, læg mærke til man bruger "to" istedet for "href" */}
                        <li className="nav-item"><Link className="nav-link" to="/om-skoven">Om skoven</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/aktiviteter">Aktiviteter</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/udlejning">Udlejning</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
