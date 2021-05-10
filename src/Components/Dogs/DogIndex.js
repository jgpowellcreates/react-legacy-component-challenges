import React from 'react';

export default class DogIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    fetcher = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => this.setState({url: data.message}))
        .catch(console.log)
    }

    render() {
        return(
            <div>
                <button onClick={this.fetcher}> -- Push to Summon a Dog at Your Command -- </button>
                <br />
                {this.state.url!=''
                    ? <img src={this.state.url} style={{width: "450px", border: "2px solid black"}} alt="doggy style" />
                    : <p>Press the Button for a Pup Pic!</p>}
            </div>
        )
    }
}