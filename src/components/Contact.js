/*
 *
 *  TODO: Change the receiving email address when ready for deployment
 *  TODO: Add reCaptcha to the form for added verification security
 *
 */

import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import axios from 'axios';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleFormReset = this.handleFormReset.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            inquiry: 'General',
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
            mailSent: false,
            error: null,
        };
    }

    handleOnChange(value) {
        this.setState({
            phone: value,
        });
    }

    handleFormReset() {
        this.setState({
            inquiry: 'General',
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
            mailSent: false,
            error: null,
        });
    }

    handleFormSubmit(evt) {
        evt.preventDefault();
        axios({
            method: 'post',
            url: '/mail.php',
            headers: { 'content-type': 'application/json' },
            data: this.state,
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent,
                });
            })
            .then(this.handleFormReset())
            .catch(error => {
                if (error.response) {
                    this.setState({ error: error.message });
                }
            });
    }

    render() {
        return (
            <form action='#' onSubmit={e => this.handleFormSubmit(e)}>
                <h1 className='contact-title'>Contact Us</h1>
                <div className='form-container'>
                    <div className='form-group'>
                        <label>Inquiry Type</label>
                        <select
                            id='inquiry'
                            name='inquiry'
                            onChange={e => this.setState({ inquiry: e.target.value })}
                            value={this.state.inquiry}
                        >
                            <option value='General'>General</option>
                            <option value='Invest'>Invest</option>
                            <option value='Services'>Services</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Full Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Full Name'
                            onChange={e => this.setState({ name: e.target.value })}
                            value={this.state.name}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Company</label>
                        <input
                            type='text'
                            id='company'
                            name='company'
                            placeholder='Company'
                            onChange={e => this.setState({ company: e.target.value })}
                            value={this.state.company}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email'
                            onChange={e => this.setState({ email: e.target.value })}
                            value={this.state.email}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Phone</label>
                        <ReactPhoneInput
                            inputExtraProps={{ name: 'phone', id: 'phone' }}
                            containerStyle={{ flex: 2, paddingRight: '15px' }}
                            inputStyle={{ width: '104%', backgroundColor: '#f2f5f7', border: 'none' }}
                            defaultCountry={'ca'}
                            onChange={e => this.handleOnChange(e)}
                            value={this.state.phone}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            rows='10'
                            placeholder='Write your message'
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}
                            required
                        />
                    </div>
                    <div>{this.state.mailSent ? <div>Thank you for contcting us.</div> : ''}</div>
                    <div className='submit-container'>
                        <input type='submit' value='Submit' />
                    </div>
                </div>
            </form>
        );
    }
}

export default Contact;
