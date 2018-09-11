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
        axios
            .post('/mail', this.state)
            .then(response => console.log(response.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form className='contact' onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className='form-field'>
                    <div className='col-label'>
                        <label htmlFor='from'>Your Email</label>
                    </div>
                    <div className='col-input'>
                        <input type='text' id='email' name='from' placeholder='your@email.com'/>
                    </div>
                </div>
                <div className='form-field'>
                    <div className='col-label'>
                        <label htmlFor='subject'>Subject</label>
                    </div>
                    <div className='col-input'>
                        <input type='text' id='subject' name='subject' placeholder='Hey, there!'/>
                    </div>
                </div>
                <div className='form-field'>
                    <div className='col-label'>
                        <label htmlFor='message'>Message</label>
                    </div>
                    <div className='col-input'>
                        <textarea
                            id='message'
                            name='text'
                            placeholder='I saw you walking by one day and I just had to...'
                        />
                    </div>
                </div>
                <input type='submit' value='Send'/>
            </form>
        );
    }
}
