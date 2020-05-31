import React from "react";
import "./candidate.css"
import Justin from "./politicianImages/biden2.jpg"
import Trump from "./politicianImages/trump2.jpg"

const request = require('request')


class HoverPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: "blue"
        }
    }

    VoteBiden(e) {
        e.preventDefault()
        console.log('hi')

        let name = "Bill Bai"
        let voterID = "12341234"
        let voteFor = "Joe Biden"

        request.post(
            'http://localhost:1234/POST-Ballot?voterName=' +
            name +
            '&voterID=' +
            voterID +
            '&votedFor=' +
            voteFor
        )

        this.setState({
            color: "green"
        })
    }


    render() {
        const voteButtonStyle = {
            position: "absolute",
            top: 305,
            right: 35,
            marginLeft: "50px",
            backgroundColor: "red",
            padding: "15px 70px",
            align: "center",
            color: "white",
        }
        const voteButtonStyle2 = {
            position: "absolute",
            top: 305,
            left: 382,
            marginLeft: "50px",
            backgroundColor: this.state.color,
            padding: "15px 70px",
            color: "white",

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
  <p class="img__description2"><br/><br/><b>Joe Biden.</b><br/> Leader of the Democratic Party. The Democratic Party values egalitarianism, social equality (gay marriage, black rights, LGBTQ+ rights), protecting the environment, and strengthening the social safety net through liberalism.</p>
</div>
<button style={voteButtonStyle2} onClick={this.VoteBiden.bind(this)}><a href={"http://localhost:3001"}>Vote!</a></button>

<div class="img__wrap">
  <img style={{width: "250px", height: "300px"}} class="img__img" src={Trump} />
  <p class="img__description"><br/><br/><b>Donald Trump.</b><br/> Leader of the Republican Party. <br/>The Republican Party values small government, deregulation of the government, economic liberalism, free trade and other traditional values, as the fundamental traits of democracy.</p>
</div>
<button style={voteButtonStyle} onClick={VoteTrump}>Vote!</button>

</div>

        );
    }
}

export default HoverPage;