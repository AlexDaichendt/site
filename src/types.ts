export interface BlogPostFrontmatter {
	created: string;
	updated?: string;
	title: string;
	description: string;
	keywords: string[];
	hidden: boolean;
}

export interface BlogPostMeta extends BlogPostFrontmatter {
	href: string;
}
export interface Skill {
	name: string;
	years: number;
	started: number;
}
