import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './sport.css'

function Sport(props) {
    const { idSport, strSport, strSportDescription, strSportThumb } = props.sport;
    const SportDescription = strSportDescription.slice(0, 100);

    return (
        <div>
            <Col>
                <Card style={{ width: '18rem', margin: 'auto' }}>
                    <Card.Img className="crdimg" variant="top" src={strSportThumb} />
                    <Card.Body>
                        <Card.Title>{strSport}</Card.Title>
                        <h4>price: {idSport}Tk.</h4>
                        <Card.Text>
                            {SportDescription}
                        </Card.Text>
                        <Link to={`/sports/${idSport}`}>sport details</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Sport
