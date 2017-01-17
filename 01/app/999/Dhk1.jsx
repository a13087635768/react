var React = require('react');

var Dhk1 = React.createClass({
	getInitialState() {
	return{
		
			}	
	},
	render: function() {
		return (
			<div >
			<div className="modal fade" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">关闭</span></button>
        <h4 className="modal-title">{this.props.bt}</h4>
      </div>
      <div className="modal-body">
        <p>{this.props.nr}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" className="btn btn-primary">保存</button>
      </div>
    </div>
  </div>
</div>

			</div>
		);
	}

});
	
module.exports =Dhk1;

