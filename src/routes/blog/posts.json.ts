import type { BlogPostFrontmatter, BlogPostMeta } from '../../lib/utils/types';

export async function GET() {
	const modules = import.meta.glob('./*.svx');
	const posts: BlogPostMeta[] = [];
	const resolved = (await Promise.all(Object.values(modules).map((f) => f()))) as {
		metadata: BlogPostFrontmatter;
	}[];
	resolved.forEach((file, index) => {
		const path = Object.keys(modules)[index];
		const { metadata } = file;

		if (!metadata.hidden) posts.push({ ...metadata, href: `blog/${path.replace('.svx', '')}` });
	});

	posts.sort((a, b) => new Date(b.created).valueOf() - new Date(a.created).valueOf());

	return {
		body: { posts },
	};
}
