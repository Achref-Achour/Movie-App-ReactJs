import React, { Component } from 'react';
import './App.css';


class Search extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
      <input type="text" placeholder="Search.." name="search" 
             onChange={this.props.searched} />
      </div>
    );
  }
}

export default Search