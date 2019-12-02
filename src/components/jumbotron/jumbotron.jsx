import React, { Component } from 'react';
import axios from 'axios';
import './jumbotron.scss';

export class jumbotron extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount() {
		axios
			.get('https://rel.ink/api/links/Nn8y9p/')
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios.post('https://news.ycombinator.com/').then((response) => {
			console.log(response);
		});
	};

	render() {
		return (
			<section className="jumbotron">
				<div className="top-jumbotron">
					<div className="leftJumbo">
						<h1>More than just shorter links</h1>
						<p>
							Build your brand's recognition and get detailed insights on how your links are performing.
						</p>
						<button className="btn-jumbotron">Get Started</button>
					</div>
					<div className="rightJumbo" />
				</div>
				<div className="bottom-jumbotron">
					<form onSubmit={this.submitHandler}>
						<input type="text" id="text" placeholder="Shorten a link here..." />
						<input type="submit" value="Shorten it!" />
					</form>
				</div>
			</section>
		);
	}
}

export default jumbotron;
