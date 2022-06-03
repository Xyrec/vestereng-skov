// Import af Link fra react-router, så vi kan linke til absolute stier på en lettere måde
import { Link } from "react-router-dom";
// Import af billeder der skal bruges på siden
import skoven from "./img/udforsk_skoven.webp";
import sport from "./img/sportsgrene.webp";
import udlej from "./img/udlejning.webp";

export default function ReadMore(props) {
    return (
        <section className="py-5" id="mere">
            <div className="container px-3 my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <div className="text-center">
                            <h2 className="fw-bolder text-success">Lær mere om skoven</h2>
                            <p className="lead fw-normal mb-5">Skoven har mange flere seværdigheder end man lige skulle tro. Her kan du komme i dybden i skoven og lære hvad man kan finde.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-5">
                        <div className="card h-100 shadow">
                            <img className="card-img-top" src={skoven} alt="Bunker i Vestereng Skov" /> {/* Brug af importeret billede i React */}
                            <div className="card-body p-4">
                                <Link className="text-decoration-none link-dark stretched-link" to="/om-skoven"> {/* Brug af Link, læg mærke til man bruger "to" istedet for "href" */}
                                    <h5 className="card-title mb-3">Udforsk skoven</h5>
                                </Link>
                                <p className="card-text mb-0">Kom ud i skoven og få et interessant indblik i Aarhus' historie.</p>
                                <div className="text-center">
                                    <button className="btn btn-outline-dark btn-md px-4 mt-2 py-2">Læs mere</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <div className="card h-100 shadow">
                            <img className="card-img-top" src={sport} alt="Disc golf mål i Vestereng Skov" />
                            <div className="card-body p-4">
                                <Link className="text-decoration-none link-dark stretched-link" to="/aktiviteter">
                                    <h5 className="card-title mb-3">Dyrk idræt</h5>
                                </Link>
                                <p className="card-text mb-0">Det er muligt at udøve overraskende mange unikke sportsgrene i skoven. </p>
                                <div className="text-center">
                                    <button className="btn btn-outline-dark btn-md px-4 mt-2 py-2">Læs mere</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <div className="card h-100 shadow">
                            <img className="card-img-top" src={udlej} alt="Shelter og bålplads ved Vestereng Skov" />
                            <div className="card-body p-4">
                                <Link className="text-decoration-none link-dark stretched-link" to="/udlejning">
                                    <h5 className="card-title mb-3">Udlejning</h5>
                                </Link>
                                <p className="card-text mb-0">Vidste du at det er muligt at leje shelteren ude i skoven, helt gratis?</p>
                                <div className="text-center">
                                    <button className="btn btn-outline-dark btn-md px-4 mt-2 py-2">Læs mere</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}