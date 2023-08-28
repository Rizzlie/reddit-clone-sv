<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="font-bold">Reddit clone</h1>

{#if $page.data.session}
	Hello {$page.data.session.user.name}
{:else}
	<a
		role="button"
		class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
		href="/login"
	>
		Sign In
	</a>
{/if}
