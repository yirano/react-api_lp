import React, { Component } from 'react';
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
			</section>
		);
	}
}

export default jumbotron;
