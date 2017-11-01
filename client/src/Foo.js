import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Foo extends Component {

  componentDidMount() {
    console.log('FOO')
  }

  render() {
    return (
      <div className="Foo">
        <p>
          You are now on FOO! <Link to={`/`}>back to home</Link>
        </p>
      </div>
    );
  }
}

export default Foo;
