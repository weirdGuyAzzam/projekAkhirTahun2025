<script lang="ts">
	// svelte-ignore export_let_unused
	let className = '';
	export { className as class };
</script>

<h3 class="mb-4 text-3xl font-semibold text-white md:text-5xl {className}">
	<slot />
</h3>
