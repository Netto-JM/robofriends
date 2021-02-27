import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	if (true) throw new Error('NOOOOOOO!');
	const cardComponent = robots.map((user) => {
		return (
			<Card 
				key={user.id}
				id={user.id}
				name={user.name}
				email={user.email}
				/>
		);
	})
	return (
		<div>
	    	{cardComponent}
	    </div>
	);
}

export default CardList;