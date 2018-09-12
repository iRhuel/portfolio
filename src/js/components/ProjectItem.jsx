import React from 'react';

export default class ProjectItem extends React.Component {
    render() {
        const {
            name,
            description,
            tech,
            context,
            lessons,
            img
        } = this.props;

        return (
            <div className='project'>
                <div className='project-main'>
                    <h4>{name}</h4>
                    <div className='img-container'><img src={img.src} alt={img.alt}/></div>
                    Built using: {tech.join(', ')}
                </div>
                <div className='project-desc'>
                    <h6>Description</h6>{description.map(str => <p>{str}</p>)}
                    <h6>Context</h6>{context.map(str => <p>{str}</p>)}
                    <h6>Lessons</h6>{lessons.map(str => <p>{str}</p>)}
                </div>
            </div>
        );
    }
}
