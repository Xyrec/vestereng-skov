import { useState } from "react"; // Importerer to standard React hooks

import DatePicker from "react-datepicker"; // Importerer et tredjeparts React Library, en datepicker
import "react-datepicker/dist/react-datepicker.css"; // Importerer den relevante CSS til datepicker
import da from "date-fns/locale/da"; // Importerer det danske sprog til datepicker

import ReadMore from "./ReadMore"; // Henter ReadMore componentet

import { auth, bookingsRef } from "./firebase-config"; // Importerer auth og bookingsRef fra firebase-config
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"; // Importerer forskellige funktioner fra firebase/auth
import { addDoc } from "firebase/firestore"; // Importerer funktioner til at tilføje og hente dokumenter fra firestore

function Login(props) {
    // to useStates som gemmer brugerens indtastede email og password
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    // async funktion der laver en bruger med given email og password
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, userEmail, userPassword) // await venter på at funktionen får svar fra firebase
            console.log(user)
        } catch (error) { // Fanger eventuelle fejl beskeder
            console.log(error.message) // Printer fejl til console
        }
    }

    // async funktion der logger en bruger ind med given email og password
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, userEmail, userPassword) // await venter på at funktionen får svar fra firebase
            console.log(user)
        } catch (error) { // Fanger eventuelle fejl beskeder
            console.log(error.message) // Printer fejl til console
        }
    }

    return (
        <>
            <h1 className="text-center fw-bolder mb-4">Log ind for at bestille tid</h1>
            <div className="row justify-content-center">
                <form className="row col-lg-4 form-inline justify-content-center" onSubmit={(event) => { event.preventDefault() }}> {/* Hvis der trykkes enter/submittes, stoppes det med preventDefault() */}
                    <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">Email adresse</label>
                        <input type="email" className="form-control" id="userEmail" onChange={(event) => { setUserEmail(event.target.value) }} /> {/* onChange event der gemmer data i useState der indtastes i feltet */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="userPassword" onChange={(event) => { setUserPassword(event.target.value) }} /> {/* onChange event der gemmer data i useState der indtastes i feltet */}
                    </div>
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <button onClick={login} type="submit" className="col-auto btn btn-success btn-md px-4 mt-2 py-2">Log ind</button> {/* Hvis der trykkes på knappen, starter login async funktionen (man kan også trykke enter, pga. type="submit") */}
                        <button onClick={register} className="col-auto btn btn-secondary btn-md px-4 mt-2 py-2">Registrer bruger</button> {/* Hvis der trykkes på knappen, starter register async funktionen */}
                    </div>
                </form>
            </div>
        </>
    )
}

