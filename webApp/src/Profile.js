import React, {Component} from 'react';
import {
    Person,
} from 'blockstack';
import Candidates from './candidates';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {
                name() {
                    return 'Anonymous';
                },
                avatarUrl() {
                    return avatarFallbackImage;
                },
            },
        };
    }

    render() {
        const {handleSignOut, userSession} = this.props;
        const {person} = this.state;
        return (
            !userSession.isSignInPending() ?
                <div className="panel-welcome" id="section-2">

                    <h1>Hello, <span id="heading-name">{person.name() ? person.name() : 'Nameless Person'}</span>!</h1>
                    <p className="lead">
                        <button
                            className="btn btn-primary btn-lg"
                            id="signout-button"
                            onClick={handleSignOut.bind(this)}
                        >
                            Logout
                        </button>
                    </p>

                    <Candidates/>
                </div> : null
        );
    }

    componentWillMount() {
        const {userSession} = this.props;
        this.setState({
            person: new Person(userSession.loadUserData().profile),
        });
    }
}
