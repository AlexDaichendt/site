<script context="module" lang="ts">
	export async function load() {
		return {
			stuff: {
				title: 'Home',
				description:
					'Alex Daichendt"s website, blog, and yard of stuffs and things of modern tech.',
			},
		};
	}
</script>

<script lang="ts">
	import ListItem from '$components/ListItem.svelte';
	import Link from '$components/Link.svelte';
	import type { Skill } from '../lib/utils/types';

	let _SKILLS = [
		{ name: 'React/Svelte', started: 2019 },
		{ name: 'Scripting with Bash/Python', started: 2018 },
		{ name: 'Java', started: 2013 },
		{ name: 'LXC/Docker', started: 2021 },
		{ name: 'FaaS', started: 2021 },
		{ name: 'git', started: 2016 },
		{ name: 'Linux administration (Debian)', started: 2017 },
	];
	const SKILLS: Skill[] = _SKILLS.map((skill) => {
		const years = new Date().getFullYear() - skill.started;
		return { ...skill, years };
	});
	SKILLS.sort((a, b) => b.years - a.years);

	const PROJECTS = [
		{
			name: 'This site',
			href: 'https://github.com/AlexDaichendt/site',
			description: 'Complete source code for this website',
		},
		{
			name: 'Gear Optimizer',
			href: 'https://optimizer.discretize.eu',
			description:
				'Helps finding the optimal gear given numerous input paramaters for the MMO Guild Wars 2',
		},
		{
			name: 'Discretize.eu',
			href: 'https://discretize.eu',
			description: 'Guiding players of the MMO Guild Wars 2',
		},
		{
			name: 'discretize-ui',
			href: 'https://github.com/discretize/discretize-ui',
			description: 'UI library for mirroring tooltips of the MMO Guild Wars 2',
		},

		{
			name: 'LandLord',
			href: 'https://www.spigotmc.org/resources/landlord-2.44398/',
			description: 'Minecraft plugin for protecting and managing areas',
		},
	];
</script>

<h1>Hi, my name is Alex!</h1>

<p>I am a software engineer, Linux enthusiast and a friend of automation.</p>
<p>
	Programming has been a hobby of mine since my teens. Been working on countless projects for
	various games. For a few years now I am maintaining a small homelab, which got me into DevOps. I
	am a privacy enthusiast and advocate for non-invasive software. Sometimes, I build slick websites
	that do not load megabytes of data. Currently I complete my Bachelors degree in computer science
	at
	<Link href="https://www.tum.de/">TUM</Link> and will continue with my Masters.
</p>

<h2>Skills</h2>

<ul>
	{#each SKILLS as skill}
		<ListItem>
			{skill.name} - {skill.years} year{skill.started > 1 ? 's' : ''}
		</ListItem>
	{/each}
</ul>

<h2>Highlighted Projects</h2>
<ul>
	{#each PROJECTS as project}
		<ListItem>
			<Link href={project.href}>{project.name}</Link> - {project.description}
		</ListItem>
	{/each}
</ul>

<style>
</style>
