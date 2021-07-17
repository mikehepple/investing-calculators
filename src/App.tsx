import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inputs from "./components/annualized-return/ARInputs";
import {Container, Navbar} from "react-bootstrap";
import ARCalculator from "./components/annualized-return/ARCalculator";

function App() {
    return (
        <div className="App">

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Investing Calculators by fizzbuzz
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Container className={"bg-light p-3 mt-4"}>

                <h1 className={"mb-3"}>Annualized Return Calculator</h1>

                <ARCalculator/>
            </Container>
        </div>
    );
}

export default App;
