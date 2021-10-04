import React from 'react'
import { Card, Col } from 'react-bootstrap'

function Review(props) {
    const { name, review } = props.review;
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem', margin: 'auto' }}>
                    <Card.Body>
                        <Card.Title>name of student: {name}</Card.Title>
                        <Card.Text>
                            User's Comment: {review}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Review
