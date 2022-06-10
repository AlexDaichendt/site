import type { Project } from './types';

export async function get() {
	const modules = import.meta.glob('./*.svx');

	const projects: Project[] = [];

	const resolved = await Promise.all(Object.values(modules).map((f) => f()));
	resolved.forEach((project, index) => {
		const { concluded, description, timeActive, title, usersPerDay } = project.metadata;

		projects.push({
			concluded,
			description,
			timeActive,
			title,
			usersPerDay,
			url: `/projects/${Object.keys(modules)[index].replace('.svx', '').replace('./', '')}`,
		});
	});
	return {
		body: { projects },
	};
}
