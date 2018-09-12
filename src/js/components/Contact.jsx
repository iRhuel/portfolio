import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            from: '',
            subject: '',
            text: ''
        };
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/mail', this.state)
            .then(response => console.log(response.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
                <div className='contact'>
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <p>Wanna talk? :) Use the info here or the form below:</p>
                        <div className='font-awesome'>
                            <a href='mailto:pltruong2507@gmail.com'><i className="far fa-envelope fa-2x"/></a>
                            <a href='tel:619-519-3727'><i className="fas fa-phone-square fa-2x"/></a>
                            <a href='https://github.com/iRhuel' target='_blank'><i className="fab fa-github fa-2x"/></a>
                            <a href='https://www.linkedin.com/in/phillip-truong-3390a416b/' target='_blank'><i className="fab fa-linkedin fa-2x"/></a>
                            <a href='PhillipTruongResume.pdf' target='_blank'><i className="far fa-file fa-2x"/></a>
                        </div>
                        <div className='form-group row'>
                            <label hidden className='col-form-label' htmlFor='from'>Your Email</label>
                            <input
                                type='text'
                                id='email'
                                name='from'
                                className='form-control'
                                placeholder='Email'
                            />
                        </div>
                        <div className='form-group row'>
                            <label hidden className='col-form-label' htmlFor='subject'>Subject</label>
                            <input
                                type='text'
                                id='subject'
                                name='subject'
                                className='form-control'
                                placeholder='Subject'
                            />
                        </div>
                        <div className='form-group row'>
                            <label hidden className='col-form-label' htmlFor='message'>Message</label>
                            <textarea
                                id='message'
                                name='text'
                                placeholder='Your message'
                                className='form-control'
                                rows={10}
                            />
                        </div>
                        <div className='form-group row'>
                            <input type='submit' className='form-control btn' value='Send'/>
                        </div>
                    </form>
                </div>
        );
    }
}
