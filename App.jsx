import React from "react";
import ModalForm from "./src/container/ModalForm.jsx";

class App extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <ModalForm />
            </div>
        );
    }
}

export default App