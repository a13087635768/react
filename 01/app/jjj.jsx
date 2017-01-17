import {  Navbar,Nav,NavItem,NavDropdown,
    MenuItem,Modal,
    FormGroup,FormControl,
    Button} from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Mb1 from '../app/999/new.jsx'
import Op1 from '../app/999/Op1.jsx'



var React = require('react');

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

