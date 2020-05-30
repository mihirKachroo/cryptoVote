import React from "react";

const request = require('request')

export default class Data extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            biden: 'Please wait...',
            trump: 'Please wait...'
        }
    }

    betterSetState(biden, trump) {
        this.setState({
            biden: biden,
            trump: trump
        })
    }

    findWinner() {
        let bidenVotes = 0
        let trumpVotes = 0
        fetch('http://localhost:1234/GET-Ballots')
            .then(data => data.json())
            .then((body) => {
                body = body.data

                for (let key in Object.keys(body)) {
                    let temp = body[key].votedFor
                    if (temp === "Justin Trudeau") {
                        bidenVotes += 1
                    } else if (temp === "Donald Trump") {
                        trumpVotes += 1
                    }
                }
                this.setState({
                    biden: bidenVotes,
                    trump: trumpVotes
                })
                console.log(`Biden Votes: ${bidenVotes} - Trump Votes: ${trumpVotes}`)
            })
    }

    render() {
        const whiteFont = {
            color: "white"
        }

        this.findWinner()
        return (
            <div className="App">
                <div className={"Title"} style={whiteFont}>
                    <h1>United States of America Federal Elections</h1>
                </div>
                <div style={whiteFont}>
                    <h2>Total Votes for Joseph Biden: {this.state.biden}</h2>
                    <h2>Total Votes for Donald Trump: {this.state.trump}</h2>
                </div>
            </div>
        )
    }
}