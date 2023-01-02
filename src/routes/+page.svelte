<script lang="ts">
	import SEO from '$components/SEO.svelte';
	import ListItem from '$components/ListItem.svelte';
	import Link from '$components/Link.svelte';

	let SKILLS = [
		{ name: 'Lightweight virtualisation (LXC, Docker)' },
		{ name: 'Container orchestration at scale (K8s)' },
		{ name: 'Cloud Computing (AWS, Cloudflare)' },
		{ name: 'Web development (mostly frontend with React, Svelte, vanilla)' },
		{ name: 'Scripting and automation (Bash, Python)' },
		{ name: 'git and GitOps pipelines' },
		{ name: 'Linux administration (Debian, Arch)' },
		{ name: 'Object oriented programming (Java)' },
	];

	const PROJECTS = [
		{
			name: 'Lightweight low-latency virtual networking',
			href: '/blog/tumthesis',
			description: 'Evaluate the performance of containers in low-latency networking',
		},
		{
			name: 'This site',
			href: 'https://github.com/AlexDaichendt/site',
			description: 'Complete source code for this website',
		},
		{
			name: 'Gear Optimizer (GW2)',
			href: 'https://optimizer.discretize.eu',
			description:
				'MMO Guild Wars 2: Outputs the optimal build given numerous input paramaters; 500 DAUs',
		},
		{
			name: 'Discretize.eu (GW2)',
			href: 'https://discretize.eu',
			description: 'MMO Guild Wars 2: Advanced player guides; 3000 DAUs',
		},
		{
			name: 'discretize-ui (GW2)',
			href: 'https://github.com/discretize/discretize-ui',
			description: 'MMO Guild Wars 2: UI library for mirroring in game tooltips with React',
		},
		{
			name: 'Gw2Library (GW2)',
			href: 'https://gw2library.princeps.biz/',
			description:
				'MMO Guild Wars 2: Build library interfacing with the optimizer; CRUD app - NextJS, AWS',
		},
		{
			name: 'LandLord',
			href: 'https://www.spigotmc.org/resources/landlord-2.44398/',
			description: 'Minecraft plugin for protecting and managing areas - Java (until 2018)',
		},
	];
</script>

<SEO />

<h1>Hi, my name is Alex!</h1>

<p>I am a software engineer, Linux enthusiast and a friend of lightweight, resilient systems.</p>
<p>
	Programming has been a hobby of mine since my teens. Been working on countless projects for
	various games. For a few years now I am maintaining a small homelab, which got me into DevOps/SRE.
	I am a privacy enthusiast and advocate for non-invasive software. Sometimes, I build slick
	websites that do not load megabytes of data and follow best-practices. Currently, I am working on
	my Masters degree in computer science at <Link href="https://www.tum.de/">TUM</Link>.
</p>
<h2>Skills</h2>

<ul>
	{#each SKILLS as skill}
		<ListItem>
			{skill.name}
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
