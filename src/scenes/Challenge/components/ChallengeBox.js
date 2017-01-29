import React, { Component, PropTypes } from 'react';

class ModalForm extends Component {



    _fetchChallenge() {
        jQuery.ajax({
            method: "GET",
            url: "/"
        })
    }

}