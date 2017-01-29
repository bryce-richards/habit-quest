import React, { Component, PropTypes } from 'react';

class ModalFooter extends Component {
    render() {
        return (
            <div className="modal-footer">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                        <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                        ...
                    </ul>
                </nav>
            </div>
        );
    }
}

ModalFooter.propTypes = {
    title: PropTypes.string
};

export default ModalFooter;