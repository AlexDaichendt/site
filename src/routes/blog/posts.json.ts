import type { BlogPostFrontmatter, BlogPostMeta } from '../../types';

export async function GET() {
	const modules = import.meta.glob('./*.svx');
	const posts: BlogPostMeta[] = [];

	const resolved = (await Promise.all(Object.values(modules).map((f) => f()))) as {
		metadata: BlogPostFrontmatter;
	}[];

	resolved.forEach(({ metadata }, index) => {
		const path = Object.keys(modules)[index].replace('.svx', '');
		posts.push({ ...metadata, href: `blog/${path}` });
	});

	return {
		body: { posts }
	};
}
