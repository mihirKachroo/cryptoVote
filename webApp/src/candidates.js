import React from "react";
import "./candidate.css"
import Justin from "./politicianImages/biden2.jpg"
import Trump from "./politicianImages/trump2.jpg"

const request = require('request')


class HoverPage extends React.Component {
    render() {
        const voteButtonStyle = {
            position: "absolute",
            top: "2%",
            right: "4.5%",
            marginLeft: "50px",
            backgroundColor: "red",
            padding: "20px 50px",
            align: "center"
        }
        const voteButtonStyle2 = {
            position: "absolute",
            left: "35%",
            marginLeft: "50px",
            backgroundColor: "red",
            padding: "20px 50px"
        }
        function VoteJustin(e) {
            e.preventDefault()
            console.log('hi')
            
            let name = "Bill Bai" // Change this
            let voterID = "12341234" // Change this
            let voteFor = "Joe Biden"

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
{ /*
                <img style={{width: "250px", height: "300px"}} src={Justin} alt=""/>
                <div class="overlay">
                    <div class="text">Joe Biden</div>
                </div>
               <button style={voteButtonStyle} onClick={VoteJustin}>Vote!</button>

                <img style={{width: "250px", height: "300px"}} src={Trump} alt=""/>
                <div className="overlay">
                    <div className="text">Donald Trump</div>
                </div>
                <button style={voteButtonStyle} onClick={VoteTrump}>Vote!</button>
*/}

<div class="img__wrap2">
  <img style={{width: "250px", height: "300px"}} class="img__img" src={Justin} />
  <p class="img__description2">Joe Biden. Leader of the Democratic party.</p>
</div>
<button style={voteButtonStyle2} onClick={VoteJustin}>Vote!</button>

<div class="img__wrap">
  <img style={{width: "250px", height: "300px"}} class="img__img" src={Trump} />
  <p class="img__description">Donald Trump. Leader of the Republican party.</p>
</div>
<button style={voteButtonStyle} onClick={VoteTrump}>Vote!</button>

</div>

        );
    }
}

export default HoverPage;