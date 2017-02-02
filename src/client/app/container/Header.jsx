import React from "react";
import { Button } from "react-bootstrap";
import ModalForm from "./ModalForm.jsx";
import Navbar from "../components/Navbar.jsx";

class Header extends React.Component {

    render() {
        return (
          <div>
            <Navbar />
            <div className="jumbotron">
              <h1>4 Week Challenge</h1>
              <p>Live your life to the fullest, one week at a time</p>
            </div>
          </div>
        );
    }
}

export default Header;
