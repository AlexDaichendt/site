<script lang="ts">
	export let id: string | undefined = undefined;
</script>

<li {id}><slot /></li>

<style>
	li {
		margin: 0.4rem 0;
	}
</style>
