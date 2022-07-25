<script>
	import { mdiEmailEditOutline } from '@mdi/js';
	import { mdiGithub } from '@mdi/js';
	import Icon from 'mdi-svelte';
	import Link from '../components/Link.svelte';
</script>

<h1>Contact Information</h1>

<ul>
	<li>
		<Icon path={mdiEmailEditOutline} />
		E-Mail: <Link disableIcon href="mailto:me@daichendt.one">me@daichendt.one</Link>
	</li>
	<li>
		<Icon path={mdiGithub} />
		Github: <Link disableIcon href="https://github.com/AlexDaichendt">AlexDaichendt</Link>
	</li>
</ul>

I don't use any social media.

<style>
	ul {
		list-style-type: none;
	}
</style>
