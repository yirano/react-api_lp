import React from 'react';
import './header.scss';

export default function header() {
	return (
		<header>
			<h2>Shortly</h2>
			<nav>
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
