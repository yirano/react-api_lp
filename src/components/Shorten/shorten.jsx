import React, { Component } from 'react';
import './shorten.scss';

export class shorten extends Component {
	render() {
		return (
			<div class="bottom-jumbotron">
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
			</div>
		);
	}
}

export default shorten;
