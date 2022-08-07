import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


export default function Home() {
    let authenticated = localStorage.getItem("authenticated")
    return (
        <div className="home">
            <p className="text">
                The fashion industry – from material sourcing, through supply chains to washing and waste – is estimated to be responsible for 8-10% of global carbon emissions, according to the UN, while other estimates put the figure somewhere between 2% and 8.1%. Clothing also requires considerable amounts of fresh water and is a major source of water pollution.
            </p>
            <h3 className="text">THEN WHAT IS ITS SOLUTION ???</h3>
            <h2 className="text">Lets Reuse Clothes !!!!</h2>
            <Card class="card">
            <Card.Header as="h3">DONATE YOUR CLOTHES</Card.Header>
            <Card.Body>
                <Card.Text>
                Donate Your Clothes Which Does Not Fit You To Someone Else And Contribute In Protecting This PLanet
                </Card.Text>
            {authenticated ? <Link to="/donate-your-clothes"><Button variant="primary">Donate Clothes</Button></Link> : <Link to="/login-first"><Button variant="primary">Donate Clothes</Button></Link>}
            </Card.Body>
            </Card>
            <Card class="card">
            <Card.Header as="h3">GET CLOTHES</Card.Header>
            <Card.Body>
                <Card.Text>
                Get Clothes From Someone Else And Contribute In Protecting This PLanet By Not Buying More Clothes
                </Card.Text>
                <Link to="/get-clothes"><Button variant="primary">Get Clothes</Button></Link>
                
            </Card.Body>
            </Card>
        </div>
    )
}
