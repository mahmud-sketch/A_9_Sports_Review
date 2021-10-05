import React, { useState, useEffect } from 'react'


function SportDetails() {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        fetch('./subjects.JSON')
            .then(res => res.json())
            .then(data => setSports(data))

    }, [])
 

    return (
        <div>
            <h2>Following sports are available</h2>


        </div>
    )
}

export default SportDetails
