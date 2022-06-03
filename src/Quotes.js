import { getDocs } from "firebase/firestore"
import { quotesRef } from "./firebase-config";
import { useEffect, useState } from "react"

export default function Quotes(props) {
    const [quote, setQuote] = useState({ name: "loading", profession: "loading", quote: "loading" })

    useEffect(() => {
        let quotes = [];
        const fetchData = async () => {
            const data = await getDocs(quotesRef)
            data.forEach((doc) => {
                quotes.push(doc.data())
            })
            let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote({name: randomQuote.name, profession: randomQuote.profession, quote: randomQuote.quote})
        }
        fetchData()
    }, [])

    return (
        <div className="py-5 bg-light">
            <div className="container px-3">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-7">
                        <div className="text-center">
                            <div className="fs-4 mb-4 fst-italic">"{quote.quote}"</div>
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