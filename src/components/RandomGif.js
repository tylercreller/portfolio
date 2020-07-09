import React, { useEffect, useState } from 'react';

export default () => {
	const [gif, setGif] = useState({});
	const fetchGif = () => {
		fetch(
			'https://api.giphy.com/v1/gifs/search?api_key=HqaEajdkssAcLyzVLQFojvgvFLyGsBhI&q=glitch&limit=1&rating=pg-13'
		)
			.then(res => {
				return res.json();
			})
			.then(res => {
				setGif(() => res.data[0]);
				console.log(res.data[0]);
			});
	};
	useEffect(() => {
		fetchGif();
	}, []);
	return (
		<div style={{ height: '100vw', backgroundColor: 'green' }}>
			{gif && gif.images && gif.images.original && (
				<React.Fragment>
					<img src={gif.images.original.url} />
				</React.Fragment>
			)}
		</div>
	);
};
