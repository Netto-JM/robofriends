import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const cardComponent = robots.map((user) => {
		return (
			<Card
				id={user.id}
				key={user.id}
				name={user.name}
				email={user.email}
				/>
		);
	})
	return (
		<>
	    {cardComponent}
		</>
	);
}

export default CardList;