var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');


var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return{
			isLoading: false,
			playerInfo: []
		}
	},
	componentDidMount: function(){
		var query = this.props.location.query;
		//get info from github
	},
	render: function(){
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playerInfo={this.state.playerInfo} />
		);
	}
});

module.exports = ConfirmBattleContainer;