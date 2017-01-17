var React = require('react');

var Op1 = React.createClass({
	getInitialState() {
	return{
		value:""
			}	
	},
	setvalue:function(event){
		this.setState({value:event.target.value})
		this.props.setvalue(event.target.value)
	},

	render: function() {
		return (
			<div >
			<h3>修改父组件标题</h3>
				<input value={this.state.value} onChange={this.setvalue}/>
			</div>
		);
	}

});
	
module.exports =Op1;

