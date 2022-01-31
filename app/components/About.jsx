var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center about-page">About Component</h1>
      <p>This is a sentence in React</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> This was the JavaScript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather  Maps</a> I used this to search for data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
