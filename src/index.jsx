import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

require('file-loader?name=[name].[ext]!../public/index.html');

ReactDOM.render(<App />, document.getElementById('app'))
