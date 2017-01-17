import {  Navbar,Nav,NavItem,NavDropdown,
    MenuItem,Modal,
    FormGroup,FormControl,
    Button} from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Mb1 from '../app/999/new.jsx'
import Op1 from '../app/999/Op1.jsx'


//home页面触摸
var Home = React.createClass({
     getInitialState: function() {
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
            <div  onTouchStart ={this.teststart} onTouchEnd={this.testend} onTouchMove={this.testhmove} >
          {/*主面板内容*/}
          <Mb1 />
          <Mb1 />
          <Mb1 />
        </div>
        <div>
        );
    }

});


ReactDOM.render(
    <Home />,
    document.getElementById("home")
    );




//路由
var Luyou = React.createClass({
    getInitialState:function() {
      return{
        html1:'<div class="col-md-12"  onclick="ppp(1,this)">新闻页面</div>'
      }  
    },

    render: function() {
        var background={"background-color":"#CCFF99"};
        var style={"height":"0px"};
        var jtstyle={"text-align":"center","vertical-align":"middle","line-height":"30px"};
        var astyle={"width":"100%","background-color":"#b0c4de","text-align":"center"}
      
        return(
<div className="example" style={background}>
  <div id="accordion">
    
      <a style={astyle} href="#collapseExample1" data-toggle="collapse" data-parent="#accordion" className="btn btn-link collapsed">折叠 1</a>
    
    <div className="collapse" id="collapseExample1" >
      <div className="with-padding">
        <p>被折叠元素内容。</p>
        <p>多个触发元素可以指向同一个折叠内容。</p>
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

            )
    }

});

//路由dom
ReactDOM.render(
    <Luyou  />,
    document.getElementById("ly")

    );