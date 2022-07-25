export interface BlogPostFrontmatter {
	date: string;
	title: string;
}

export interface BlogPostMeta extends BlogPostFrontmatter {
	href: string;
}
export interface Skill {
	name: string;
	years: number;
	started: number;
}
