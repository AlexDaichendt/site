import type { LoadEvent } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export async function load({ data }: LoadEvent): PageLoad {
	return {
		posts: data.posts,
		seo: {
			title: 'Blog',
			description:
				'My blogposts, where I occasionally document things, that I think are not accessible or badly documented.',
		},
	};
}
