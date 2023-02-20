import "./style.css"
import { useState } from "react";

const Form = () => {
    const min = 0;

    const [money, setMoney] = useState('');
    const [currency, setCurrency] = useState("EUR");

    const setMinNumber = ({ target }) => {
        const money = Math.max(min, Number(target.value))

        setMoney(money);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__title">
                    PLN
                </legend>
                <p>
                    <label>
                        <span className="form__label">
                            Wybierz walute:
                        </span>
                        <select className="form__select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>USD</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__label">
                            Wprowadź wartość:
                        </span>
                        <input className="form__value"
                            name="input"
                            value={money}
                            onChange={setMinNumber}
                            type="number"
                            min="0"
                            step="any"
                            placeholder="Wprowadź wartość"
                            autoFocus />
                    </label>
                </p>
                <p>
                    <button className="form__button" name="button">Przelicz</button>
                </p>
                <div className="form__result">
                    <strong className="form__textResult">N/A</strong>
                </div>
            </fieldset>
        </form>
    )
}

export default Form;