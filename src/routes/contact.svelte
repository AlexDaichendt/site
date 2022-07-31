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
	import { mdiEmailEditOutline, mdiKey } from '@mdi/js';
	import { mdiGithub } from '@mdi/js';
	import Icon from 'mdi-svelte';
	import Element from '$components/element.svelte';
	import Link from '$components/Link.svelte';
	import ListItem from '$components/ListItem.svelte';
</script>

<h1>Contact Information</h1>

<ul>
	<ListItem>
		<span class="listText">
			<Icon path={mdiEmailEditOutline} />
			E-Mail:</span
		>
		<span class="listValue">
			<Link disableIcon disablePrefetch href="mailto:me@daichendt.one">me@daichendt.one</Link>

			<span style="margin-left: 4px;">
				<Icon path={mdiKey} size="1rem" />
				<Link href="/pub.key" disablePrefetch>GPG key</Link>
			</span>
		</span>
	</ListItem>
	<ListItem>
		<span class="listText">
			<Icon path={mdiGithub} />
			Github:</span
		>
		<span class="listValue">
			<Link disableIcon href="https://github.com/AlexDaichendt">AlexDaichendt</Link></span
		>
	</ListItem>
	<ListItem>
		<span class="listText">
			<span style="font-size:1rem"><Element /></span>

			Element:</span
		> <span class="listValue"> @alexdaichendt:matrix.org</span>
	</ListItem>
</ul>

I usually reply within a couple minutes - if it is important.

<style>
	ul {
		list-style-type: none;
	}
	@media screen and (max-width: 480px) {
		ul {
			padding-left: unset;
		}
		.listText {
			display: block;
		}
		.listValue {
			margin-left: 2rem;
		}
	}
</style>
