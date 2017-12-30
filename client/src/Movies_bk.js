import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';

class Movies extends Component {
  constructor(){
    super();
    this.state = {movie: {genres: []}}
  }

  componentDidMount() {
    fetch('/api/movies/' + this.props.match.params.movieId)
    .then(res => res.json())
    .then(json => {
      this.setState({movie: json});
    })
    .catch(function (error){
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container is-widescreen">
      <div>
      <h1>{this.state.movie.title}</h1>
      <li>Release Year: {this.state.movie.releaseYear}</li>
      <li>Average Rating: {this.state.movie.avgRating}</li>
      <li>mpaa: {this.state.movie.mpaa}</li>
      <li>Summary: {this.state.movie.plotSummary}</li>
      <p><a href={'http://www.imdb.com/title/tt'+this.state.movie.imdbMovieId}>IMBD Link</a></p>
      <p>Genres :<ul>{this.state.movie.genres.map((type, index) =>
                  <li key={index}>
                  {type}
                  </li>
              )} </ul>
      </p>
      <p><Link to={`/`}>Go to home</Link></p>
      </div>
      </div>

    );
  }
}

export default Movies;
