import React, { Component, PropTypes } from 'react';

class ModalForm extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            purpose: ""
        };

    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label>Example select</label>
                    <select className="form-control" id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label >Example textarea</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();

        if (!this._title.value || !this._description.value || !this._purpose.value) {

        }
    }
}


ModalForm.propTypes = {
    title: PropTypes.string
};

export default ModalForm;