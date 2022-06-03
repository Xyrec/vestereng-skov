// Import af Link fra react-router, så vi kan linke til absolute stier på en lettere måde
import { Link } from "react-router-dom";
// Import af billeder der skal bruges på siden
import Quotes from "./Quotes";
import ReadMore from "./ReadMore";
import background from "./img/vestereng_udlejning.png"

export default function Udlejning(props) {
    return (
        <>
            <header className="bg-dark py-5 bg-img" style={{ backgroundImage: `url(${background})`, backgroundPosition: `top center` }}> {/* React inline CSS med importeret billede */}
                <div className="container px-3 py-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="my-5 text-center text-shadow">
                            <h1 className="display-5 fw-bolder text-white mb-2 pt-5">Udlejning</h1>
                            <p className="lead fw-normal text-white mb-4 pb-5">Leje af shelteren nær Vestereng Skov</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="text-center fw-bolder mb-4">Praktisk information</h1>
                        <p className="fs-5 mb-4">Shelteren ligger placeret på et åbent græsareal lige ved skoven på Vestereng. Der er gode muligheder for forskellige aktiviteter på det store græsareal. Foran shelteren er en bålplads, som gerne må bruges når man har lejet shelteren. Shelteren ligger tæt opad cykelstien der går langs skoven.</p>
                        <p className="fs-5 mb-0">•	Når du booker shelteren, har du automatisk booket den tilhørende bålplads.</p>
                        <p className="fs-5 mb-0">•	Du skal selv medbringe brænde hjemmefra.</p>
                        <p className="fs-5 mb-0">•	Du må gerne samle tørre grene i skovbunden.</p>
                        <p className="fs-5 mb-0">•	Der er ingen vand- eller toiletfaciliteter ved shelteren.</p>
                        <p className="fs-5 mb-0">•	Ved siden af shelteren står et affaldsstativ.</p>
                        <p className="fs-5 mb-0">•	Der er parkeringsmuligheder ved indkørslen til Vestereng fra Bodøvej.</p>
                        <p className="fs-5 mb-0">•	Ryd op efter jer selv, og sørg for at bål er slukket når i forlader stedet.</p>
                        <div className="text-center mt-4">
                            <Link className="btn btn-success btn-lg px-4" to="/udlejning/shelter">Start booking</Link> {/* Brug af Link, læg mærke til man bruger "to" istedet for "href" */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Importerede components bruges her */}
            <Quotes />
            <ReadMore />
        </>
    )
}