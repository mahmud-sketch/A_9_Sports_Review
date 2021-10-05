import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

function CourseDetails() {
    const id = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
            .then(res => res.json())
            .then(data => setCourses(data.sports))
    }, [])

    console.log(courses);

    console.log(id.id);

    let gameToShow;

    for (const course of courses) {
        if (course.idSport === id.id) {
            gameToShow = course;
        }
    }

    console.log(gameToShow);


    return (
        <div>
            <Card style={{ width: '18rem', margin: 'auto' }}>
                <Card.Img className="crdimg" variant="top" src={gameToShow?.strSportThumb} />
                <Card.Body>
                    <Card.Title>{gameToShow?.strSport}</Card.Title>
                    <h4>price: {gameToShow?.idSport}Tk.</h4>
                    <Card.Text>
                        {gameToShow?.strSportDescription}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CourseDetails
