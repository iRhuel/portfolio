import React from 'react';
import ProjectItem from "./ProjectItem";
const projects = require('../projects');

export default class Projects extends React.Component {
    render() {
        return (
            <div className='projects'>
                {projects.map(project =>
                    <ProjectItem className='project' {...project}/>
                )}
            </div>
        );
    }
}
