import "./App.css";
import Container from "./Container"
import Header from "./Header";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("💰")

  const changeMoney = (money, currency) => {
    switch (currency) {
      case "EUR":
        return (money * 0.21).toFixed(2) + ` ${currency}`;
      case "GBP":
        return (money * 0.19).toFixed(2) + ` ${currency}`;
      case "USD":
        return (money * 0.23).toFixed(2) + ` ${currency}`;
      default:
        return;
    }
  }

  const calculateResult = (money, currency) => (
    setResult(changeMoney(money, currency))
  )

  return (
    <Container>
      <Header title={" Kalkulator walut"} />
      <Form calculateResult={calculateResult} />
      <div className="result">
        <textarea className="resultArea"
          disabled
          cols={16}
          rows={2}
          value={result}
          onChange={(event) => setResult(event.target.value)}
        />
      </div>
    </Container>
  );
}

export default App;
