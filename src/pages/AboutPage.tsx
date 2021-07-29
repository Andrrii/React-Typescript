import React from 'react';
import {useHistory} from "react-router-dom"

const AboutPage: React.FC= () => {
    const history = useHistory()
    return (
        <>
            <h1>Designed by @'Andrii Butsa'</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error eaque aut, voluptatem ad velit fuga unde id labore, tenetur accusamus fugiat nihil consequuntur quisquam culpa odio ratione rem architecto. Nisi voluptate quis, maiores quam est quas modi fuga possimus earum. Iusto placeat architecto sunt eaque sapiente consectetur, sed odit. Ad!</p>
            <button onClick={() => history.push('/')} className = "btn btn-primary">Back to Home</button>
        </>
    )
}

export default AboutPage;