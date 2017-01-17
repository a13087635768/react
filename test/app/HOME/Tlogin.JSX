var React = require('react');

var Tlogin = React.createClass({

	render: function() {
		var tbottom ={    
     'min-height':'30px',
     'margin-bottom':'0', 
     'border-radius':'0',
		}

		return (
			<div>
			 <nav className="navbar navbar-inverse" role="navigation" style={tbottom}>
	<div className="container-fluid">
    <div className="navbar-header">
        <a className="navbar-brand" href="#">Welcome to 加油吧！</a>
    </div>
    <div>
        <ul className="nav navbar-nav">
            <li className="active"><a href="#">最新公告</a></li>
            <li><a href="#">网站简介</a></li>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                 关于我们 <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#">加油请找我！</a></li>
                    <li><a href="#">同上~</a></li>
                    <li><a href="#">友情的分割线</a></li>
                    <li><a href="#">~~~~~~~~~~~</a></li>
                    <li className="divider"></li>
                    <li><a href="#">断层了555~~</a></li>
                    <li className="divider"></li>
                    <li><a href="#">6666666</a></li>
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

module.exports = Tlogin;