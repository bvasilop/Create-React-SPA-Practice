import React from 'react';
import '../styles/index.scss';

const Item = (props) => {
	console.log(props);
	return (
		<div className="content-container">
			<h1>
            {props.title}
            </h1>
				<p>
                {props.description}
                {props.match.params.id}
                </p>
		</div>
    );
};
Item.defaultProps = {
    title: `A project I've created`,
    description: `This page is for item with id of`
}

export default Item;
