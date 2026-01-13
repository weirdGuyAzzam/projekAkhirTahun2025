<script lang="ts">
	let className = '';

	export { className as class };
	export let href: string;
</script>

<a
	{href}
	class="font-semibold text-white transition-colors transform-stroke hover:text-gray-500 {className} "
	><slot /></a
>
