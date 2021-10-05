import React, { useState, useEffect } from 'react'
import { Carousel, Row } from 'react-bootstrap';
import Sport from '../Sports/Sport/Sport';
import './home.css'


function Home() {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
            .then(res => res.json())
            .then(data => setSports(data.sports))

    }, [])

    const showSports = sports.slice(0, 4);
    return (
        <div className="car">
            <h2>Learn Sports at affordable price</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.thesportsdb.com/images/sports/soccer.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.thesportsdb.com/images/sports/motorsport.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.thesportsdb.com/images/sports/baseball.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h2>Learn one or more of the following Sports at affordable price</h2>
            <h2>we have vary good trainer to teach all of the following games</h2>

            <div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {showSports.map(sport => <Sport
                        key={sport.idSport}
                        sport={sport}></Sport>)}

                </Row>
            </div>


        </div >
    )
}

export default Home
