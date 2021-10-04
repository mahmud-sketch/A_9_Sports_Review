import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './course.css'

function Course(props) {
    const { CourseId, subject, category, img, level, credit, cost } = props.course;
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem', margin: 'auto' }}>
                    <Card.Img className="crdimg" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{subject}</Card.Title>
                        <Card.Text>
                            Category:{category}; Level:{level}; Credit:{credit}; Cost:{cost}Tk.
                        </Card.Text>
                        <Link to={`/course/${CourseId}`}>course details</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Course
