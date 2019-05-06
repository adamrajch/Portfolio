import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
export default class Projects extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="projects">
                <Container>
                    <Row>
                        <Col sm="4">

                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>RPG Game</CardTitle>
                                    <CardSubtitle>MySQL, Node.js Passport.js</CardSubtitle>
                                    <CardText>Simple turn-based RPG game</CardText>

                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4">
                            1
                            <CardBody>
                                <CardTitle>Spotify Geo-location Playlist Creator</CardTitle>
                                <CardSubtitle>JQuery, Spotify oAuth</CardSubtitle>
                                <CardText>Creates playlist on location</CardText>

                            </CardBody>
                        </Col>
                        <Col sm="4">
                            1
                            <CardBody>
                                <CardTitle>Shopping Site</CardTitle>
                                <CardSubtitle>MongoDB/Mongoose, React, Node.js, Firebase, Shopify API</CardSubtitle>
                                <CardText>Ecommerce site with full features</CardText>

                            </CardBody>
                        </Col>


                    </Row>
                </Container>
            </div>
        )
    }
}