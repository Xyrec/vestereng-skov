// Import af custom components
import Quotes from "./Quotes";
import ReadMore from "./ReadMore";
// Import af billeder der skal bruges på siden
import background from "./img/vestereng_skov.JPG"
import bunker from "./img/vestereng_bunker.png"
import skydebane from "./img/vestereng_skydebane.png"

export default function Skoven(props) {
    return (
        <>
            <header className="bg-dark py-5 bg-img" style={{ backgroundImage: `url(${background})` }}> {/* React inline CSS med importeret billede */}
                <div className="px-3 py-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="my-5 text-center text-shadow">
                            <h1 className="display-5 fw-bolder text-white mb-2 pt-5">Om skoven</h1>
                            <p className="lead fw-normal text-white mb-4 pb-5">Udforsk skoven og dens historie</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="text-center fw-bolder mb-4">Bunkere</h1>
                            <img className="img-fluid rounded mb-4 shadow" src={bunker} alt="Bunker i Vestereng Skov" />
                            <p className="fs-5 mb-4">Vidste du, at Vestereng og den tilhørende skov var brugt af de nazi-tyske "Kriegsmarine" besættelsesstyrker under 2. verdenskrig? De tyske besættelsesstyrker konstruerede i alt 14 betonbunkere i skoven, 10 af dem til opbevaring og 4 som maskingeværbunkere til forsvar. Alle bunkere eksisterer stadig i dag, og man kan frit udforske dem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="text-center fw-bolder mb-4">Skydebaner</h1>
                        <img className="img-fluid rounded mb-4 shadow" src={skydebane} alt="Nedlagt skydebane nær Vestereng Skov" />
                        <p className="fs-5 mb-4">Efter Danmarks befrielse i 1945, overtog de danske militærstyrker området, og brugte Vestereng som en facilitet til deres militærøvelser. Herunder byggede de skydebaner, som blev brugt i mange år. Efter hjemmeværnet havde brugt området fra 1978-87, blev Vestereng endelig åbnet op til det offentlige, og det er nu muligt at udforske de gamle skydebaner.</p>
                    </div>
                </div>
            </div>
            {/* Importerede components bruges her */}
            <Quotes />
            <ReadMore />
        </>
    )
}
