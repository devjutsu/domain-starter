import React, { useEffect, useState } from "react";
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = 'devjutsu';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
	const [currentAccount, setCurrentAccount] = useState('');

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log("Make sure you have MetaMask!");
			return;
		} else {
			console.log("We have the ethereum object", ethereum);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
		} else {
			console.log('No authorized account found');
		}
	};

	// Create a function to render if wallet is not connected yet
	const renderNotConnectedContainer = () => (
		<div className="connect-wallet-container">
			<img src="https://images8.alphacoders.com/746/thumbbig-746330.webp" alt="Samurai" />
			<button className="cta-button connect-wallet-button">
				Connect Wallet
			</button>
		</div>
	);

	// This runs our function when the page loads.
	useEffect(() => {
		checkIfWalletIsConnected();
	}, [])

	return (
		<div className="App">
			<div className="container">

				<div className="header-container">
					<header>
						<div className="left">
							<p className="title">🥷Jutsu Name Service</p>
							<p className="subtitle">Go blockchain.</p>
						</div>
					</header>
				</div>

				{renderNotConnectedContainer()}

				<div className="footer-container">
					<img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
					<a
						className="footer-text"
						href={TWITTER_LINK}
						target="_blank"
						rel="noreferrer"
					>{`@${TWITTER_HANDLE}`}</a>
				</div>
			</div>
		</div>
	);
}

export default App;
