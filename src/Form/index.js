import { useState } from "react";
import worldCurrencies from "../worldCurrencies";
import FullDate from "./FullDate";
import { StyledFieldset, StyledSpan, StyledSelect, StyledInput, StyledButton, StyledLegend } from "./styled";

const Form = ({ calculateResult }) => {
    const min = 0;

    const [value, setValue] = useState('');
    const [currency, setCurrency] = useState(worldCurrencies[0].label);

    const setMinCurrency = ({ target }) => {
        const value = Math.max(min, Number(target.value))

        setValue(value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(value, currency);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <StyledFieldset>
                <StyledLegend>
                    PLN
                </StyledLegend>
                <FullDate />
                <p>
                    <label>
                        <StyledSpan>
                            Wybierz walute:
                        </StyledSpan>
                        <StyledSelect
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}>
                            {worldCurrencies.map(worldCurrencie => (
                                <option
                                    key={worldCurrencie.value}
                                    value={worldCurrencie.value}>
                                    {worldCurrencie.label}
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
            </StyledFieldset>
        </form>
    )
}

export default Form;