import { useState, useEffect } from "react";

const useNetworkData = () => {
    const [data, setData] = useState({
        connected: false,
        error: false,
        base: undefined,
        date: undefined,
        rates: undefined
    });

    useEffect(() => {
        const URL = "https://api.exchangerate.host/latest?base=PLN";

        const getNetworkData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { base, date, rates } = await response.json();

                const updatedData = {
                    connected: true, error: false, base, date, rates
                };

                setData(updatedData);
            } catch (error) {
                console.log(error)
                console.log("Sprawdź połączenie z internetem, lub serwer chwilowo niedostępny. Proszę spróbować później.")

                const updatedDataError = { ...data, error: true }
                setData(updatedDataError);
            }
        }

        setTimeout(() => {
            getNetworkData();
        }, 1000);
    }, [])
    return data;
}

export default useNetworkData;