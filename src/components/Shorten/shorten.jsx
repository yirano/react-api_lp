import React, { Component } from 'react';
import axios from 'axios';
import './shorten.scss';

export class shorten extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urlValue: ''
		};
	}

	getValue = () => {
		this.setState = (urlValue) => {
			urlValue = document.getElementById('url');
		};
	};

	submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('https://rel.ink/api/links/', {
				url: this.state.urlValue
			})
			.then((response) => {
				console.log(response);
			});
	};
	render() {
		return (
			<section className="shorten">
				<form onSubmit={this.submitHandler}>
					<input type="text" id="url" placeholder="Shorten a link here..." />
					<input type="submit" value="Shorten it!" onClick={this.getValue} />
				</form>
				<div className="results">
					{/* <div className="resultItem">
						<div className="leftResult">https://www.frontendmentor.io</div>
						<div className="rightResult">https://relink/abcdef</div>
					</div>
					<div className="resultItem">
						<span className="leftResult">https://www.frontendmentor.io</span>
						<span className="rightResult">https://relink/abcdef</span>
					</div>
					<div className="resultItem">
						<span className="leftResult">https://www.frontendmentor.io</span>
						<span className="rightResult">https://relink/abcdef</span>
					</div> */}
				</div>
			</section>
		);
	}
}

export default shorten;
