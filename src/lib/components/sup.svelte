<script lang="ts">
	export let id: string | undefined;
</script>

<sup {id}><slot /></sup>

<style>
	sup {
		vertical-align: top;
		position: relative;
		top: -0.3em;
		left: -0.2em;
	}
</style>
