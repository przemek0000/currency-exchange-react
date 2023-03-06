import { useState, useEffect } from "react";

const saveLocalStorage = async (data) => {
    localStorage.setItem("data", JSON.stringify(data))
}

const getData = async () => {
    try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        await saveLocalStorage(data);
        return data;
    } catch (error) {
        console.error("Ups, sprawdź połączenie z internetem lub serwer chwilowo niedostępny :(");
    }
}

const useNetworkData = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || {})
    
    useEffect(() => {
        if (!localStorage.getItem("data")) {
            
            const promiseData = getData();
            setData(promiseData)
        }
        // return () => {
        //     localStorage.removeItem("data");
        // }
    }, [])
    const {base, date, rates} = data;
    return {base, date, rates}
}

export default useNetworkData;