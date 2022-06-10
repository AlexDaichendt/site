<script context="module" lang="ts">
	export async function load({ fetch }: LoadEvent): LoadOutput {
		const response = await fetch(`/projects/projects.json`);
		const asJson = await response.json();
		return {
			status: response.status,
			props: {
				projects: response.ok && asJson.projects,
			},
		};
	}
</script>

<script lang="ts">
	import Icon from 'mdi-svelte';
	import { Card, createStyles, Text, TextInput, theme, Title, Tooltip } from '@svelteuidev/core';
	import { mdiMagnify, mdiAccountMultiple } from '@mdi/js';
	import type { Project } from './types';
	import type { LoadEvent, LoadOutput } from '@sveltejs/kit';

	export let projects: Project[] = [];
	let search = '';

	const useStyles = createStyles((theme) => {
		return {
			root: {
				mt: theme.space[8],
			},
			main: {
				display: 'flex',
			},
			sidebar: { maxWidth: 250 },
			input: { width: '100%' },
			projects: {
				display: 'grid',
				gap: theme.space.smPX,
				listStyle: 'none',
				margin: theme.space[2],
				padding: 0,
			},
			project: {
				transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
				'&:hover': {
					boxShadow: 'rgb(46 41 51 / 8%) 0px 4px 16px, rgb(71 63 79 / 16%) 0px 8px 24px',
					position: 'relative',
					backgroundColor: 'White',
				},
			},
			projectTop: {
				display: 'flex',
				mb: theme.space[8],
				justifyContent: 'space-between',
			},
			content: {
				marginLeft: theme.space[10],
				marginRight: theme.space[10],
			},
			projectTopSmall: {
				fontSize: '0.8rem',
			},
		};
	});
	$: ({ classes, getStyles, cx } = useStyles());
</script>

<div class={getStyles()}>
	<h1>Projects</h1>
	<div class={classes.main}>
		<aside class={classes.sidebar}>
			<div class="searchbar">
				<Icon path={mdiMagnify} color="black" />
				<TextInput class={classes.input} placeholder="Search Projects" bind:value={search} />
			</div>
			<ul class={classes.projects}>
				{#each projects as project}
					<li>
						<a href={project.url}>
							<Card.Container
								p={12}
								class={classes.project}
								override={{
									br: '$md',
									boxShadow: 'unset',
									backgroundColor: theme.colors['gray100'],
									opacity: 0.8,
								}}
							>
								<div class={classes.projectTop}>
									<Title order={4} override={{ mb: 8, fontWeight: theme.fontWeights.extrabold }}
										>{project.title}</Title
									>
									<Tooltip label="Daily visitors" withArrow>
										<div class={classes.projectTopSmall}>
											<Icon path={mdiAccountMultiple} size="0.9rem" />
											{project.usersPerDay}
										</div>
									</Tooltip>
								</div>

								<Text override={{ fontWeight: theme.fontWeights.extralight }}
									>{project.description}</Text
								>
							</Card.Container>
						</a>
					</li>
				{/each}
			</ul>
		</aside>
		<div class={classes.content}><slot /></div>
	</div>
</div>

<style>
	.searchbar {
		display: flex;
		align-items: center;
	}
</style>
