import React from 'react';
import Header from './components/header/header';
import Jumbotron from './components/jumbotron/jumbotron';
import Shorten from './components/Shorten/shorten';
import Statistics from './components/statistics/statistics';
import Cta from './components/cta/cta';
import Footer from './components/footer/footer';
import './App.scss';

function App() {
	return (
		<div className="container">
			<main>
				<Header />
				<Jumbotron />
				<Shorten />
				<Statistics />
				<Cta />
			</main>
			<Footer />
		</div>
	);
}

export default App;
