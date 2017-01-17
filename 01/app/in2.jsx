import {  Navbar,Nav,NavItem,NavDropdown,
    MenuItem,Modal,
    FormGroup,FormControl,
    Button} from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Mb1 from '../app/999/new.jsx'
import Op1 from '../app/999/Op1.jsx'




//home页面
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
    componentDidUpdate:function(){
      $(ReactDOM.findDOMNode(this.refs.mb)).attr(id:"mb");

    },
    render: function() {
        var homestar=0;
        return (
            <div className="col-md-12"  ref="mb" >
            <div  onTouchStart ={this.teststart} onTouchEnd={this.testend} onTouchMove={this.testhmove} >
          {/*主面板内容*/}
          <Mb1 />
          <Mb1 />
          <Mb1 />
        </div>
        </div>
        );
    }

});


ReactDOM.render(
    <Home />,
    document.getElementById("home")

    );










{/*//底部导航暂时为按钮


var Db = React.createClass({

test:function(){
    this.setState(alert("哈哈哈哈"))
    },
    render: function() {

        return (
            <div>
    <div className="btn-group">
    <button className="btn" onClick={this.test}>按钮组</button>
    <button className="btn">第二个</button>
    <button className="btn">第三个</button>
    </div>
    </div>
        );
    }

});*/}


{/*ReactDOM.render(
    <Db />,
    document.getElementById("db")

    )*/}




//顶部导航条


var Dh = React.createClass({
    //设置导航条样式
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




//宣然此dom

ReactDOM.render(
    <Dh />,
    document.getElementById("dh")

    );


var Luyou = React.createClass({
    getInitialState() {
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


//垂直菜单路由
/*//luyou
var Luyou = React.createClass({
    
     render: function() {
        var stylename={"background-color":"#CCFF99","margin-left":"10px"};
     
        return(
           <div >
            <nav className="menu" data-toggle="menu" s>
  <button className="btn btn-primary" ><i className="icon-edit" ></i> CREATE</button>
  <button className="btn"><i className="icon-cloud-upload"></i> UPLOAD</button>
  <ul className="nav nav-primary">
    <li><a href="#collapseExample" data-toggle="collapse"><i className="icon-th"></i> 第一个网页</a></li>
<div className="collapse" id="collapseExample">
  <div className="bg-primary with-padding">
    <p>被折叠元素内容。</p>
    <p>多个触发元素可以指向同一个折叠内容。</p>
  </div>
</div>
    <li><a href="#"><i className="icon-user"></i>第二个网页</a></li>
    <li><a href="#"><i className="icon-trash"></i> Trash</a></li>
    <li><a href="#"><i className="icon-list-ul"></i> All</a></li>
    <li>
      <a href="#"><i className="icon-time"></i> Status</a>
      
    </li>
  </ul>
</nav>
   </div>    
    );

     }



});
//渲染出来



ReactDOM.render(
    <Luyou  />,
    document.getElementById("ly")

    );

/*{/*var a=<h1>第一段文字</h1>;
var b=<h1>第二段文字</h1>;
var c=<h1>第三段文字</h1>;

var ThisPage = React.createClass({
    //初始化状态
    getInitialState: function() {
        return {value: false};
    },

    //自定义的方法
    test:function(){
        this.setState({
            value:!this.state.value
        })

    },

    render: function() {
        var text=this.state.value? c:a;
        return (
            <div> 
            {text}
            {b}
            <Button bsStyle="primary" bsSize="large" onClick={this.test}>点击后第一段文字变为第三段文字</Button>
            <New />
            </div>
            
            );
    }

    
});



ReactDOM.render(

    <ThisPage />,

    document.getElementById('page')

    );*/

//下半部分的


var Reactin = React.createClass({

     getDefaultProps:function(){
        return{
       reminder:"11111111",
        }

    },
    getInitialState: function() {
      return {
       message:0,
       message1:0

      };

  },
 
  //加载完毕后运行的组件
  componentDidMount:function(){

  },
  setvalue:function(event){
    if(isNaN(event.target.value)){
       this.setState({reminder:"值不能为其他字符"})
    }else{

        this.setState({message:event.target.value})
    }

        
        
        
  },
  setvalue1:function(event){
        console.log("打印出来了1");
         this.setState({
            message1:event.target.value})
  },

  render: function () {
        var mess = this.state.message ;
        var mess1 = this.state.message1;
        var lastnumber=Number(mess)+Number(mess1);


        return (
            <div>
                <h1>{this.props.reminder}</h1>
                <input type="text" onChange={this.setvalue} value={mess} />
                <input type="text" onChange={this.setvalue1} value={mess1} />
                <br />
                <b>第一个值为{mess}</b>
                <br />
                <b>第二个值为{mess1}</b>
                <br />
                <b>第总值为{lastnumber}</b>


            </div>
        );
  }
});

ReactDOM.render(
    <Reactin  />,
    document.getElementById("container")

    );



    

/*var Reactin = React.createClass({
     getInitialState: function() {
    return {values: this.props.values};
    },
    //添加默认属性
    getDefaultProps:function(){
        return{

            values:"这下测试成功了吧"
        }

    },
    //验证属性值是否正确
    PropTypes:{



    },
    //自定义方法
    changes:function(){
        this.setState({
            values: this.state.value
        })

    },


    render: function() {
        return (
            <div>
            <input  />
            <P>12321321</P>
           </div> 
        );
    }

});*/

/*ReactDOM.render(
    <Reactin  />,
    document.getElementById("container")

    );*/

//路由窗口*/



