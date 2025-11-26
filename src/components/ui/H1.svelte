<script lang="ts">
	// svelte-ignore export_let_unused
	let className: string = '';

	export { className as class };
</script>

<!-- svelte-ignore a11y_missing_content -->
<h1 class="mb-6 text-4xl font-bold text-white md:text-5xl {className}">
	<slot />
</h1>
