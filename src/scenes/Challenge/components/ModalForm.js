import React, { Component, PropTypes } from 'react';

const validate = require("validate");

class ModalForm extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            purpose: ""
        };

    }

    _handleSubmit(event) {
        event.preventDefault();

        if (!this._title.value || !this._description.value || !this._purpose.value) {

        }
    }

    _submitForm(challenge) {
        jQuery.post("/api/user/challenge/:user_id", { challenge })
            .success(newChallenge => {
                this.setState({challenge: this.state.challenge});
            });
    }
}


ModalForm.propTypes = {
    title: PropTypes.string
};

export default ModalForm;