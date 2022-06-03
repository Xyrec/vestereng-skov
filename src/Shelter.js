import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import da from "date-fns/locale/da";

import ReadMore from "./ReadMore";
import { auth, bookingsRef } from "./firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, getDocs } from "firebase/firestore";

function Login(props) {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, userEmail, userPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, userEmail, userPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <h1 className="text-center fw-bolder mb-4">Log ind for at bestille tid</h1>
            <div className="row justify-content-center">
                <form className="row col-lg-4 form-inline justify-content-center" onSubmit={(event) => { event.preventDefault() }}>
                    <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">Email adresse</label>
                        <input type="email" className="form-control" id="userEmail" onChange={(event) => { setUserEmail(event.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="userPassword" onChange={(event) => { setUserPassword(event.target.value) }} />
                    </div>
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <button onClick={login} type="submit" className="col-auto btn btn-success btn-md px-4 mt-2 py-2">Log ind</button>
                        <button onClick={register} className="col-auto btn btn-secondary btn-md px-4 mt-2 py-2">Registrer bruger</button>
                    </div>
                </form>
            </div>
        </>
    )
}

function Booking(params) {
    const [userName, setUserName] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [hasBooked, setHasBooked] = useState(false);

    const logout = async () => {
        try {
            const user = await signOut(auth)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const bookingHandler = async () => {
        if (startDate && endDate && userName) {
            let bookingData = {
                name: userName,
                start: startDate,
                end: endDate,
                email: auth.currentUser.email
            }
            try {
                await addDoc(bookingsRef, bookingData);
                setHasBooked(true);
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDocs(bookingsRef)
            data.forEach((doc) => {
                console.log(doc.data());
            })
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="text-center">
                <h2>Logget ind som: {auth.currentUser.email}</h2>
                <button onClick={logout} className="col-auto btn btn-warning btn-md px-4 mt-2 py-2">Log ud</button>
            </div>
            {hasBooked ?
                <>
                    <div className="container px-3">
                        <div className="row text-center mt-4 pt-1">
                            <h3>Tak for din bestilling!</h3>
                            <h4 className="mt-4 fw-bolder">Kvittering:</h4>
                            <p>Navn: {userName}<br />
                                E-mail: {auth.currentUser.email}<br />
                                Start: {startDate.toString()}<br />
                                Slut: {endDate.toString()}</p>
                        </div>
                    </div>
                </>
                :
                <>
                    <form className="container px-3" onSubmit={(event) => { event.preventDefault() }}>
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
                                    required />
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
                                    required />
                            </div>
                        </div>
                        <div className="row align-items-center flex-column">
                            <div className="text-center mt-4 col-auto col-lg-3">
                                <h5 htmlFor="userName" className="form-label">Navn</h5>
                                <input type="name" className="shadow-sm form-control col-lg-4" id="userName" onChange={(event) => { setUserName(event.target.value) }} required />
                                <button type="submit" className="btn btn-success btn-lg px-4 mt-4" onClick={bookingHandler}>Book nu</button>
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
        if (user) {
            setIsAuth(user)
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
                        {isAuth ? ( // Hvis brugeren er logget ind
                            <>
                                <Booking />
                            </>
                        ) : ( // Hvis brugeren ikke er logget ind
                            <>
                                <Login />
                            </>)}
                    </div>
                </div>
            </div>
            <ReadMore />
        </>
    )
}
