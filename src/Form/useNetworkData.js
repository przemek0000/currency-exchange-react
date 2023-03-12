import { useState, useEffect } from "react";

const URL = "https://api.exchangerate.host/latest?base=PLN";

const useNetworkData = () => {
    const [data, setData] = useState({
        status: "loading",
        base: undefined,
        date: undefined,
        rates: undefined
    });

    useEffect(() => {

        const getNetworkData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { base, date, rates } = await response.json();
 
                setData({status: "success", base, date, rates});
            } catch (error) {
                console.log(error)
                console.log("Sprawdź połączenie z internetem, lub serwer chwilowo niedostępny. Proszę spróbować później.")

                setData(prevData => prevData = {...prevData, status: "error"});
            }
        }

        setTimeout(() => {
            getNetworkData();
        }, 1000);
    }, [])
    return data;
}

export default useNetworkData;