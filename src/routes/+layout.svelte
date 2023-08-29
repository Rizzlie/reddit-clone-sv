<script lang="ts">
	import '../app.scss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<svelte:head>
	<title>Cattit: Paws and Posts</title>
</svelte:head>

<Navbar />

<div class="container mx-auto h-full max-w-7xl px-4 pt-12">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
		color: theme(colors.slate.900);
	}
</style>
