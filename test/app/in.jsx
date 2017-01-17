
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link , hashHistory,IndexRoute } from 'react-router'
import Tlogin from '../app/HOME/Tlogin.jsx'
import Addleft from '../app/HOME/Addleft.jsx'




ReactDOM.render(
  <Tlogin />,
  document.getElementById('app')
); 

ReactDOM.render(
  <Addleft />,
  document.getElementById('left')
); 

