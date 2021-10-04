import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Course from './Course/Course';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./subjects.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])
    console.log(courses);
    return (
        <div>
            <h2>Following Courses are available</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {courses.map(course => <Course
                    key={course.key}
                    course={course}></Course>)}

            </Row>

        </div>
    )
}

export default Courses
