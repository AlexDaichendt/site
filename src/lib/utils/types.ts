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

export interface ImageMetadata {
	href: string;
	mime: string;
	width: number;
}

export interface Thumbnail {
	value: string;
	width: number;
	height: number;
}

export interface PageData {
	seo: {
		title: string;
		description: string;
		keywords: string[];
	};
}
