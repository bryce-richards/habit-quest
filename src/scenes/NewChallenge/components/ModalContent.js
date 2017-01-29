import React, { Component, PropTypes } from 'react';

class ModalContent extends Component {
    render() {
        return (
            <div className="modal-content">
                <ModalHeader/>
                <ModalBody/>
                <ModalFooter/>
            </div>
        );
    }
}

ModalContent.propTypes = {
    title: PropTypes.string
};

export default ModalContent;