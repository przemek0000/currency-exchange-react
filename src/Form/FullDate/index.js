import { useState, useEffect } from "react";
import "./style.css"

const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
};

const FullDate = () => {
    const [date, setDate] = useState(new Date().toLocaleDateString(undefined, dateOptions));
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(date => date = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }));
            setTime(time => time = new Date().toLocaleTimeString());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        < p className="date" >
            Dzisiaj jest {date}, {time}
        </p >
    )
}

export default FullDate;