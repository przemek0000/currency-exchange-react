import { useState, useEffect } from "react";
import { StyledDate } from "./styled";

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
        <StyledDate>
            Dzisiaj jest
            {" "}
            {date.toLocaleDateString(undefined, dateOptions)}
            {date.toLocaleTimeString(undefined, timeOptions)}
        </StyledDate>
    )
}

export default FullDate;