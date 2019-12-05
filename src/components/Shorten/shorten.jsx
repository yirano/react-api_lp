import React, { Component } from 'react';
import axios from 'axios';
import './shorten.scss';

export class shorten extends Component {
	submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('https://rel.ink/api/links/', {
				url: 'https://news.ycombinator.com/'
			})
			.then((response) => {
				console.log(response);
			});
	};
	render() {
		return (
			<section className="shorten">
				<form onSubmit={this.submitHandler}>
					<input type="text" id="text" placeholder="Shorten a link here..." />
					<input type="submit" value="Shorten it!" />
				</form>
				<div className="results">
					<ul>
						<li>
							<div className="leftResult">https://www.frontendmentor.io</div>
							<div className="rightResult">https://relink/abcdef</div>
						</li>
						<li>
							<div className="leftResult">https://www.frontendmentor.io</div>
							<div className="rightResult">https://relink/abcdef</div>
						</li>
						<li>
							<div className="leftResult">https://www.frontendmentor.io</div>
							<div className="rightResult">https://relink/abcdef</div>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}

export default shorten;
