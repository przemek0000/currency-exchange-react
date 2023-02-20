import './App.css';
import Container from "./Container"
import Header from "./Header";
import Form from "./Form";

function App() {
  return (
    <Container>
      <Header title={" Kalkulator walut"} />
      <Form />
    </Container>
  );
}

export default App;
