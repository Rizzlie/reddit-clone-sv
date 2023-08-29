<script lang="ts">
	import { page } from '$app/stores';
	import Post from '$lib/components/Post/Post.svelte';
</script>

<h1 class="h-14 text-3xl font-bold md:text-4xl">
	r/{$page.data.subreddit.name}
</h1>

{#each $page.data.subreddit.posts as post}
	<Post {post} interactive={true} showSubreddit={false} />
{/each}
