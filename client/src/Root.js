import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var Style = {
  border: '1px solid blue',
  padding: '10px',
  backgroundColor: '#ffffcd'
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
      //<Root messageFromServer={this.state.message} />
      <Movielist />
    );
  }

}

class Movielist extends Component {

  constructor() {
    super();
    this.state = {movies: [] }
  }

  componentDidMount() {
    fetch('/api/movies')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({movies: json.movieList});  /*this will cause an invoke of the render() function again */
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    const movielist = this.state.movies.map((movies) =>
      <div className="box">
        <artical className="media">
          <div className="media-content">
            <div className="content">
              <h1>{movies.title}</h1>
              <li>Realease Year: {movies.releaseYear}</li>
              <li>Average Rating: {movies.avgRating}</li>
              <li><Link to={'/movies/' + movies.movieId}> Click for more</Link></li>
            </div>
          </div>
        </artical>
      </div>
  );
  return (
    <ul>{movielist}</ul>
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
              <span style={Style}>{this.props.messageFromServer}</span>
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
