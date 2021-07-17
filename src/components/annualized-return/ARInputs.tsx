import {Button, Col, Form, Row} from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {FormEvent, useState} from "react";

interface Properties {
    onSubmit: (data: AnnualizedReturnData | undefined) => void
}

export interface AnnualizedReturnData {
    investment: number
    theReturn: number
    days: number
}

export default (p: Properties) => {

    const [validated, setValidated] = useState(false);
    const [investment, setInvestment] = useState<number>(0);
    const [theReturn, setTheReturn] = useState<number>(0);
    const [days, setDays] = useState<number>(0);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        setValidated(true);

        if (form.checkValidity() !== false) {
            p.onSubmit({
                investment: investment,
                theReturn: theReturn,
                days: days
            })
        } else {
            p.onSubmit(undefined);
        }
    };

    return <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Col md>
                    <FloatingLabel controlId={"ar-investment"} label={"Investment ($)"}>
                        <Form.Control type={"number"} placeholder={"100"} min={0} required
                                      onChange={(e) => {
                                          setInvestment(parseFloat(e.target.value))
                                      }}
                        />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId={"ar-return"} label={"Return ($)"}>
                        <Form.Control type={"number"} placeholder={"100"} min={0} required
                                      onChange={(e) => {
                                          setTheReturn(parseFloat(e.target.value))
                                      }}

                        />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId={"ar-days"} label={"Days"}>
                        <Form.Control type={"number"} placeholder={"100"} min={1} step={1} required
                                      onChange={(e) => {
                                          setDays(parseInt(e.target.value))
                                      }}
                        />
                    </FloatingLabel>
                </Col>
                <Col md className="d-grid gap-2">
                    <Button size={"lg"} variant="outline-primary" type={"submit"}>Calculate</Button>
                </Col>
            </Row>
        </Form>
    </>
}