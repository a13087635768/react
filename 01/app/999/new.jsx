import Op1 from '../999/Op1.jsx'
import Dhk1 from '../999/Dhk1.jsx'

var React = require('react');

var Mb1 = React.createClass({
	getInitialState() {
		$('#myModal').modal('hide');
		return{
			value:"",
		}

	},
	setvalue:function(op1value){
		return(
			this.setState({value:op1value})
			)
		

	},
	divop:function(event){
				$('#myModal').modal('show')	
	},

	render: function() {
		return (
			<div className="col-md-3">
			<div className="panel">
  			<div className="panel-heading" onDoubleClick={this.divop}>
   	 		{this.state.value}
  			</div>
  			<div className="panel-body">
  			<Op1  value={this.state.value}  initialChecked={this.state.value} setvalue={this.setvalue}/>
 	 	</div>
		</div>
		<Dhk1  bt={this.state.value} nr={this.state.value}/>
			</div>
		);
	}

});



//点击打开后的面板

/*var Op1 = React.createClass({

	getInitialStat:function(){
		return(
			value:false
			)

	},
	render: function() {
		return (
			<div className="col-md-12" >
			123
			</div>
		);
	}

});*/


module.exports = Mb1;


