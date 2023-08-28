<script lang="ts">
	import '../app.scss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<Navbar />

<div class="container mx-auto h-full max-w-7xl pt-12">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
		color: theme(colors.slate.900);
	}
</style>
