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
        const mystyle = {
            position: 'absolute',
            top: 7,
            right: 20,
        };
        const {handleSignOut, userSession} = this.props;
        const {person} = this.state;
        return (
            !userSession.isSignInPending() ?
                <div className="panel-welcome" id="section-2">

                    <h1 style={{position: "absolute", top:125, left:"40%", right: "40%"}}>Select Your Candidate</h1>
                    <p className="lead">
                        <div style={mystyle}>

                            <button
                            style={{fontSize: 25}}
                                className="btn btn-primary btn-lg"
                                id="signout-button"
                                onClick={handleSignOut.bind(this)}
                            >
                                Logout
                            </button>
                        </div>
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
