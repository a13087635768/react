var React = require('react');

var Tr = React.createClass({
	getInitialState:function() {
		return{
			username:true,
			password:true,
			root:true,
			uservalue:this.props.user,
			passwordvalue:this.props.password,
			rootvalue:this.props.root,
			defaultvalue:this.props.user

		}
	},
	setuserdisabled:function(event){
		this.setState({username:!this.state.username})

	},
	setpassworddisabled:function(event){
		this.setState({password:!this.state.password})

	},
	setrootdisabled:function(event){
		this.setState({root:!this.state.root})

	},
	setuservalue:function(event){
		this.setState({uservalue:event.target.value})
	},
	setpasswordvalue:function(event){
		this.setState({passwordvalue:event.target.value})
		
	},
	setrootvalue:function(event){
		this.setState({rootvalue:event.target.value})
		
	},
	ajaxput:function(event){
		
		if(event.target.name=="user"){
			this.setState({username:!this.state.username})
			alert(event.target.name+(event.target.value))
			
		}
		else if(event.target.name=="password"){
			this.setState({password:!this.state.password})
			alert(event.target.name+(event.target.value)+(this.props.user))

		}else{
			this.setState({root:!this.state.root})
			alert(event.target.name+(event.target.value))
		}

	},

	render: function() {
		return (
	<tr>
      <th  onDoubleClick={this.setuserdisabled} ><input name="user" className="form-control" value={this.state.uservalue}  disabled={this.state.username} onChange={this.setuservalue}  onBlur={this.ajaxput} /></th>
      <th onDoubleClick={this.setpassworddisabled} ><input   name="password"  className="form-control"  value={this.state.passwordvalue} disabled={this.state.password}  onBlur={this.ajaxput} onChange={this.setpasswordvalue} /></th>
      <th onDoubleClick={this.setrootdisabled} ><input  name="root"  className="form-control" value={this.state.rootvalue}  disabled={this.state.root} onBlur={this.ajaxput} onChange={this.setrootvalue}/></th>
    </tr>
		);
	}

});

module.exports = Tr;