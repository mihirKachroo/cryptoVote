import React from "react";
import "./candidate.css"
import Justin from "./politicianImages/justin.jpg"
import Trump from "./politicianImages/trump.jpg"

const request = require('request')


class HoverPage extends React.Component {
    render() {
        const voteButtonStyle = {
            marginLeft: "50px",
            backgroundColor: "red",
            padding: "50px 50px"
        }

        function VoteJustin(e) {
            e.preventDefault()
            console.log('hi')
            
            let name = "Bill Bai" // Change this
            let voterID = "12341234" // Change this
            let voteFor = "Justin Trudeau"

            request.post(
                'http://localhost:1234/POST-Ballot?voterName=' +
                name +
                '&voterID=' +
                voterID +
                '&votedFor=' +
                voteFor
            )
        }

        function VoteTrump(e) {
            e.preventDefault()
            console.log('hi')

            let name = "Bill Bai" // Change this
            let voterID = "12341234" // Change this
            let voteFor = "Donald Trump"

            request.post(
                'http://localhost:1234/POST-Ballot?voterName=' +
                name +
                '&voterID=' +
                voterID +
                '&votedFor=' +
                voteFor
            )
        }

        return (
            <div class="container">

                {/* Justin Trudeau */}
                <img style={{width: "250px"}} src={Justin} alt=""/>
                <div class="overlay">
                    <div class="text">Justin Trudeau</div>
                </div>
                <button style={voteButtonStyle} onClick={VoteJustin}>Vote!</button>

                {/* Donald Trump */}
                <img style={{width: "250px"}} src={Trump} alt=""/>
                <div className="overlay">
                    <div className="text">Donald Trump</div>
                </div>
                <button style={voteButtonStyle} onClick={VoteTrump}>Vote!</button>
            </div>
        );
    }
}

export default HoverPage;