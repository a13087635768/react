
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory,browserHistory,IndexRoute,Redirect,IndexRedirect,IndexLink}from 'react-router'





//this.props.children------表示所有的子节点

const history = createBrowserHistory();


class App extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  getInitialState() {
    return{
      name:"shows/12"
    }
  }

   render() {
  
       return(
      <div>首页
      <div>
      <IndexLink to="/">首页</IndexLink>
      <Link to="tv">链接1</Link>
      <Link to="shows/12" query={{orderBy:"date"}}>链接2</Link>
      </div>
       {this.props.children}
     </div>
    
      )
     }
}

class TV extends React.Component{
  render() {
    return(<div>这是链接1</div>)
  }
}


class Show extends React.Component{

  render() {
    return(<div>这是链接2{this.props.params.id}</div>)
  }
}




class Home extends React.Component{
 render() {
    return(<div>这是home页面</div>)
  }


}
/*var App = React.createClass({

  render: function() {
    return (
     
    );
  }

});


var TV = React.createClass({

  render: function() {
    return (
      
    );
  }

});



var Show = React.createClass({
  componentWillMount:function(props){
    super(props);
    console.log(this.props.params);
  },

  render: function() {
    return (
      
    );
  }

});

*/

ReactDOM.render(
    ( <Router history={hashHistory}>
     
    <Route path="/" component={App}>
    <IndexRoute  component={Home}/>
    <Route path="tv" component={TV}>
    
    </Route>
    <Route path="shows/:id" component={Show}  >
        </Route>
    </Route>
    </Router>),
    document.getElementById("home")

    );

