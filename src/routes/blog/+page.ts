import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	return {
		posts: data.posts,
		seo: {
			title: 'Blog',
			description:
				'My blogposts, where I occasionally document things, that I think are not accessible or badly documented.',
		},
	};
};
