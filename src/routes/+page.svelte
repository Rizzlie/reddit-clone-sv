<script lang="ts">
	import { page } from '$app/stores';
	import Post from '$lib/components/Post/Post.svelte';

	$: posts = $page.data.posts;
</script>

{#each posts as post}
	<div class="mb-6">
		<Post {post} interactive={true} />
	</div>
{/each}
