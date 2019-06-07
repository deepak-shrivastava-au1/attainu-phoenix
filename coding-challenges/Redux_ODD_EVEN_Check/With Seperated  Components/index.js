import React from 'react';
import ReactDOM from 'react-dom';

import {Provider, connect} from 'react-redux';

import {oddEvenStore, oddEvenMapper} from './store.js';
import {Input} from './input.js';
import {Display} from './display.js';
import {App} from './app.js';

ReactDOM.render(<App />, document.getElementById("root"));

