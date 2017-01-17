
import React from 'react';
import ReactDOM from 'react-dom';
import Tr from '../app/table/Tr.jsx';
import { Router, Route, hashHistory ,Link } from 'react-router';





var Table = React.createClass({

  render: function() {
    var json=[
    {
        user: "sq",
        password: "11111",
        root: "1"
    },
    {
        user: "shang",
        password: "22222",
        root: "1"
    },
    {
       user:"qqq",
       password:"3333",
       root:"2" 
    }
];

  
    return (

      <div>

      <div> 
      </div>
        <table className="table table-hover">
  <thead>
    <tr>
      <th>user</th>
      <th>password</th>
      <th>root</th>
    </tr>
  </thead>
  <tbody>
  {
    json.map(function (item) {
       return <Tr user={item.user}  password={item.password} root={item.root} key={item.user} />
                    })
  }
  </tbody>
  <tfoot>
    <tr>
      <td>...</td>
      <td>...</td>
    </tr>
  </tfoot>
</table>
        
      </div>
      
    );
  }

});




var  = React.createClass({

  render: function() {
    return (
      <div />
    );
  }

});




var Home = React.createClass({

  render: function() {
    return (
      <div>
    );
  }

});

