import React, { Component, PropTypes } from 'react';

const validate = require("validate");

class ModalChallengeData extends Component {
    render() {
        return (
            <fieldset id="challengeHeader">

                <!--CHALLENGE TITLE-->
                <div className="form-group">
                    <label>Challenge Title</label>
                    <input type="text" className="form-control" id="challengeTitle"/>
                        <small className="form-text text-muted">i.e. "Live Healthy", "Explore the Outdoors", "Write a Story"</small>
                </div>

                <!--CHALLENGE DESCRIPTION-->
                <div className="form-group">
                    <label>Challenge Description</label>
                    <textarea className="form-control" id="challengeDescription"></textarea>
                    <small className="form-text text-muted">Write a little bit about what you hope to
                        accomplish.</small>
                </div>

                <!--CHALLENGE PURPOSE-->
                <div className="form-group">
                    <label>Challenge Purpose</label>
                    <input type="text" className="form-control" id="challengePurpose"/>
                        <small className="form-text text-muted">Write a little bit about what you hope to
                            accomplish.</small>
                </div>
            </fieldset>
        )
    }


}