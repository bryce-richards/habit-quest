import React, { Component, PropTypes } from 'react';

class ModalHeader extends Component {
    render() {
        return (
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>

        )
    }
}

ModalHeader.propTypes = {
    title: PropTypes.string
};

export default ModalHeader;