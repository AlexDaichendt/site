import type { BlogPostFrontmatter, BlogPostMeta } from '../../types';

export async function GET() {
	const modules = import.meta.glob('./*.svx');
	const posts: BlogPostMeta[] = [];

	const resolved = (await Promise.all(Object.values(modules).map((f) => f()))) as {
		metadata: BlogPostFrontmatter;
	}[];

	resolved.forEach(({ metadata }, index) => {
		const path = Object.keys(modules)[index].replace('.svx', '');
		if (!metadata.hidden) posts.push({ ...metadata, href: `blog/${path}` });
	});

	posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

	return {
		body: { posts },
	};
}
