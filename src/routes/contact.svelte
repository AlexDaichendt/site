<script context="module" lang="ts">
	export async function load() {
		return {
			stuff: {
				title: 'Contact',
				description: 'All the communication channels for contacting Alex Daichendt ',
			},
		};
	}
</script>

<script>
	import { mdiEmailEditOutline } from '@mdi/js';
	import { mdiGithub } from '@mdi/js';
	import Icon from 'mdi-svelte';
	import Element from '$components/element.svelte';
	import Link from '$components/Link.svelte';
	import ListItem from '$components/ListItem.svelte';
</script>

<h1>Contact Information</h1>

<ul>
	<ListItem>
		<Icon path={mdiEmailEditOutline} />
		E-Mail: <Link disableIcon href="mailto:me@daichendt.one">me@daichendt.one</Link>
	</ListItem>
	<ListItem>
		<Icon path={mdiGithub} />
		Github: <Link disableIcon href="https://github.com/AlexDaichendt">AlexDaichendt</Link>
	</ListItem>
	<ListItem>
		<span style="font-size:1rem"><Element /></span>
		Element: @alexdaichendt:matrix.org
	</ListItem>
</ul>

I usually reply within a couple minutes - if it is important.

<style>
	ul {
		list-style-type: none;
	}
</style>
