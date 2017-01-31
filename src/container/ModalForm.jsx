import React from "react";
import ChallengeDataInput from "../components/ChallengeFormInput/ChallengeDataInput.jsx";

class ModalForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            currentForm: 0,
            newChallenge: {}
        }
    }
    // formValues IS EQUAL TO THE PASSED IN INFORMATION ON THE CHILD'S onSubmit FUNCTION

    onChallengeDataSubmit(formValues) {
        console.log("Form Submitted", formValues);
        console.log(arguments);
        this.setState({newChallenge: {/* Add to current new Challenge Object*/}});
        this.setState({currentForm: this.state.currentForm + 1});
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
                                switch(this.state.currentForm) {
                                    case 1:
                                        <ChallengeDataInput onSubmit={this.onChallengeDataSubmit} />
                                        break;
                                    case 2:
                                        <WeekDataInput onSubmit={this.onChallengeWeek1Submit} />
                                        break;
                                    case 3:
                                        <weekDataInput onSubmit={this.onChallengeWeek2Submit} />
                                        break;
                                    case 4:
                                        <weekDataInput onSubmit={this.onChallengeWeek3Submit} />
                                        break;
                                    case 5:
                                    <weekDataInput onSubmit={this.onChallengeWeek4Submit} />
                                    break;
                                }

                            }

                        </div>

                    </div>
                </div>
            </div>
        );

    }
}

export default ModalForm;
