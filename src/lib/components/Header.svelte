<script>
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { page } from '$app/stores';

	const NAV_ITEMS = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' },
	];
</script>

<header>
	<div class="header">
		<a href="/">
			<h1>Alex Daichendt</h1>
		</a>

		<ThemeSwitcher />
	</div>
	<nav>
		<ol class="navList">
			{#each NAV_ITEMS as navItem}
				<li
					class="navItem {$page.url.pathname === navItem.href ||
					(navItem.href === '/blog' && $page.url.pathname.includes('/blog'))
						? 'active'
						: ''}"
				>
					<a href={navItem.href}>{navItem.label}</a>
				</li>
			{/each}
		</ol>
	</nav>
</header>

<style>
	header {
		margin-bottom: 3rem;
	}
	.active {
		font-weight: 600;
	}
	.navList {
		padding: 0;
	}
	.navItem {
		display: inline;
	}
	.navItem:not(:last-child)::after {
		content: '·';
		margin-right: 0.5rem;
	}

	.navItem a:hover {
		color: var(--text-strong-color);
	}
	.navItem a:after {
		content: '';
		position: absolute;
		bottom: -2px;
		right: 50%;
		width: 0%;
		border-bottom: 3px solid var(--outline-color);
		transition: 0.3s;
	}
	.navItem a:before {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		width: 0%;
		border-bottom: 3px solid var(--outline-color);
		transition: 0.3s;
	}
	.navItem a:hover:after {
		width: 50%;
	}
	.navItem a:hover:before {
		width: 50%;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
	.header h1 {
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
		color: var(--special-color);
	}

	a {
		text-decoration: none;
		color: inherit;
		font-size: 1.2rem;
		position: relative;
	}
	ol {
		list-style-type: none;
	}
</style>
