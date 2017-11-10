console.log('hello from jsx')
const React = require('react')
const ReactDOM = require('react-dom')
const Wrapper = require('./wrapper.jsx')

ReactDOM.render(
    <Wrapper />,
  document.getElementById('content')
)