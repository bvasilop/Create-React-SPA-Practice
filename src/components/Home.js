import React from 'react';
import '../styles/index.scss';

const Home = (props) => (

    <div>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.content}
        </p>
    </div>

);
Home.defaultProps = { // using default props
    title: 'Welcome',
    content: 'This is my site. Take a look around'
};

export default Home;
