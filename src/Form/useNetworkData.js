import { useState, useEffect } from "react";

const useNetworkData = () => {
    const [data, setData] = useState({
        connected: false,
        base: undefined,
        date: undefined,
        rates: undefined
    });

    useEffect(() => {
        const URL = "https://api.exchangerate.host/latest?base=PLN";

        const getNetworkData = async () => {
            const response = await fetch(URL);
            const { base, date, rates } = await response.json();

            const updatedData = {
                connected: false, base, date, rates
            };

            setData(updatedData);
        }

        setTimeout(() => {
            getNetworkData();
        }, 500);
    }, [])
    return data;
}

export default useNetworkData;