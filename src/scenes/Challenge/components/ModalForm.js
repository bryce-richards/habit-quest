import React, { Component, PropTypes } from 'react';

const validate = require("validate");

class ModalForm extends Component {

    render() {


    }
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            purpose: ""
        };

    }

    _handleSubmit(e) {
        e.preventDefault();
        if (!this._title.value || !this._description.value || !this._purpose.value) {

        }
    }

    _submitForm(challenge) {
        jQuery.post({
            method: "POST",
            url: "/api/user/challenge/:user_id",
            success: () => {
                this.setState({ comments })
            }
        });
    }
}


ModalForm.propTypes = {
    title: PropTypes.string
};

export default ModalForm;