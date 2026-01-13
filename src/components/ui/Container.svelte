<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="max-w-full px-4 sm:px-6 lg:px-8 {className}">
	<slot />
</div>
