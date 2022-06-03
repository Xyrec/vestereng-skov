import { getDocs } from "firebase/firestore"; // Importerer getDocs, så vi kan hente data fra firestore databasen
import { quotesRef } from "./firebase-config"; // Importerer quotesRef fra firebase-config, så man lettere kan specificere at der skal hentes data fra "quotes" i databasen
import { useEffect, useState } from "react"; // Importerer to standard React hooks

export default function Quotes(props) {
    const [quote, setQuote] = useState({ name: "loading", profession: "loading", quote: "loading" }) // useState hook, re-renderer siden, når nyt data indsættes i "quote"

    useEffect(() => { // useEffect, en hook som kører når ...
        let quotes = []; // Lav quotes til et tomt array
        const fetchData = async () => { // async funktion, så vi kan vente
            const data = await getDocs(quotesRef) // på svar fra firebase, med getDocs og quotesRef
            data.forEach((doc) => { // For hvert dokument i databasen
                quotes.push(doc.data()) // Gem det i quotes arrayet
            })
            let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Vælger et tilfældigt element i quotes, og gemmer det i randomQuote
            setQuote({name: randomQuote.name, profession: randomQuote.profession, quote: randomQuote.quote}) // Gemmer det tilfældige citat i "quote" useState
        }
        fetchData() // Kører ovenstående funktion
    }, []) // ... når dependency ændrer sig, i dette tilfælde er det tomt, hvilket betyder at useEffect kun kører på første render af siden

    return (
        <div className="py-5 bg-light">
            <div className="container px-3">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-7">
                        <div className="text-center">
                            <div className="fs-4 mb-4 fst-italic">"{quote.quote}"</div> {/* Her og nedenstående indsætter vi data fra "quote" useState */}
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="fw-bold">{quote.name}<span className="fw-bold text-success mx-1">/</span>{quote.profession}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}