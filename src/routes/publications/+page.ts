import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	return {
		publications: data.publications,
		seo: {
			title: 'Publications',
			description: 'Detailed descriptions of publications by Alex Daichendt',
		},
	};
};
