<script>
	export let title = '';
	export let description = '';
	export let timeActive = '';
	export let concluded = false;
	export let usersPerDay = 0;
</script>

<div>
	<h1>{title}</h1>

	<sub>{description}</sub>
	<ul>
		<li>{timeActive}</li>
		<li>{concluded}</li>
		<li>{usersPerDay}</li>
	</ul>
	<slot />
</div>
