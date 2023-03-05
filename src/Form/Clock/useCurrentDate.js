import { useState, useEffect } from "react";

const getCurrencies = async () => {
    try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        localStorage.setItem("data", JSON.stringify(data))
    } catch(error) {
        console.error("Ups, sprawdź połączenie z internetem lub serwer chwilowo niedostępny :(");
    }
}

const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || {})

    useEffect(() => {
        if (!localStorage.getItem("data")) {
            getCurrencies();
        }
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(date => date = new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return date;
}

export default useCurrentDate;