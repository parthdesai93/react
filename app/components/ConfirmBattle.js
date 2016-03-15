var React = require('react');

function puke(object){
	return <pre> {JSON.stringify(object,null, ' ')}</pre>
}



function ConfirmBattle(props){
	return props.isLoading === true
		? <p> Loading Info </p> 
		: <div> Confirm Battle : {puke(props)} </div> 
}

module.exports = ConfirmBattle;