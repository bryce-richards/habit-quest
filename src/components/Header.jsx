class Header extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <h1>Live Healthy</h1>
                <p>By cutting out processed foods, cooking more, and exercising, I can lead a healthier lifestyle</p>
                <p>This will lead to a more fulfilling life and give me more energy</p>
                <p><a className="btn btn-primary btn-lg" id="newChallenge" href="#" role="button"data-toggle="modal"
                      data-target="#challengeModal">Add a Task</a></p>
            </div>
        );
    }
}