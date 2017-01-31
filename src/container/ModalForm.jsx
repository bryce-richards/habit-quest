class ModalForm extends React.Component {

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
                            <form>

                                <fieldset id="challengeHeader">

                                    <div className="form-group">
                                        <label htmlFor="challengeTitle">Challenge Title</label>
                                        <input type="text" className="form-control" id="challengeTitle"/>
                                        <small className="form-text text-muted">i.e. "Live Healthy", "Explore the Outdoors",
                                            "Write a Story"
                                        </small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="challengeDescription">Challenge Description</label>
                                        <textarea className="form-control" id="challengeDescription"></textarea>
                                        <small className="form-text text-muted">Write a little bit about what you hope to
                                            accomplish.
                                        </small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="challengePurpose">Challenge Purpose</label>
                                        <input type="text" className="form-control" id="challengePurpose"/>
                                        <small className="form-text text-muted">Write a little bit about what you hope to
                                            accomplish.
                                        </small>
                                    </div>
                                </fieldset>

                                <fieldset id="week1" className="hidden">
                                    <div className="form-group">
                                        <label htmlFor="week1Tasks">Tasks For The Week</label>
                                        <select className="form-control" id="week1Tasks">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <small className="form-text text-muted">Select up to three.</small>
                                    </div>

                                    <fieldset>
                                        <div className="form-group">
                                            <label htmlFor="week1task1">Task 1</label>
                                            <input className="form-control" id="week1Task1"/>
                                            <small className="form-text text-muted">i.e. "No processed sugar", "Ten pushups
                                                every
                                                morning", "Write 100 Words a Day"
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="week1Task1Days">Days of The Week</label>
                                            <select className="form-control" id="week1Task1Days">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            <small className="form-text text-muted">Select How Many Days You Want To
                                                Complete This Task This Week
                                            </small>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <div className="form-group">
                                            <label htmlFor="week1Task2">Task 2</label>
                                            <input className="form-control" id="week1Task2"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="week2Task1Day">Days of The Week</label>
                                            <select className="form-control" id="week2Task1Days">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <div className="form-group">
                                            <label htmlFor="wee1Task3">Task 3</label>
                                            <input className="form-control" id="week1Task3"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="week1Task3Days">Days of The Week</label>
                                            <select className="form-control" id="week1Task3Days">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </fieldset>
                                </fieldset>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary disabled">Back</button>
                            <button type="button" className="btn btn-success">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default ModalForm