import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';

function Students() {
    // const [students, setStudents] = useState([])
    // const [test, setTest] = useState([])
    const [students, setStudents] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setTest(data);
    //     })
    // }, [])

    useEffect(() => {
        fetch('http://localhost:9292/students')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setStudents(data);
        })
    }, [])
    
    const renderStudents = students.map((student) => (
        <StudentCard key={student.id} id={student.id} name={student.name} profile_img={student.profile_img} feeling={student.feeling}/>
    ))


    return (
        <div>
            <h3>Student cards here</h3>
            {renderStudents}
        </div>
    )
}

export default Students;