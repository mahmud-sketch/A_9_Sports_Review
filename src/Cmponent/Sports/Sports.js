import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Sport from './Sport/Sport';

function Sports() {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
            .then(res => res.json())
            .then(data => setSports(data.sports))

    }, [])


    console.log(sports);

    return (
        <div>
            <h2>Following Sportss are available for learning</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {sports.map(sport => <Sport
                    key={sport.idSport}
                    sport={sport}></Sport>)}

            </Row>

        </div>
    )
}

export default Sports
