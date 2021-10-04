import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function CourseDetails() {
    // const { CourseId } = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./subjects.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])
    console.log(courses);


    return (

        <div>
            {/* <h2>course details of {CourseId}</h2> */}
            {/* <img src={courseDetails.img} alt="" /> */}

        </div>
    )
}

export default CourseDetails
