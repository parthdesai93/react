var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');


function StartOver(){
	return(
		<div className="col-sm-12" styles={styles.space}>
			<Link to='/playerOne'>
				<button type="button" className="btn btn-lg btn-danger">
					Start Over
				</button>
			</Link>
		</div>
	)
}

function Results (props){
	if(props.isLoading === true){
		return(
			<Loading text='Calculating score' speed={100}/>
		)
	}

	if(props.scores[0] === props.scores[1]){
		return(
			<MainContainer >
				<h1> Its a tie </h1>
				<StartOver />
			</MainContainer>
		)
	}

	var winningIndex = props.scores[0] > props.scores[1] ? 0: 1;
	var losingIndex = winningIndex === 1 ? 0 : 1;
	return(
		<MainContainer>
			<h1> Result </h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header="Winner">
					<UserDetails info={props.playersInfo[winningIndex]} score={props.scores[winningIndex]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header="Loser">
					<UserDetails info={props.playersInfo[losingIndex]} score={props.scores[losingIndex]} />
				</UserDetailsWrapper>
			</div>
			<StartOver />
		</MainContainer>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	scores: PropTypes.array.isRequired,
	playersInfo: PropTypes.array.isRequired
}


module.exports = Results;