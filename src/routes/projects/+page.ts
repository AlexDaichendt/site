import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	return {
		projects: data.projects,
		seo: {
			title: 'Projects',
			description: 'Detailed descriptions of projects created by Alex Daichendt',
		},
	};
};
