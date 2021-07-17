import ARInputs, {AnnualizedReturnData} from './ARInputs'
import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

export default () => {

    const [data, setData] = useState<AnnualizedReturnData | undefined>(undefined)

    const investmentReturn = () => {
        if (!data) { return 0; }
        return (data.theReturn / data.investment) * 100;
    }

    const repeatPerYear = () => {
        if (!data) { return 0; }

        if (data.days <= 5) {
            return 365 / data.days;
        }

        return 260 / (data.days * (5/7));

    }

    const annualizedReturn = () => {
        if (!data) { return 0; }
        return (investmentReturn() * repeatPerYear())
    }

    return <>

        <Container >
        <Row >
            <Col>
                <ARInputs onSubmit={setData}/>
            </Col>
        </Row>
            <Row>
                <Col>
                    {data ? <>
                        <table className={"table mt-4"}>
                            <thead>
                            <tr>
                                <th>
                                    Return
                                </th>
                                <th>
                                    Annual Repeatability
                                </th>
                                <th>
                                    Annualized Return
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {+investmentReturn().toFixed(2)}%
                                    </td>
                                    <td>
                                        {+repeatPerYear().toFixed(2)} times per year
                                    </td>
                                    <td>
                                        {+annualizedReturn().toFixed(2)}%
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </> : null}
                </Col>
            </Row>
        </Container>


    </>
}