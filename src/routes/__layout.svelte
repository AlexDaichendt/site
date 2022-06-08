<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { Button, Switch, Container, createStyles, SvelteUIProvider } from '@svelteuidev/core';
	import type { SvelteUIProviderProps } from '@svelteuidev/core';

	const config: SvelteUIProviderProps['config'] = {
		light: { bg: 'White', color: 'Black' },
		dark: { bg: '#373737', color: '#C1C2C5' }
	};

	const MENU_ITEMS = [
		{ label: 'Blog', href: '/blog' },
		{ label: 'Projects', href: '/projects' }
	];
	// current y coordinate of the scroll bar
	let y: number;
	let isDark = false;
	function toggleTheme() {
		isDark = !isDark;
	}

	const useStyles = createStyles((theme) => {
		return {
			root: {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				position: 'sticky',
				top: 0,
				padding: theme.space[4],
				'&.scrolled': {
					[`${theme.dark} &`]: {
						// using of SvelteUI utilities
						// bc === backgroundColor
						bc: theme.colors['dark500'].value
					},
					bc: theme.colors['gray700'].value,
					color: 'rgb(223 223 223);',
					boxShadow: theme.shadows.lg
				}
			},
			list: {
				listStyle: 'none',
				display: 'flex',
				marginBlock: '0px',
				gap: theme.space[2]
			},
			menuItem: {
				fontWeight: theme.fontWeights.bold
			}
		};
	});
	$: ({ classes, getStyles, cx } = useStyles());
</script>

<svelte:window bind:scrollY={y} />

<SvelteUIProvider
	{config}
	themeObserver={isDark ? 'dark' : 'light'}
	withNormalizeCSS
	withGlobalStyles
	ssr
>
	<div class={cx(getStyles(), { scrolled: y > 0 })}>
		<h1>Alex' Website</h1>
		<nav>
			<ul class={classes.list}>
				{#each MENU_ITEMS as menuItem}
					<li>
						<Button variant="subtle" color="cyan" radius="xl" uppercase ripple>
							<a class={classes.menuItem} href={menuItem.href}>{menuItem.label}</a>
						</Button>
					</li>
				{/each}
			</ul>
		</nav>
		<Switch offLabel="Dark" size="lg" color="yellow" on:change={toggleTheme} />
	</div>
	<Container>
		<slot />
	</Container>
</SvelteUIProvider>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
