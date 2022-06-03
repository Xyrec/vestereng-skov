import Quotes from "./Quotes";
import ReadMore from "./ReadMore";
import background from "./img/vestereng_løber.png";
import beachvolley from "./img/vestereng_beachvolley.png";
import discgolf from "./img/vestereng_discgolf.png";
import bmxpark from "./img/vestereng_bmxpark.jpg";

export default function Aktiviteter(props) {
    return (
        <>
            <header className="bg-dark py-5 bg-img" style={{ backgroundImage: `url(${background})` }}>
                <div className="container px-3 py-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="my-5 text-center text-shadow">
                            <h1 className="display-5 fw-bolder text-white mb-2 pt-5">Aktiviteter</h1>
                            <p className="lead fw-normal text-white mb-4 pb-5">Mere end bare fodbold!</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="text-center fw-bolder mb-4">Beach Volley</h1>
                        <img className="img-fluid rounded mb-4 shadow" src={beachvolley} alt="Beach Volley i Vestereng Skov" />
                        <p className="fs-5 mb-4">Midt inde i Vestereng kan du finde et areal, med det blødeste fine sand. Det er her, du kan finde 19 beach volley baner, der tilhører Aarhus Beachvolley Club. Her bliver der trænet, afholdt ligaer, og beachtourstævner. På pladsen kan man også finde terrasser til at observere, samt toiletter, udendørs vandhaner og andet forskelligt udstyr til Beach Volley. Der er oftest aktivitet om sommeren, og alle er velkomne til at deltage. Læs mere på <a href="https://aarhusbeachvolley.dk">aarhusbeachvolley.dk</a>.</p>
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="text-center fw-bolder mb-4">Disc Golf</h1>
                            <img className="img-fluid rounded mb-4 shadow" src={discgolf} alt="Disc golf mål 1 i Vestereng Skov" />
                            <p className="fs-5 mb-4">Når man går en tur i gennem skoven, kan man sommetider få øje på disse disc golf mål. Det kan være svært at se hvor de forskellige baner til målene er, men hvis man finder det første mål, kan man pludselig se hvordan skoven er ryddet hen til start stedet - det samme gælder for de følgende mål! Disc golf i Vestereng Skoven kan varmt anbefales, da det er en super sjov aktivitet for både familie, venner og sportsudøvere.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="text-center fw-bolder mb-4">BMX Dirt Jump Park</h1>
                        <img className="img-fluid rounded mb-4 shadow" src={bmxpark} alt="BMX Dirt Jump Park i Vestereng" />
                        <p className="fs-5 mb-4">Ejer du en BMX-cykel og leder efter dit næste spot at få en masse air-time? Så er BMX Dirt Jump Park i Vestereng det perfekte sted at udøve denne sportsgren - med en masse ramper, hills og turns, kan man virkelig få adrenalinen til at pumpe. Der findes både baner til begyndere og de øvede, så alle er velkomne.</p>
                    </div>
                </div>
            </div>
            <Quotes />
            <ReadMore />
        </>
    )
}
