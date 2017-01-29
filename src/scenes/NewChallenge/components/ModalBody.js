import React, { Component, PropTypes } from 'react';

class ModalBody extends Component {
    render() {
        return (
            <div class="modal-body">
                <ModalForm/>
            </div>
        );
    }
}

ModalBody.propTypes = {
    title: PropTypes.string
};

export default ModalBody;