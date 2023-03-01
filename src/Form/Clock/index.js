import { StyledDate } from "./styled";
import useCurrentDate from "./useCurrentDate";

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

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledDate>
            Dzisiaj jest
            {" "}
            {date.toLocaleDateString(undefined, dateOptions)}
            {" "}
            {date.toLocaleTimeString(undefined, timeOptions)}
        </StyledDate>
    )
}

export default Clock;