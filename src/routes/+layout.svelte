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
		@apply bg-slate-50 text-slate-900  dark:bg-slate-950 dark:text-gray-400;
	}

	:global(body) {
		@apply min-h-screen pt-12 antialiased;
	}
</style>
