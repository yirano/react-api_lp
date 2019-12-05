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
					<div className="resultItem">
						<span className="leftResult">https://www.frontendmentor.io</span>
						<span className="rightResult">https://relink/abcdef</span>
					</div>
					<div className="resultItem">
						<span className="leftResult">https://www.frontendmentor.io</span>
						<span className="rightResult">https://relink/abcdef</span>
					</div>
					<div className="resultItem">
						<span className="leftResult">https://www.frontendmentor.io</span>
						<span className="rightResult">https://relink/abcdef</span>
					</div>
				</div>
			</section>
		);
	}
}

export default shorten;
