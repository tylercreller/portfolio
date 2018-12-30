import React from 'react';
import Layout from './Layout';

const NotFoundPage = () => (
	<Layout>
		<div className="not-found-text">
			<div className="not-found-text__title">Oof!</div>
			<div>This Page Doesn't Exist.</div>
		</div>
	</Layout>
);

export default NotFoundPage;