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
	import Link from '../components/Link.svelte';
	import type { Skill } from '../types';

	let _SKILLS = [
		{ name: 'React / Svelte', started: 2019 },
		{ name: 'Scripting with Bash/Python', started: 2018 },
		{ name: 'Java', started: 2013 },
		{ name: 'LXC / Docker', started: 2021 },
		{ name: 'FaaS', started: 2021 },
		{ name: 'git', started: 2016 },
		{ name: 'Linux administration (Debian)', started: 2017 },
	];
	const SKILLS: Skill[] = _SKILLS.map((skill) => {
		const years = new Date().getFullYear() - skill.started;
		return { ...skill, years };
	});
	SKILLS.sort((a, b) => b.years - a.years);
</script>

<h1>Hi, my name is Alex!</h1>

<p>I am a software engineer, Linux enthusiast and a friend of automation.</p>
<p>
	Programming has been a hobby of mine since my teens. Been working on countless projects for
	various games. Recently, I started to dabble my feet in DevOps. My formal education I received at <Link
		href="https://www.tum.de/">TUM</Link
	>, currently I am persuing my Masters.
</p>

<h2>Skills</h2>

<ul>
	{#each SKILLS as skill}
		<li>
			{skill.name} - {skill.years} year{skill.started > 1 ? 's' : ''}
		</li>
	{/each}
</ul>

<style>
</style>
