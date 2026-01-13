<script lang="ts">
	let className: string = '';

	export { className as class };
</script>

<h1 class="mb-6 overflow-hidden text-5xl font-bold text-white md:text-7xl {className}">
	<slot />
</h1>
