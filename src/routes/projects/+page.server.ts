import type { ProjectMeta, ProjectsFrontmatter } from '$lib/utils/types';
import type { PageServerLoad } from './$types';

const removeExtension = (path: string) => path.replace(/\.[^.]*$/g, '').replace('/+page', '');

export const load: PageServerLoad = async () => {
	const modulesSVX = import.meta.glob('./**/*.svx');
	const modulesMD = import.meta.glob('./**/*.md');
	const modules = { ...modulesMD, ...modulesSVX };
	const projects: ProjectMeta[] = [];
	const resolved = (await Promise.all(Object.values(modules).map((f) => f()))) as {
		metadata: ProjectsFrontmatter;
	}[];
	resolved.forEach((file, index) => {
		const path = Object.keys(modules)[index];
		const { metadata } = file;

		projects.push({ ...metadata, href: `projects/${removeExtension(path)}` });
	});

	return { projects };
};
