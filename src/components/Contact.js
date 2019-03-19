/*
 *
 * TODO: Change the receiving email address when ready for deployment
 * TODO: Work on the mail headers in the mail.php
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
                <input type='text' id='name' name='name' placeholder='Full Name' onChange={e => this.setState({ name: e.target.value })} value={this.state.name} required />
                <input type='text' id='company' name='company' placeholder='Company' onChange={e => this.setState({ company: e.target.value })} value={this.state.company} />
                <input type='email' id='email' name='email' placeholder='Email' onChange={e => this.setState({ email: e.target.value })} value={this.state.email} required />
                <ReactPhoneInput inputStyle={{ width: '100%' }} defaultCountry={'ca'} onChange={e => this.handleOnChange(e)} value={this.state.phone} />
                <textarea
                    id='message'
                    name='message'
                    placeholder='Write your message'
                    onChange={e => this.setState({ message: e.target.value })}
                    value={this.state.message}
                    required
                />
                <div>{this.state.mailSent ? <div>Thank you for contcting us.</div> : ''}</div>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export default Contact;
