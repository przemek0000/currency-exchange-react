import { useState } from "react";
import Clock from "./Clock";
import useNetworkData from "./useNetworkData";
import { StyledError, StyledFieldset, StyledSpan, StyledSelect, StyledInput, StyledButton, StyledLegend, StyledDate } from "./styled";

const Form = ({ calculateResult }) => {
    const min = 0;

    const [value, setValue] = useState('');
    const [currency, setCurrency] = useState("USD");
    const { connected, base, date, rates } = useNetworkData();

    const setMinCurrency = ({ target }) => {
        const value = Math.max(min, Number(target.value))
        setValue(value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(value, rates[currency]);
    }

    return (
        <form onSubmit={onFormSubmit}>
            {connected === false ?
                <StyledError>
                    Pobieranie danych...
                </StyledError> :
                <StyledFieldset>
                    <StyledLegend>
                        {base}
                    </StyledLegend>
                    <Clock />
                    <p>
                        <label>
                            <StyledSpan>
                                Wybierz walute:
                            </StyledSpan>
                            <StyledSelect
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}>
                                {Object.keys(rates).map(worldCurrency => (
                                    <option key={worldCurrency} value={worldCurrency}>
                                        {worldCurrency}
                                    </option>))}
                            </StyledSelect>
                        </label>
                    </p>
                    <p>
                        <label>
                            <StyledSpan>
                                Wprowadź wartość:
                            </StyledSpan>
                            <StyledInput
                                name="input"
                                value={value}
                                onChange={setMinCurrency}
                                type="number"
                                min="0"
                                step="any"
                                placeholder="Wprowadź wartość"
                                autoFocus />
                        </label>
                    </p>
                    <p>
                        <StyledButton name="button">Przelicz</StyledButton>
                    </p>
                    <StyledDate>
                        Kurs walut pobrany z https://exchangerate.host/ <br></br>Aktualny dzień: {date}
                    </StyledDate>
                </StyledFieldset>
            }
        </form>
    )
}

export default Form;