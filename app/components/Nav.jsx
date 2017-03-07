var React = require('React');
var {Link} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li><Link to="/" >Get Weather</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/examples">Examples</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        
      </div>
    </div>
  );
}

module.exports = Nav;
