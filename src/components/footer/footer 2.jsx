import React, { Component } from 'react';
import Facebook from '../../imgs/icon-facebook.svg';
import Twitter from '../../imgs/icon-twitter.svg';
import Pinterest from '../../imgs/icon-pinterest.svg';
import Instagram from '../../imgs/icon-instagram.svg';
import './footer.scss';

export class footer extends Component {
	state = {
		features: [
			{
				id: 0,
				name: 'Link Shortening',
				link: '/'
			},
			{
				id: 1,
				name: 'Branded Links',
				link: '/'
			},
			{
				id: 3,
				name: 'Analytics',
				link: '/'
			}
		],
		resources: [
			{
				id: 0,
				name: 'Blog',
				link: '/'
			},
			{
				id: 1,
				name: 'Developers',
				link: '/'
			},
			{
				id: 3,
				name: 'Support',
				link: '/'
			}
		],
		company: [
			{
				id: 0,
				name: 'About',
				link: '/'
			},
			{
				id: 1,
				name: 'Our Team',
				link: '/'
			},
			{
				id: 3,
				name: 'Careers',
				link: '/'
			},
			{
				id: 4,
				name: 'Contact',
				link: '/'
			}
		],
		social: [
			{
				id: 0,
				img: Facebook,
				link: '/'
			},
			{
				id: 1,
				img: Twitter,
				link: '/'
			},
			{
				id: 2,
				img: Pinterest,
				link: '/'
			},
			{
				id: 3,
				img: Instagram,
				link: '/'
			}
		]
	};
	render() {
		return (
			<footer>
				<div className="footerFirst">
					<h2>Shortly</h2>
				</div>
				<div className="footerSecond">
					<ul>
						<li>Features</li>
						{this.state.features.map(({ id, name, link }) => {
							return (
								<li key={id}>
									<a href={link}>{name}</a>
								</li>
							);
						})}
					</ul>
					<ul>
						<li>Resources</li>
						{this.state.resources.map(({ id, name, link }) => {
							return (
								<li key={id}>
									<a href={link}>{name}</a>
								</li>
							);
						})}
					</ul>
					<ul>
						<li>Company</li>
						{this.state.company.map(({ id, name, link }) => {
							return (
								<li key={id}>
									<a href={link}>{name}</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="footerThird">
					<ul>
						{this.state.social.map(({ img, link, id }) => {
							return (
								<li key={id}>
									<a href={link}>
										<img src={img} alt="social media" />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</footer>
		);
	}
}

export default footer;
