import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';

function Students() {
    // const [students, setStudents] = useState([])
    const [test, setTest] = useState([])
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTest(data);
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:9292/students/1')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setStudents(data);
        })
    }, [])
    
    

    return (
        <div>
            <h3>Student cards here</h3>
            <p>TEST: {test.message}</p>
            <StudentCard students={students} />
        </div>

    )
}

export default Students;