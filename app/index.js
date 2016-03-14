// var USER_DATA 	 = {
// 	name : 'Parth Desai',
// 	username: 'parthdesai93',
// 	image: 'https://scontent-ord1-1.xx.fbcdn.net/hprofile-xtf1/v/t1.0-1/p160x160/11887830_10153458104574462_3819436137291360433_n.jpg?oh=1cb446b9cc42d14f3e4bd3475f835eae&oe=5750FD3D'
// }

var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');

 


ReactDom.render(routes, document.getElementById('app'));

// var ProfilePic = React.createClass({
// 	render: function(){
// 		return <img src = {this.props.imageURL} style={{height: 100, width:100}} />
// 	}
// });

// var Link = React.createClass({
// 	changeURL: function(){
// 		window.location.replace(this.props.href)
// 	},

// 	render: function() {
// 		return(
// 			<span style={{color:'blue', cursor: 'pointer'}}
// 			onClick={this.changeURL}>
// 			{this.props.children}
// 			</span>
// 		)
// 	}
// })


// var ProfileLink = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 				<Link href={"https://github.com/" + this.props.username}>
// 				{this.props.username}
// 				</Link>
// 			</div>
// 		)
// 	}
// });

// var ProfileName = React.createClass({
// 	render: function(){
// 		return(
// 			<div>{this.props.name}</div>
// 		)
// 	}
// });

// var Avatar = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 				<ProfilePic imageURL={this.props.user.image} />
// 				<ProfileLink username={this.props.user.username} />
// 				<ProfileName name={this.props.user.name} />
// 			</div>
// 		)
// 	}
// })