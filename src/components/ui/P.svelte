<script lang="ts">
	let className = '';
	export { className as class };
</script>

<p class="mb-4 text-base leading-relaxed text-white md:text-2xl {className}">
	<slot />
</p>
