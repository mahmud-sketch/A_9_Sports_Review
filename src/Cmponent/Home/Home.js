import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Course from '../Courses/Course/Course';


function Home() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./subjects.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])

    const showCourses = courses.slice(0, 4);
    return (
        <div>
            <h2>home</h2>
            <div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {showCourses.map(course => <Course
                        key={course.key}
                        course={course}></Course>)}

                </Row>
            </div>


        </div>
    )
}

export default Home
