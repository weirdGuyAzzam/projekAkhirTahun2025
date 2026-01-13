<script lang="ts">
	let className = '';
	let idName = '';
	export { className as class };
	export { idName as id }
</script>

<section class="py-12 md:py-20 {className} {idName}">
	<slot />
</section>
