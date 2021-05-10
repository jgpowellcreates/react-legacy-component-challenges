import React, { Component } from "react";
import { Input } from "reactstrap";

export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
      searchTerm: "",
      searchResults: []
    };
  }

  SearchFunction(e) {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <Input
          type="text"
          placeholder="Search Here"
          value={
            this.state.searchTerm
          } onChange={(e) => this.SearchFunction(e)}
        />
        <h3>Results:</h3>
        <ResultsMap items={this.state.things.filter(word => word.includes(this.state.searchTerm))} />
      </div>
    );
  }
}

const ResultsMap = (props) => {
  return( 
    props.items.map((item, index) => <li key={index}>{item}</li>)
  )
}