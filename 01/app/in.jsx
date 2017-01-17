
import React from 'react';
import ReactDOM from 'react-dom';
import Mb1 from '../app/999/new.jsx'
import Op1 from '../app/999/Op1.jsx'
import {Router,Route,Link,IndexRoute,hashHistory,IndexLink,browserHistory }from 'react-router'



//主面板

var Home = React.createClass({
	getInitialState:function() {
		return {homestar: 0,
            	homeend:0};
	},
	teststart:function(event){
         this.state.homestar=event.touches[0].pageX;
        },
    testhmove:function(event){
        this.state.homeend=event.touches[0].pageX;
    },
    testend:function(event){
       
        if((this.state.homeend-this.state.homestar)<10){
            alert("触摸无效");
        }else{
            alert("开始坐标为"+this.state.homestar);
        alert("结束坐标为"+this.state.homeend)
        }
        this.state.homestar=0;
        this.state.homeend=0;
       
    },
    test:function(){alert("点击了")},
	render: function() {
		  var homestar=0;
		return (
			<div id="mb">
      <div>
            <div  onTouchStart ={this.teststart} onTouchEnd={this.testend} onTouchMove={this.testhmove} >
          <Mb1 />
          <Mb1 />
          <Mb1 />
        </div>
        </div>
        </div>
        
		)
	}

});



//导航条


var Dh = React.createClass({

  render: function() {
      var stylename={"background-color":"#b0c4de","margin-bottom":"10px"};

    return (

        <div style={stylename}>
            <nav className="navbar navbar-default" role="navigation">
  <div className="container-fluid">
    {/* 一般移动端使用*/}
    <div className="navbar-header">
    </div>

    <div className="collapse navbar-collapse navbar-collapse-example">
        <ul className="nav navbar-nav">
        <li className="active"><a href="your/nice/url">项目</a></li>
        <li><a href="your/nice/url">需求</a></li>
        </ul>
   
      <ul className="nav navbar-nav navbar-right">
      <li>
      <form className="navbar-form navbar-left" role="search">
      <div className="form-group">
          <input type="text" className="form-control" placeholder="搜索"/>
      </div>
      <button type="submit" className="btn btn-default">搜索</button>
      </form>
      </li>
        <li><a href="your/nice/url">帮助</a></li>
        <li className="dropdown">
          <a href="your/nice/url" className="dropdown-toggle" data-toggle="dropdown">探索 <b className="caret"></b></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="your/nice/url">敏捷开发</a></li>
            <li><a href="your/nice/url">HTML5</a></li>
            <li><a href="your/nice/url">Javascript</a></li>
            <li className="divider"></li>
            <li><a href="your/nice/url">探索宇宙</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


            </div>
      
    );
  }

});



//路由

var Luyou = React.createClass({
  getInitialState:function(){
    return{
        html1:'<div class="col-md-12"  onclick="ppp(1)">新闻页面</div>',
        html2:'<div class="col-md-12"  onclick="ppp(3)">主页面</div>'
      }  

  },

  render: function() {
    var background={"background-color":"#CCFF99"};
    var style={"height":"0px"};
    var jtstyle={"text-align":"center","vertical-align":"middle","line-height":"30px"};
    var astyle={"width":"100%","background-color":"#b0c4de","text-align":"center"};

    return (
      <div className="example" style={background}>
  <div id="accordion">
    
      <a style={astyle} href="#collapseExample1" data-toggle="collapse" data-parent="#accordion" className="btn btn-link collapsed">折叠 1</a>
    
    <div className="collapse" id="collapseExample1" >
      <div className="with-padding">
      <Link to="xw">新闻页面</Link>
    </div>
    </div>
    
      <a style={astyle} href="#collapseExample2" data-toggle="collapse" data-parent="#accordion" className="btn btn-link collapsed">折叠 2</a>
  
    <div className="collapse" id="collapseExample2" >
      <div className="with-padding">
        <p>被折叠元素内容。</p>
        <p>多个触发元素可以指向同一个折叠内容。</p>
      </div>
    </div>
    
      <a style={astyle} href="#collapseExample3" data-toggle="collapse" data-parent="#accordion" className="btn btn-link collapsed">折叠 3</a>
  
    <div className="collapse" id="collapseExample3" >
      <div className="with-padding">
      <div dangerouslySetInnerHTML={{__html:this.state.html1}}>
      </div>
      </div>
    </div>
  </div>
</div>
    );
  }

});




var Xinwen = React.createClass({

 

  render: function() {
    return (
      <div id="xw">
       <div>
      <div className="col-md-3" id="home">
        <Luyou></Luyou>
      </div>
      <div className="col-md-9" id="sl">
        <h1> 新闻内容</h1>
      </div>
      </div>

      </div>

    );
  }

});





var Zly = React.createClass({

  render () {
    return (
      <div>
      <div className="col-md-3" id="home">
        <Luyou></Luyou>
      </div>
      <div className="col-md-9" id="sl">
         <Home></Home>
      </div>
      </div>
     
    );
  }

});



//渲染




ReactDOM.render(
   <Router history={hashHistory}>
     <Route  path="/" component={Zly}>   
      </Route>
       <Route  path="xw" component={Xinwen}>
     </Route>
   </Router>
    ,
    document.getElementById("home")

    );


ReactDOM.render(
    <Dh />,
    document.getElementById("dh")
    );




