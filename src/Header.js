import React, { Component, PropTypes } from 'react';

class Header extends Component {
    render() {
        return (<h1>Hi {this.props.title}</h1>);
    }
}

Header.propTypes = {
    title: PropTypes.string
};

export default Header;