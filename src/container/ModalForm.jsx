import React from "react";
import ChallengeDataInput from "../components/ChallengeFormInput/ChallengeDataInput.jsx";

class ModalForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            currentForm: 0
        }
    }
    // formValues IS EQUAL TO THE PASSED IN INFORMATION ON THE CHILD'S onSubmit FUNCTION

    onChallengeDataSubmit(formValues) {
        console.log("Form Submitted", formValues);
        console.log(arguments);
        this.setState({currentForm: this.state.currentForm + 1})
    }

    render() {
        return (
            <div className="modal fade" id="challengeModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLongTitle"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">

                    <div className="modal-content">

                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h5 className="modal-title">New Challenge</h5>
                        </div>

                        <div className="modal-body">
                            {
                                this.state.currentForm === 0 ?
                                    <ChallengeDataInput onSubmit={this.onChallengeDataSubmit} />
                                    :
                                    'no other page'
                            }


                        </div>

                    </div>
                </div>
            </div>
        );

    }
}

export default ModalForm;
