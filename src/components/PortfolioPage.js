import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.scss';
import portfolioPageStyles from './portfolioPage.module.scss';

const PortfolioPage = (props) => (
	<div className={portfolioPageStyles.items}>
		<h1>{props.title}</h1>
		<p>{props.description}</p>
		<Link to="/portfolio/1">Item One</Link>
		<Link to="/portfolio/2">Item Two</Link>
		<Link to="/portfolio/3">Item Three</Link>
		<Link to="/portfolio/4">Item Four</Link>
	</div>
);
PortfolioPage.defaultProps = {
    title: 'My Work',
    description: `Checkout the stuff I've done`
};

export default PortfolioPage;