function Booking(params) {
    // En masse useStates til at gemme brugerens navn, valgte start og slut datoer, og en state til at tjekke om brugeren har booket
    const [userName, setUserName] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [hasBooked, setHasBooked] = useState(false);

    // async funktion der logger en bruger ud
    const logout = async () => {
        try {
            const user = await signOut(auth) // await venter på at funktionen får svar fra firebase
            console.log(user)
        } catch (error) { // Fanger eventuelle fejl beskeder
            console.log(error.message) // Printer fejl til console
        }
    }

    // async funktion der gemmer booking data i firebase
    const bookingHandler = async () => {
        if (startDate && endDate && userName) { // Hvis startDate, endDate og userName har data
            let bookingData = { // Gemmer alle data i "bookingData" objekt
                name: userName,
                start: startDate,
                end: endDate,
                email: auth.currentUser.email // Gemmer også brugerens auth email
            }
            try {
                await addDoc(bookingsRef, bookingData); // await venter på at funktionen får svar fra firebase, tilføjer et nyt dokument til bookings databasen, med ovenstående data
                setHasBooked(true); // Når dokumentet er gemt, sættes hasBooked til true, så brugeren ser kvitteringssiden
            } catch (error) { // Fanger eventuelle fejl beskeder
                console.log(error.message) // Printer fejl til console
            }
        }
    }

    return (
        <>
            <div className="text-center">
                <h2>Logget ind som: {auth.currentUser.email}</h2> {/* Indsætter brugerens email */}
                <button onClick={logout} className="col-auto btn btn-warning btn-md px-4 mt-2 py-2">Log ud</button> {/* Log ud knap der kalder logout async funktionen */}
            </div>
            {/* Conditional rendering, hvis has hasBooked er true, vises kvitteringssiden, hvis ikke, vises bookingsiden */}
            {hasBooked ?
                <> 
                    <div className="container px-3">
                        <div className="row text-center mt-4 pt-1">
                            <h3>Tak for din bestilling!</h3>
                            <h4 className="mt-4 fw-bolder">Kvittering:</h4>
                            <p>Navn: {userName}<br /> {/* En lille kvitteringsside, der viser booking detaljerne */}
                                E-mail: {auth.currentUser.email}<br />
                                Start: {startDate.toString()}<br />
                                Slut: {endDate.toString()}</p>
                        </div>
                    </div>
                </>
                :
                <>
                    <form className="container px-3" onSubmit={(event) => { event.preventDefault() }}> {/* Hvis der trykkes enter/submittes, stoppes det med preventDefault() */}
                        <div className="row align-items-center justify-content-center flex-column flex-sm-row mt-4">
                            <div className="col-auto text-start">
                                <h5>Start dato</h5>
                                <DatePicker locale={da}
                                    className="shadow-sm form-control"
                                    dateFormat="dd/MM/yyyy, HH:mm"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    showTimeSelect
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={new Date()}
                                    required /> {/* DatePicker, med en masse forskellige attributter som ændrer på dens funktionalitet - med "required" så brugeren ikke kan booke en tid uden tid valgt */}
                            </div>
                            <div className="col-auto text-end">
                                <h5>Slut dato</h5>
                                <DatePicker locale={da}
                                    className="shadow-sm form-control"
                                    dateFormat="dd/MM/yyyy, HH:mm"
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    showTimeSelect
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    required /> {/* DatePicker, med en masse forskellige attributter som ændrer på dens funktionalitet - med "required" så brugeren ikke kan booke en tid uden tid valgt */}
                            </div>
                        </div>
                        <div className="row align-items-center flex-column">
                            <div className="text-center mt-4 col-auto col-lg-3">
                                <h5 htmlFor="userName" className="form-label">Navn</h5>
                                <input type="name" className="shadow-sm form-control col-lg-4" id="userName" onChange={(event) => { setUserName(event.target.value) }} required /> {/* onChange event der gemmer data i useState der indtastes i feltet */}
                                <button type="submit" className="btn btn-success btn-lg px-4 mt-4" onClick={bookingHandler}>Book nu</button> {/* Hvis der trykkes på knappen, starter bookingHandler async funktionen */}
                            </div>
                        </div>
                    </form>
                </>
            }

        </>)
}

export default function Shelter(props) {
    const [isAuth, setIsAuth] = useState(null); // useState til at tjekke om bruger er logget ind

    onAuthStateChanged(auth, (user) => {
        if (user) { // Hvis bruger eksisterer
            setIsAuth(user) // Sæt bruger som at være logget ind
        } else {
            setIsAuth(null)
        }
    });


    return (
        <>
            <header className="bg-dark bg-img">
                <div className="container px-3">
                    <div className="row align-items-center justify-content-center">
                        <div className="my-5 text-center text-shadow">
                            <h1 className="display-5 fw-bolder text-white py-1">Shelter Booking</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-light py-5">
                <div className="container">
                    <div className="col-lg-12">
                        {/* Conditional rendering: */}
                        {isAuth ? ( // Hvis brugeren er logget ind
                            <>
                                <Booking /> {/* Vis booking siden */}
                            </>
                        ) : ( // ellers, (hvis brugeren ikke er logget ind)
                            <>
                                <Login /> {/* Vis login siden */}
                            </>)}
                    </div>
                </div>
            </div>
            <ReadMore />
        </>
    )
}
