<script lang="ts">
	let className = '';
	export { className as class };
</script>

<section class="py-12 md:py-20 {className}">
	<slot />
</section>
