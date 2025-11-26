<script lang="ts">
	let className = '';
	export { className as class };
</script>

<button
	class="rounded-lg bg-white/20 px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-700 {className}"
>
	<slot />
</button>
