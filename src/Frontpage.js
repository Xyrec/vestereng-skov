// Import af Link fra react-router, så vi kan linke til absolute stier på en lettere måde
import { Link } from "react-router-dom";
// Import af custom components
import Quotes from './Quotes';
import ReadMore from './ReadMore';
// Import af billeder der skal bruges på siden
import background from "./img/vestereng_bænk.JPG"
import græsmark from "./img/vestereng_græsmark.jpg"

export default function Frontpage(props) {
    return (
        <>
            <header className="bg-dark py-5 bg-img" style={{ backgroundImage: `url(${background})` }}> {/* React inline CSS med importeret billede */}
                <div className="px-3 py-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="my-5 text-center">
                            <h1 className="display-5 fw-bolder text-white mb-2 pt-5 text-shadow">Vestereng Skov</h1>
                            <p className="lead fw-normal text-white text-shadow">Den lille grønne lunge i Aarhus N</p>
                            <div className="mb-4 pb-5">
                                <a className="btn btn-success btn-lg px-4 mx-2" href="#mere">Læs mere</a>
                                <Link className="btn btn-outline-light btn-lg px-4 mx-2" to="/udlejning">Udlejning</Link> {/* Brug af Link, læg mærke til man bruger "to" istedet for "href" */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="text-center fw-bolder mb-4">Velkommen til Vestereng</h1>
                        <img className="img-fluid rounded mb-4 shadow" src={græsmark} width="900" alt="En græsmark nær Vestereng Skov" />
                        <p className="fs-5 mb-4">Vestereng er et spændende og alsidigt naturomåde på næsten 60 hektar, i midten af Aarhus N, syd for Skejby. Området er et gammelt militært øvelsesterræn, hvilket de mange bunkere og voldanlæg lægger vidne til. Vestereng består af både åbne græsarealer og gammel løvskov, med mange kilometers stier som kommer vidt omkring. Skoven bliver nu brugt til mange forskellige sportsgrene og hobbyer - alt lige fra beach volley og BMX til rollespil og trailløb. Du er selvfølgelig velkommen til bare at gå en tur og nyde naturen - og hvis du gør, hold udkig efter ramsløg og æbletræerne, da du gerne må plukke dem!</p>
                    </div>
                </div>
            </div>
            {/* Importerede components bruges her */}
            <Quotes />
            <ReadMore />
        </>
    )
}
