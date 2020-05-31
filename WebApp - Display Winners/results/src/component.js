import React from "react";
import './component.css'

export default class Data extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            biden: 'Please wait...',
            trump: 'Please wait...',
            winner: 'Please wait...'
        }
    }

    findWinner() {
        let bidenVotes = 0
        let trumpVotes = 0
        let winner = 'Donald Trump'
        fetch('http://localhost:1234/GET-Ballots')
            .then(data => data.json())
            .then((body) => {
                body = body.data

                for (let key in Object.keys(body)) {
                    let temp = body[key].votedFor
                    if (temp === "Joseph Biden") {
                        bidenVotes += 1
                    } else if (temp === "Donald Trump") {
                        trumpVotes += 1
                    }
                }

                if(bidenVotes > trumpVotes){
                    winner = 'Joseph Biden'
                }else{
                    winner = 'Donald Trump'
                }

                this.setState({
                    biden: bidenVotes,
                    trump: trumpVotes,
                    winner: winner
                })
                console.log(`Biden Votes: ${bidenVotes} - Trump Votes: ${trumpVotes}`)
            })
    }

    render() {
        const whiteFont = {
            color: "white"
        }

        const image = {
            height: "300px"
        }

        const bigFont = {
            color: "white",
            fontSize: "3em"
        }

        const biggerFont = {
            fontSize: "1.5em"
        }

        const column = {
            float: "left",
            width: "49%",
            padding: "5px",
        }

        this.findWinner()
        return (
            <div className="App">
                <div className={"hi"} style={whiteFont}>
                    <h1 style={bigFont}>United States of America Federal Elections</h1>
                </div>
                <div style={whiteFont}>
                    <div className={"Biden"} style={column}>
                        <img style={image} src={"https://pyxis.nymag.com/v1/imgs/f07/b07/b59c01f2ac3fe7119f7e6abc74de281778-joe-biden.rsquare.w1200.jpg"} alt={"Biden"}/>
                        <h2>Total Votes for Joseph Biden: {this.state.biden}</h2>
                    </div>
                    <div className={"Trump"} style={column}>
                        <img style={image} alt={"Trump"} src={"https://i.imgflip.com/127vzs.jpg"}/>
                        <h2>Total Votes for Donald Trump: {this.state.trump}</h2>
                    </div>
                </div>
                <h1 style={bigFont}>
                    Your next president will be       <strong style={biggerFont}>{this.state.winner}</strong>.
                </h1>
            </div>
        )
    }
}