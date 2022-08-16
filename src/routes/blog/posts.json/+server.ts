import type { BlogPostFrontmatter, BlogPostMeta } from '../../lib/utils/types';

const removeExtension = (path: string) => path.replace(/\.[^.]*$/g, '').replace('/index', '');

export async function GET() {
	const modulesSVX = import.meta.glob('./**/*.svx');
	const modulesMD = import.meta.glob('./**/*.md');
	const modules = { ...modulesMD, ...modulesSVX };
	const posts: BlogPostMeta[] = [];
	const resolved = (await Promise.all(Object.values(modules).map((f) => f()))) as {
		metadata: BlogPostFrontmatter;
	}[];
	resolved.forEach((file, index) => {
		const path = Object.keys(modules)[index];
		const { metadata } = file;

		if (!metadata.hidden) posts.push({ ...metadata, href: `blog/${removeExtension(path)}` });
	});

	posts.sort((a, b) => new Date(b.created).valueOf() - new Date(a.created).valueOf());

	return {
		body: { posts },
	};
}
