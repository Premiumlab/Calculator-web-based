import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var amazingInlineJsStyle = {
  border: '1px solid purple',
  padding: '10px',
  backgroundColor: '#ffffcc'
}

class RootContainer extends Component {
  constructor() {
    super();
    this.state = { message: '' }
  }

  componentDidMount() {
    fetch('/api/example')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({message: json.message});  /*this will cause an invoke of the render() function again */
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /* Every time we change the value of a state variable, the render() function is called. That's why we need to make sure in the render() of
  the Root class below that we received the prop 'messageFromServer' (see the if-else condition in the Root class)*/
  render() {
    return (
      <Root messageFromServer={this.state.message} />
    );
  }

}

class Root extends Component {

  render() {
    console.log("this will print twice");
    if (this.props.messageFromServer) {
      return (
          <div className="Root">
            <p>
              Message from server:
              <span style={amazingInlineJsStyle}>{this.props.messageFromServer}</span>
            </p>
            <p>
              Root! <Link to={`/foo`}>a link to foo</Link>
            </p>
          </div>);
    } else {
      return null;
    }

  }
}

export default RootContainer;
