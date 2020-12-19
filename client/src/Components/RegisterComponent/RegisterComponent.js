import React from 'react';
import {Accordion, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';

import './RegisterComponent.css';
import Company from './images/company.png';
import Junior from './images/junior.png'

const RegisterComponent = () => {
    const AccordionStyle = {
        margin: "16px",
        height: "70vh",
    }

    const CardStyle = {
        backgroundColor: "#87cefa",
        borderColor: "#87cefa"
    }

    return (
        <div className="Register">
            <h1>Who are you</h1>
            <div>
                <Accordion style={AccordionStyle}>
                    <Card style={CardStyle}>
                        <Card.Header style={{backgroundColor: "#87cefa"}}>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <img src={Company} alt=""/>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body style={{background: "#87cefa", width: "50vh"}}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="Company name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Email"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <FormControl
                                        type="password"
                                        placeholder="Password"
                                        aria-label="password"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">http://</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Website"
                                        aria-label="website"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Locatoin"
                                        aria-label="location"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Phone Number"
                                        aria-label="phone"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>About Me</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl as="textarea" aria-label="With textarea" />
                                </InputGroup>

                                <InputGroup>
                                    <Form>
                                        <Form.File 
                                            id="custom-file"
                                            label="Custom file input"
                                            custom
                                        />
                                    </Form>
                                </InputGroup>
                            </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                {/* <Accordion style={AccordionStyle}>
                    <Card style={CardStyle}>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body style={{backgroundColor:"brown", width: "50vh"}}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            </div>
                        </Card.Body>
                        </Accordion.Collapse>
                        <Card.Header style={{backgroundColor: "#87cefa"}}>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <img src={Company} alt=""/>
                        </Accordion.Toggle>
                        </Card.Header>
                    </Card>
                </Accordion> */}
            </div>
        </div>
    )
}

export default RegisterComponent;