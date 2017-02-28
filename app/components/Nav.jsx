var React = require('React');
var {Link} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <Link to="/" >Get Weather</Link>
      <Link to="/about">About</Link>
      <Link to="/examples">Examples</Link>
    </div>
  );
}

module.exports = Nav;