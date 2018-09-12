import React from 'react';
import ProjectItem from "./ProjectItem";

export default class Projects extends React.Component {
    render() {
        const projects = require('../projects');
        return (
            <div className='projects'>
                {projects.map(project =>
                    <ProjectItem {...project}/>
                )}
            </div>
        );
    }
}
