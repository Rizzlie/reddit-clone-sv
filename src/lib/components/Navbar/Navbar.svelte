<script lang="ts">
	import { page } from '$app/stores';
	import SearchBar from '$lib/components/SearchBar/SearchBar.svelte';
	import Button from '$lib/components/ui/Button/Button.svelte';
	import { signOut } from '@auth/sveltekit/client';
</script>

<nav class="fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 bg-zinc-100 py-2">
	<div class="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
		<div>Reddit clone</div>

		<SearchBar />
		<div>
			<a role="button" class="rounded-md px-3 py-2 text-sm font-medium" href="/communities">
				Communities
			</a>

			{#if $page.data.session}
				<Button on:click={() => signOut()}>Sign out</Button>
			{:else}
				<a
					role="button"
					class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
					href="/login"
				>
					Sign In
				</a>
			{/if}
		</div>
	</div>
</nav>
