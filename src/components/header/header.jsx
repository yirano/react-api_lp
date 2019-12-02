import React, { Component } from 'react';
import './header.scss';

export class header extends Component {
	state = {
		show: false
	};

	handleClick = () => {
		this.setState((prevState) => {
			return (prevState.show = !prevState.show);
		});
	};

	render() {
		return (
			<header>
				<h2>Shortly</h2>
				<button
					className={this.state.show ? 'menuIcon menuActive' : 'menuIcon menuInactive'}
					onClick={this.handleClick}
				>
					<span />
					<span />
					<span />
				</button>
				<nav className={this.state.show ? 'show' : null}>
					<div className="navLeft">
						<ul>
							<li>
								<a href="/">Features</a>
							</li>
							<li>
								<a href="/">Pricing</a>
							</li>
							<li>
								<a href="/">Resources</a>
							</li>
						</ul>
					</div>
					<div className="navRight">
						<ul>
							<li>
								<a href="/">Login</a>
							</li>
							<li>
								<button className="btn-signUp">Sign Up</button>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default header;
