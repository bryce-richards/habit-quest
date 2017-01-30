import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Header from "./components/Header.jsx";
import DashboardJumbo from './components/DashboardJumbo.jsx';
import ModalForm from './components/ModalForm.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>react component</p>
                <Header />
                <DashboardJumbo />
                <ModalForm />
            </div>
        )
    }
}

// render(
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             {/*<Route path="signin" component={Signin}/>*/}
//             {/*<Route path="signup" component={SignupForm}/>*/}
//             {/*<Route path="profile" component={Profile}/> // route that should require auth*/}
//         </Route>
//     </Router>,
//     document.getElementById("root")
// );

render(
    <App />,
    document.getElementById('root')
);