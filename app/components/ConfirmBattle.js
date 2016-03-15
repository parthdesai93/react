var React = require('react');

function ConfirmBattle(props){
	return props.isLoading === true
		? <p> Loading Info </p> 
		: <p> Confirm Battle </p> 
}

module.exports = ConfirmBattle;