
var React = require('react');

import {Router, Route, Link , hashHistory,IndexRoute } from 'react-router'
var Addleft = React.createClass({

    render: function() {
        return (
            <div className="container-fluid all">
                <ul id="main-nav" className="nav nav-tabs nav-stacked" >
                    <li className="active">
                        <a href="#">
                            <i className="glyphicon glyphicon-th-large"></i>
                            首页         
                        </a>
                    </li>
                    <li>
                        <a href="#systemSetting" className="nav-header collapsed" data-toggle="collapse">
                            <i className="glyphicon glyphicon-cog"></i>
                            系统管理
                               <span class="pull-right glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul id="systemSetting" className="nav nav-list collapse secondmenu" >

                            <li><a href="#"><i className="glyphicon glyphicon-edit"></i>修改密码</a></li>
                            <li><a href="#"><i className="glyphicon glyphicon-eye-open"></i>日志查看</a></li>
                        </ul>
                    </li>
                   <li>
                       <Link to="/about">  
                            <i className="glyphicon glyphicon-credit-card"></i>
                           加油管理        
                       </Link>  
                   </li>   
 
                    <li>
                        <a href="./grid.html">
                            <i className="glyphicon glyphicon-globe"></i>
                            收费管理
                            <span className="label label-warning pull-right">5</span>
                        </a>
                    </li>
 
                    <li>
                        <a href="./charts.html">
                            <i className="glyphicon glyphicon-calendar"></i>
                            图表统计
                        </a>
                    </li>
                    <li>
                       <Link to="about">
                             <i className="glyphicon glyphicon-user"></i>
                             用户管理
                        </Link>
                       </li>
                    <li><a href="#">
                        <i className="glyphicon glyphicon-th-list"></i>
                             菜单管理
                        </a>
                       </li>
                   <li>
                            <a href="#"><i className="glyphicon glyphicon-asterisk"></i>
                            角色管理
                            </a>
                   </li>
                    <li>
                        <a href="#">
                            <i className="glyphicon glyphicon-fire"></i>
                            关于系统
                        </a>
                    </li>
          
                </ul>
            </div>
        );
    }

});

module.exports = Addleft;



