import React, { Component, PropTypes } from 'react';

class ModalBox extends Component {
    render() {
        return (
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <ModalContent/>

                </div>
            </div>
        );
    }
}

ModalBox.propTypes = {
    title: PropTypes.string
};

export default ModalBox;