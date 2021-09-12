import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
// Imports components
import NavBarComponent from "./components/NavBar/index";

// imports pages
import Home from "./pages/Home";
import SaibaMais from "./pages/SaibaMais";
import Contato from "./pages/Contato";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Switch>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/infos" component={SaibaMais} />
            <Route exact path="/contato" component={Contato} />
          </Container>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
