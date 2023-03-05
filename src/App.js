import "./App.css";
import Container from "./Container"
import Header from "./Header";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("$$$")

  const changeMoney = (value, currency) => {

  }

  const calculateResult = (value, currency) => (
    setResult(changeMoney(value, currency))
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
