import React, { useState, useEffect } from 'react';

function About() {
    const [nyi, setNyi] = useState({})
    const [james, setJames] = useState({})


    useEffect(() => {
        fetch('http://localhost:9292/users/8')
        .then(res => res.json())
        .then(nyi => setNyi(nyi))

        fetch('http://localhost:9292/users/15')
        .then(res => res.json())
        .then(james => setJames(james))
    }, [])


    

    return (
        <div>
            <h3 className='fs-1'>About</h3>
            <br />
            <div className='container d-flex justify-content-center' style={{display: 'inline-flex'}}>
                <div className='row'>
                    <div className='col'>
                        <div className="card" style={{width: "12rem"}}>
                            <img src={nyi.image} className="card-img-top" alt='nyi' />
                            <div className="card-body">
                                <h5 className="card-title">{nyi.username}</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" style={{width: "12rem"}}>
                            <img src={james.image} className="card-img-top" alt='james' />
                            <div className="card-body">
                                <h5 className="card-title">{james.username}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <p className='badge bg-primary text-wrap fs-4 text-wrap float-start font-monospace'>
                This project took a lot of time, tears and sweat, but a great learning challenge nevertheless.
            </p>
            <br />
            <p className='badge bg-secondary text-wrap fs-1 font-monospace float-lg-end'>
                We learned a bit of BootStrap.
            </p>
            <br />
            <p className='badge bg-danger text-wrap font-monospace fs-4'>
                Applied JavaScript, ReactJS, and Ruby together.
            </p>
            <p className='badge bg-success text-wrap font-monospace fs-1 '>
                Big ups to everyone!
            </p>

        </div>
    )
}


export default About;