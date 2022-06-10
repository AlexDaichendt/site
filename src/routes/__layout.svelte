<script>
	import {
		Button,
		Switch,
		Container,
		createStyles,
		SvelteUIProvider,
		createTheme,
	} from '@svelteuidev/core';
	// import type { SvelteUIProviderProps } from '@svelteuidev/core';
	import '@fontsource/syne';

	const theme = createTheme('themeOverride', { fonts: { standard: 'Syne' } });

	const config = {
		light: { bg: 'White', color: 'Black' },
		dark: { bg: '#373737', color: '#C1C2C5' },
	};

	const MENU_ITEMS = [
		{ label: 'Blog', href: '/blog' },
		{ label: 'Projects', href: '/projects' },
	];
	// current y coordinate of the scroll bar
	let y = 0;
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
				marginBottom: theme.space[12],
				padding: theme.space[4],
				'&.scrolled': {
					[`${theme.dark} &`]: {
						// using of SvelteUI utilities
						// bc === backgroundColor
						//bc: theme.colors['dark500'].value,
					},
					bc: '#242424',
					color: 'rgb(223 223 223);',
					boxShadow: theme.shadows.lg,
				},
			},
			list: {
				listStyle: 'none',
				display: 'flex',
				marginBlock: '0px',
				gap: theme.space[2],
			},
			menuItem: {
				fontWeight: theme.fontWeights.bold,
			},
		};
	});
	$: ({ classes, getStyles, cx } = useStyles());
</script>

<svelte:window bind:scrollY={y} />

<SvelteUIProvider
	{config}
	class={theme}
	themeObserver={isDark ? 'dark' : 'light'}
	withNormalizeCSS
	withGlobalStyles
	ssr
>
	<div class={cx(getStyles(), { scrolled: y > 0 })}>
		<h1><a href="/">Yard of Stuffs</a></h1>
		<nav>
			<ul class={classes.list}>
				{#each MENU_ITEMS as menuItem}
					<li class={classes.menuItem}>
						<Button href={menuItem.href} variant="subtle" color="cyan" radius="xl" uppercase ripple>
							{menuItem.label}
						</Button>
					</li>
				{/each}
			</ul>
		</nav>
		<Switch offLabel="Dark" size="lg" color="yellow" on:change={toggleTheme} />
	</div>
	<Container class={classes.main}>
		<slot />
	</Container>
</SvelteUIProvider>

<style>
	:global(body) {
		font-family: 'Syne', sans-serif;
	}

	:global(a) {
		text-decoration: none;
		color: inherit;
	}
</style>
