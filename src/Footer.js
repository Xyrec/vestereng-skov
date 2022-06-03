// Import af billede der skal bruges i componentet
import aaklogo from "./img/Aarhus_logo.png"

export default function Footer(props) {
    return (
        <footer className="bg-dark py-4 mt-auto border-top border-success">
            <div className="container px-3">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <div className="small m-0 text-white">Aarhus Kommune © Christoffer L. Larsen 2022</div>
                    </div>
                    <div className="col-auto">
                        <img src={aaklogo} height="32" alt="Aarhus Kommune Logo" />
                    </div>
                    <div className="col-auto">
                        <a className="link-light small" href="https://www.aarhus.dk/">Aarhus Kommune</a>
                        <span className="text-success mx-1">/</span>
                        <a className="link-light small" href="https://friluftslivaarhus.dk/">Friluftsliv Aarhus</a>
                        <span className="text-success mx-1">/</span>
                        <a className="link-light small" href="#!">Kontakt</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
