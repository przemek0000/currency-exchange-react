import { useState, useEffect } from "react";
import "./style.css";

const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
};

const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

const FullDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(date => date = new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        < p className="date" >
            Dzisiaj jest
            {" "}
            {date.toLocaleDateString(undefined, dateOptions)}
            {", "} {/* new Data() doesent use "," to separate date and time */}
            {date.toLocaleTimeString(undefined, timeOptions)}
        </p >
    )
}

export default FullDate;